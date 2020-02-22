const Config = require('./config.json');
const Koa = require('koa');
const Mongo = require('mongodb');
const Router = require('./router.js');

const server = new Koa();
const router = new Router(server);


router.get('/', (ctx) => {
  ctx.body = 'dlroW olleH';
});


function run () {
  server.listen(Config.port);
}

module.exports = {
  run
};
