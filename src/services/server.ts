/*
 * @Author: LYM
 * @Date: 2022-05-17 14:09:07
 * @LastEditors: LYM
 * @LastEditTime: 2022-05-17 16:14:39
 * @Description: Please set Description
 */
const express = require('express')

const app = express()
const port = 3002

const server = app.listen(port, () => {
  console.log('成功启动express服务,端口号是' + port)
})
//引入socket.io传入服务器对象 让socket.io注入到web网页服务
const io = require('socket.io')(server)

let indexSate = 0
let timer

io.on('connection', (socket) => {
  console.log('初始化')
  // 初始化
  indexSate = 0
  clearTimeout(timer)
  timer = null

  socket.on('start', (msg) => {
    console.log(msg)
    timer = setTimeout(() => {
      io.emit('message', indexSate)
      indexSate++
    }, 1000)
  })

  socket.on('stop', (msg) => {
    console.log(msg)
    clearTimeout(timer)
    timer = null
  })
})
