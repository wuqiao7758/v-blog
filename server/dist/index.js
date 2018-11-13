'use strict';

var _koa = require('koa');

var _koa2 = _interopRequireDefault(_koa);

var _koaRouter = require('koa-router');

var _koaRouter2 = _interopRequireDefault(_koaRouter);

var _koaCors = require('koa-cors');

var _koaCors2 = _interopRequireDefault(_koaCors);

var _koaBodyparser = require('koa-bodyparser');

var _koaBodyparser2 = _interopRequireDefault(_koaBodyparser);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import router from './routes/index.js'

// import query from './utils/query'

var app = new _koa2.default();

app.use((0, _koaCors2.default)());
app.use((0, _koaBodyparser2.default)());
app.use(router.routes());
app.listen(3000, function () {
    console.log('node is ok');
});