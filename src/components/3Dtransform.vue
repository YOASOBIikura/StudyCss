<template>
  <div id="wrap">
    <div id="inner">
      <span>Solana</span>
    </div>
  </div>
</template>

<script setup>

</script>

<style scoped lang="less">
#wrap{
  width: 400px;
  height: 400px;
  border: 1px solid;
  perspective: 100px;
}
#inner{
  position: absolute;
  top: 50%;
  left: 50%;
  margin-left: -100px;
  margin-top: -100px;
  width: 200px;
  height: 200px;
  border: 1px solid;
  border-radius: 50%;
  background: cyan;
  text-align: center;
  span{
    font-size: 60px;
    line-height: 200px;
    transition: 1s;
  }
  transition: 1s;
}
#wrap:hover #inner{
  transform: rotateY(360deg);
}
</style>