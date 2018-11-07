import Router from 'koa-router'
const router = new Router()
router.get('/',async ctx=>{
    ctx.body = '欢迎使用v-blog接口测试服务器'
})
// 所有的路由写在这里就好了

export default router