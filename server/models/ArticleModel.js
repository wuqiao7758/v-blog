import query from '../utils/query'

class ArticleModel{
    async getArticles(){
        return await query("SELECT * FROM ARTICLE ORDER BY createTime DESC")
    }
}

export default new ArticleModel()