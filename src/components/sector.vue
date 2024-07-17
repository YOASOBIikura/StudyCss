<template>
  <div id="warp">
    <div class="inner">
      <img @click="clickImg(0)" src="../assets/image/game.png" alt="game"/>
      <img @click="clickImg(1)" src="../assets/image/design.png" alt="design">
      <img @click="clickImg(2)" src="../assets/image/shopping.png" alt="shopping">
      <img @click="clickImg(3)" src="../assets/image/movie.png" alt="movie">
      <img @click="clickImg(4)" src="../assets/image/web.png" alt="web">
    </div>
    <div class="home" @click="updateStyle">
      <img src="../assets/image/table.png" alt="table">
    </div>
  </div>
</template>

<script setup>

import {ref} from "vue";

let sign = ref(true)

function clickImg(index){
  let imgs = document.querySelectorAll("#warp > .inner > img")
  for (let i = 0; i < imgs.length; i++) {
    if (i == index){
      imgs[i].style.transition = "0.5s"
      imgs[i].style.transform = "scale(1.5)"
      imgs[i].style.opacity = 0.1
      imgs[i].addEventListener("transitionend", transitionEnd)
    }
  }
}

function transitionEnd(){
  this.style.transition = "0.3s"
  this.style.transform = "rotate(720deg) scale(1)"
  this.style.opacity = 1
  this.removeEventListener("transitionend", transitionEnd)
}

function updateStyle(){
  let dom = document.getElementsByClassName('home')
  let imgs = document.querySelectorAll("#warp > .inner > img")
  let c = 140
  dom[0].style.transition = '2s'
  if (sign.value){
    dom[0].style.transform = 'rotate(360deg)'
    for (let i = 0; i < imgs.length; i++) {
      imgs[i].style.transition="1s " + (i*0.15) +"s"
      imgs[i].style.transform = "rotate(720deg) scale(1)"
      imgs[i].style.top = -getPoint(c, 90*i/(imgs.length-1)).top+"px"
      imgs[i].style.left = -getPoint(c, 90*i/(imgs.length-1)).left+"px"
    }
  }else{
    dom[0].style.transform = 'rotate(0deg)'
    for (let i = 0; i < imgs.length; i++) {
      imgs[i].style.transition="1s " + ((imgs.length-i-1)*0.15) +"s"
      imgs[i].style.transform = "rotate(-720deg) scale(1)"
      imgs[i].style.top = 0+"px"
      imgs[i].style.left = 0+"px"
    }
  }
  sign.value = !sign.value
}

function getPoint(c, deg){
  let x = Math.round(Math.sin(deg * Math.PI / 180) * c)
  let y = Math.round(Math.cos(deg * Math.PI / 180) * c)
  return {left:x, top:y}
}
</script>

<style scoped lang="less">
*{
  margin: 0;
  padding: 0;
}
#warp{
  position: fixed;
  width: 50px;
  height: 50px;
  bottom: 20px;
  right: 20px;
  .inner{
    position: absolute;
    width: 50px;
    height: 50px;
    img{
      position: absolute;
      left: 2px;
      width: 45px;
      height: 45px;
    }
  }
  .home{
    position: absolute;
    width: 50px;
    height: 50px;
    background: pink;
    z-index: 1;
    border-radius: 50%;
    img{
      position: absolute;
      left: 3px;
      bottom: 2.5px;
      width: 45px;
      height: 45px;
    }
  }
}
</style>