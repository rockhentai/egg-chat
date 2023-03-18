# chat



## QuickStart

<!-- add docs here for user -->

see [egg docs][egg] for more detail.

### Development

#### mysql

创建db

```sql
create database chat
```
mysql config

```js
// config/config.default.js

sequelize: {
  username: 'root',
  password: '',
  database: 'chat',
  host: '127.0.0.1',
  dialect: 'mysql',
  logging: false,
},
```


#### openai api config

在项目根目录下创建`.env`文件，填上openai相关的配置

```bash
OPENAI_KEY = xxx
OPENAI_MODEL = gpt-3.5-turbo
```

#### dev

启动项目

```bash
$ npm i
$ npm run dev
$ open http://localhost:7001/
```

启动后自动建表

### Deploy

```bash
$ npm start
$ npm stop
```

### npm scripts

- Use `npm run lint` to check code style.
- Use `npm test` to run unit test.
- Use `npm run autod` to auto detect dependencies upgrade, see [autod](https://www.npmjs.com/package/autod) for more detail.


[egg]: https://eggjs.org