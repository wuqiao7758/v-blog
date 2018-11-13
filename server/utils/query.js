// 首先连接MySQL数据库
// 封装一个query方法，方便我们进行sql语句执行
import mysql from 'mysql'
import { db, dbName } from '../config'

import fs from 'fs'

import path from 'path'
// 需要创建一个数据库，并且能够将sql文件下的sql文件执行
const sqlContent = fs.readFileSync(path.resolve(__dirname, '..', './sql/v_blog.sql'), 'utf-8')
// 第一次连接数据控的时候，没有指定数据控名称，这次连接的目的是为了能够创建一个v-blog数据库
const init = mysql.createConnection(db)
init.connect()
let pool
init.query('CREATE DATABASE v_blog',err=>{
    Object.assign(db,dbName)
    pool = mysql.createPool(db)
    if(err){
        console.log("数据库已存在")
    }else{
        query(sqlContent).then(res=>{
            console.log('数据库创建成功')
        }).catch(err=>{
            console.log(err)
        })
    }
})
init.end()

export default function query(sql, values) {
    return new Promise((resolve, reject) => {
        pool.getConnection(function (err, connection) {
            if (err) {
                reject(err);
            } else {
                connection.query(sql, values, (err, data) => {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(data);
                    }
                    connection.release()
                })
            }
        })
    })
}
