import Article from '../models/ArticleModel'
class ArticleController{
    async getArticles(ctx){
        ctx.body = await Article.getArticles()
    }
}
export default new  ArticleController()