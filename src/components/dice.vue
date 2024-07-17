<template>
  <div id="wrap">
    <div class="box">
      <div id="one">
        <div></div>
      </div>
      <div id="six">
        <div v-for="i in (6)" :key="i"></div>
      </div>
      <div id="two">
        <div></div>
        <div></div>
      </div>
      <div id="four">
        <div v-for="i in (4)" :key="i"></div>
      </div>
      <div id="five">
        <div v-for="i in (5)" :key="i"></div>
      </div>
      <div id="three">
        <div v-for="i in (3)" :key="i"></div>
      </div>
    </div>
  </div>
</template>

<script setup>

</script>

<style scoped lang="less">
#wrap{
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  width: 300px;
  height: 300px;
  border: 1px solid;
  perspective: 200px;
  transform-style: preserve-3d;
}
#wrap > .box{
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  width: 100px;
  height: 100px;
  background: skyblue;
  transition: 3s;
  transform-style: preserve-3d;
  transform-origin: center center -50px;
  div{
    position: absolute;
    width: 100px;
    height: 100px;
    background: cyan;
    text-align: center;
    font: 50px/100px "微软雅黑";
  }
  #five{
    transform-origin: bottom;
    transform: rotateX(90deg);
    top: -100px;
  }
  #three{
    transform-origin: top;
    transform: rotateX(-90deg);
    top: 100px;
  }
  #two{
    transform-origin: right;
    transform: rotateY(90deg) translateX(100px);
    left: -100px;
  }
  #four{
    transform-origin: left;
    transform: rotateY(-90deg) translateX(-100px);
    right: -100px;
  }
  #six{
    transform: translateZ(-100px);
  }
  #one{
    z-index: 1;
  }
}
#wrap:hover .box{
  transform: rotate3d(1, 2, 1, 480deg);
}
.box > #one{
  div{
    position:absolute;
    width: 30px;
    height: 30px;
    background: red;
    top: 35px;
    left: 35px;
    border-radius: 50%;
  }
}
.box > #two{
  div{
    position: absolute;
    width: 25px;
    height: 25px;
    border-radius: 50%;
    background: #535bf2;
    left: 37.5px;
    &:nth-child(1){
      top: 22.5px;
    }
    &:nth-child(2){
      bottom: 22.5px;
    }
  }
}
.box > #three{
  div{
    position: absolute;
    width: 25px;
    height: 25px;
    border-radius: 50%;
    background: #535bf2;
    &:nth-child(1){
      left: 13.3px;
      top: 13.3px;
    }
    &:nth-child(2){
      left: 37.3px;
      top: 37.3px;
    }
    &:nth-child(3){
      right: 13.3px;
      bottom: 13.3px;
    }
  }
}
.box > #four{
  div{
    position: absolute;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: #535bf2;
    &:nth-child(1){
      top: 25px;
      right: 25px;
    }
    &:nth-child(2){
      bottom: 25px;
      right: 25px;
    }
    &:nth-child(3){
      top: 25px;
      left: 25px;
    }
    &:nth-child(4){
      bottom: 25px;
      left: 25px;
    }
  }
}
.box > #five{
  div{
    position: absolute;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: #535bf2;
    &:nth-child(1){
      top: 15px;
      left: 15px;
    }
    &:nth-child(2){
      bottom: 15px;
      left: 15px;
    }
    &:nth-child(3){
      top: 15px;
      right: 15px;
    }
    &:nth-child(4){
      bottom: 15px;
      right: 15px;
    }
    &:nth-child(5){
      top: 40px;
      left: 40px;
    }
  }
}
.box > #six{
  div{
    position: absolute;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: hotpink;
    &:nth-child(1){
      top: 10px;
      left: 25px;
    }
    &:nth-child(2){
      top: 40px;
      left: 25px;
    }
    &:nth-child(3){
      bottom: 10px;
      left: 25px;
    }
    &:nth-child(4){
      top: 10px;
      right: 25px;
    }
    &:nth-child(5){
      top: 40px;
      right: 25px;
    }
    &:nth-child(6){
      bottom: 10px;
      right: 25px;
    }
  }

}
</style>