<template>
 <div style="height:100%">
   <header-nav></header-nav>
   <Aside></Aside>
   <div class="list-container main">
        <h2>文章列表 /
            <span>ARTICLE LIST</span>
        </h2>
        <hr>
        <main>
            <div class="article-list">
                <section class="btn-container">
                    <button id="add" class="not-del" @click="AddArticle">新文章</button>
                </section>
                <article-list ref="articleList"></article-list>
            </div>
            <editor></editor>
        </main>
    </div>
 </div>
</template>

<script>
import HeaderNav from '@/components/common/HeaderNav'
import Aside from '@/components/common/Aside'
import ArticleList from '@/components/common/ArticleList'
import Editor from '@/components/common/Editor'
import request from '@/utils/request'
export default {
  name: 'List',
  data(){
    return{
       ArticleList:[]
    }
  },
  components:{
    Aside,
    HeaderNav,
    ArticleList,
    Editor
  },
  methods:{
      AddArticle(){
          request({
              method:'post',
              url:"/articles/add",
              data:{}
          }).then(res=>{
            //   首先
            // console.log(this.$refs.articleList)
            let addId = res.insertId
            this.$refs.articleList.updateList(addId)
            //   console.log(res);
          }).catch(err=>{
              console.log(err)
          })
      }
  }
}
</script>


<style lang="scss" scoped>
@import "../assets/style/variable";
main {
    @include flex($justify: space-between);
    height: calc(100% - 48px);
    padding: 0.5em 0;
}

.article-list {
    width: 40%;
    height: 100%;
    overflow: auto;
    padding: 0 0.8em 0.5em 0;
    .list {
        // margin: 0;
        padding: 0;
        list-style: none;
    }
}

.editor {
    width: 58%;
    height: 100%;
    padding: 0 0.8em 0.5em 0;
    overflow: auto;
}
</style>
