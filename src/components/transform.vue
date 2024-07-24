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
  transition: 2s;
}
#warp{
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background: cyan;
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
  transform: scale(.7) translateX(300px);
}
</style>