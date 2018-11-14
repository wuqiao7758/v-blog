import router from './router'
import store from './store'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import {getToken} from '@/utils/auth'

const whiteList = ['/login']
// 设置在页面跳转之前
router.beforeEach((to,from,next)=>{
    // 开起进度条
    NProgress.start()
    if(getToken()){
        if(to.path === '/login'){
            next({path:'/list'})
            NProgress.done();//进度条结束
        }else{
            next()//正常进行页面跳转
        }
    }else{
        // 没有token值得情况
        if(whiteList.indexOf(to.path) !== -1){
            next()
        }else{
            next({path:'/login'})
            NProgress.done()
        }
    }
})

router.afterEach(()=>{
    NProgress.done()
})