import {getToken,setToken,removeToken} from '../utils/auth'
const state = {
    // 全局变量
    token:getToken(),
    username:'',//当前登录的用户名称，如果有需要的话，可以存储一些登录用户的信息
    id:'',
    title:'',
    tags:'',
    content:'',//文章是否发布
    isPublishe:false
}
export default state