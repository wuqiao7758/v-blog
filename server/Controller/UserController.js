/* const login = async ctx=>{

}
export default{
    login,
} */
// 这是以前的写法，通常我们都会把处理过程写成函数，直接暴露函数即可。
// 以后我们采用ES6 class类
import User from '../models/UserModel'
import md5 from 'md5'
import createToken from '../utils/createToken'
class UserController{
    // 登录的处理逻辑在这里
    async login(ctx){
        let user = ctx.request.body.user
        let password = ctx.request.body.password
    // 验证用户名/密码是否合法
    // 检查用户是否存在
const res = (await User.getUserByName(user))[0];
console.log(res);
if(res){
    // 如果存在
    // 检查密码是否正确
    if(res.password === md5(password)){
        let token = createToken(res.user)
        ctx.body = {
            success:true,
            message:'登录成功....',
            token:token
        }
    }else{
        ctx.body ={
            seccess:false,
            message:'密码错误,请重新填写...'
        }
    }
}else{
    ctx.body={
        success:false,
        message:'用户名不存在，请重新填写...',
    }
}
    // 检查密码是否正确

    // 生成token

    //最后返回token

    }

    async logout(ctx){
        ctx.body = {
            success:true,
            message:'退出成功'
        }
    }
}

export default new UserController()