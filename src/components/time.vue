<template>
  <div id="wrap">
    <ul>
      <li v-for="i in (60)" :key="i"></li>
    </ul>
    <div class="hour"></div>
    <div class="minute"></div>
    <div class="second"></div>
    <div class="icon"></div>
  </div>
</template>

<script setup>

import { onMounted } from 'vue'

onMounted(() => {
  initLi()
  move()
})

function initLi(){
  let lis = document.querySelectorAll("#wrap > ul li")
  for(let i = 0; i < lis.length; i++){
    lis[i].style.transform = "rotate(" + i * 6 + "deg)"
  }
}

setInterval(move,1000)

function move(){
  let hourNode = document.querySelector("#wrap .hour")
  let minuteNode = document.querySelector("#wrap .minute")
  let secondNode = document.querySelector("#wrap .second")
  let date = new Date()
  let s = date.getSeconds()
  let m = date.getMinutes() + s/60
  let h = date.getHours() + m/60

  hourNode.style.transform = "rotate(" + h * 30 + "deg)"
  minuteNode.style.transform = "rotate(" + m * 6 + "deg)"
  secondNode.style.transform = "rotate(" + s * 6 + "deg)"
}

</script>

<style scoped lang="less">
*{
  margin: 0;
  padding: 0;
}
#wrap{
  position: absolute;
  top: 50%;
  left: 50%;
  margin-left: -100px;
  margin-top: -100px;
  width: 200px;
  height: 200px;
  border: 1px solid;
  border-radius: 50%;
  .hour{
    position: absolute;
    left: 97px;
    top: 70px;
    width: 6px;
    height: 30px;
    background: lightskyblue;
    transform-origin: center bottom;
  }
  .minute{
    position: absolute;
    left: 98px;
    top: 50px;
    width: 4px;
    height: 50px;
    background: aqua;
    transform-origin: center bottom;
  }
  .second{
    position: absolute;
    left: 99px;
    top: 30px;
    width: 2px;
    height: 70px;
    background: aquamarine;
    transform-origin: center bottom;
  }
  .icon{
    position: absolute;
    left: 90px;
    top: 90px;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: deepskyblue;
  }
}
ul{
  list-style-type: none;
}
ul > li{
  position: absolute;
  left: 99px;
  top: 0;
  width: 2px;
  height: 10px;
  background: blueviolet;
  transform-origin: center 100px;
  &:nth-child(5n+1){
    height: 15px;
  }
}
</style>