/*
 * @Author: LYM
 * @Date: 2022-05-17 14:14:34
 * @LastEditors: LYM
 * @LastEditTime: 2022-05-17 14:43:25
 * @Description: Please set Description
 */
import io from 'socket.io-client'
const socket = io('http://localhost:3002', {
  query: {},
  transports: ['websocket', 'polling'],
})
export default socket
