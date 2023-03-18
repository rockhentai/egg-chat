'use strict';
const { Configuration, OpenAIApi } = require('openai');

const OPENAI_KEY = process.env.OPENAI_KEY;
const OPENAI_MODEL = process.env.OPENAI_MODEL;

const { Controller } = require('egg');
const { v4: uuidv4 } = require('uuid');

class ChatController extends Controller {
  async index() {
    const { ctx } = this;
    const {
      cid,
      question,
    } = ctx.request.query;

    const openai = new OpenAIApi(new Configuration({ apiKey: OPENAI_KEY }));

    const chatId = cid || uuidv4();

    const prevMessages = await ctx.model.Message.findAll({
      where: {
        chatId,
      },
      order: [[ 'createdAt', 'ASC' ]],
      attributes: [ 'role', 'content' ],
      raw: true,
    });

    const message = { role: 'user', content: question };

    const messages = [
      { role: 'system', content: 'You are a helpful assistant.' },
      ...prevMessages,
      message,
    ];

    const completion = await openai.createChatCompletion({
      model: OPENAI_MODEL,
      messages,
      temperature: 1,
      n: 1,
      stream: false,
    });

    const responseMessage = completion.data.choices[0].message;

    await ctx.model.Message.bulkCreate([
      {
        chatId,
        ...message,
      },
      {
        chatId,
        ...responseMessage,
      },
    ]);

    ctx.body = {
      ret: 1,
      data: {
        reply: responseMessage,
        cid: chatId,
      },
    };
  }
}

module.exports = ChatController;
