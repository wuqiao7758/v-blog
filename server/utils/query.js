// 首先连接MySQL数据库

// 封装一个query方法，方便我们进行sql语句执行

import mysql from 'mysql'
import { db, dbName } from '../config'

import fs from 'fs'

import path from 'path'
let pool

// 需要创建一个数据库，并且能够将sql文件下的sql文件执行
const sqlContent = fs.readFileSync(path.resolve(__dirname, '..', './sql/v_blog.sql'), 'utf-8')

// 第一次连接数据控的时候，没有指定数据控名称，这次连接的目的是为了能够创建一个v-blog数据库
const init = mysql.createConnection(db)
init.connect()

init.query('CREATE DATABASE v_blog', err => {
    Object.assign(db, dbName)//合并对象
    // 第二次连接数数据库，这个时候v-blog已经创建成功，这个时候，直接连接v-blog
    pool = mysql.createPool(db)
    // console.log(pool)
    if (err) {
        console.log(err)
        console.log('v_blog Database created already.')
    } else {
        console.log('create v_blog Database ')
        // 将v-blog.sql文件执行
        pool.query(sqlContent).then(res => {
            console.log('import sql is success')
        }).catch(err => {
            console.log('import sql is error')
            console.log(err)
        })
    }
})

init.end()

export default function query(sql, values) {
    return new Promise((resolve, reject) => {
        pool.getConnection(function (err, collection) {
            if (err) {
                reject(err);
            } else {
                collection.query(sql, values, (err, data) => {
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
