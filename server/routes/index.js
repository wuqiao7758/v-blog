import Router from 'koa-router'
import {base_API} from '../config'
import UserController from '../Controller/UserController'
import ArticleController from '../Controller/ArticleController'
//引入文章相关的控制器
import checkToken from '../utils/checkToken'
const router = new Router()
router.get('/',async ctx=>{
    ctx.body = '欢迎使用v_blog接口测试服务器!!!!'
})
// 所有的路由写在这里就好了
// 前端所有的请求发过来的时候都是http://localhost:3000/api/....
router.prefix(`${base_API}`)
// router.get('/index',async ctx=>{
//     ctx.body = "我是首页接口!"
// })
// 登录
router.post('/login',UserController.login)
// 登出
router.get('/logout',checkToken,UserController.logout)
router.get('/articles',checkToken,ArticleController.getArticles)
export default router