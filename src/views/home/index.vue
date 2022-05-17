<!--
 * @Author: LYM
 * @Date: 2022-04-12 20:01:54
 * @LastEditors: LYM
 * @LastEditTime: 2022-05-17 14:30:22
 * @Description: Home
-->
<template>
  <div class="home-wrap">
    <el-button size="small" type="primary" @click="start">开始</el-button>
    <el-button size="small" type="primary" @click="stop">暂停</el-button>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { socket } from '@/utils'

onMounted(() => {
  socket.on('connect', () => {
    console.log('socketIo-connect')
  })
})
socket.on('message', (data) => {
  console.log(data)
})

const start = () => {
  socket.emit('start', '开始')
}
const stop = () => {
  socket.emit('stop', '暂停')
}
</script>

<style lang="scss" scoped>
.home-wrap {
  color: $font-color;
}
</style>
