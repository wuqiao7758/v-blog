import Article from '../models/ArticleModel'
class ArticleController{
    async getArticles(ctx){
        ctx.body = await Article.getArticles()
    }
    async addArticle(ctx){
        const res = await Article.addArticle()
        ctx.body = res
    }
    async getOneArticle(ctx){
        const res = await Article.getOneArticle(ctx.params.id)
        ctx.body = res
    }
}
export default new  ArticleController()