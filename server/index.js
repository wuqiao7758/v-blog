import koa from 'koa'
import Router from 'koa-router'
import cors from 'koa-cors'
import bodyParser from 'koa-bodyparser'
import router from './routes/index.js'

import query from './utils/query'

const app = new koa()

app.use(cors())
app.use(bodyParser())
app.use(router.routes())
app.listen(3000, () => {
    console.log('node is ok')
})