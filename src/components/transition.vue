<template>
  <div id="warp">
    <span>solana</span>
  </div>
</template>

<script setup>

</script>

<style scoped lang="less">
*{
  margin: 0;
  padding: 0;
}
.transition{
  transition-property: width, height, font;
  transition-duration: 5s,5s,8s;
  transition-timing-function: cubic-bezier(.28,1.64,.76,-0.5);
}
#warp{
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background: palegreen;
  text-align: center;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  span{
    line-height: 200px;
    font-size: 50px;
    .transition()
  }
  .transition()
}
#warp:hover{
  width: 150px;
  height: 150px;
  span{
    font-size: 20px;
    line-height: 150px;
  }
}
</style>