<template>
  <div id="wrap">
    <div></div>
    <div></div>
    <div></div>
    <div></div>
  </div>
</template>

<script setup>

</script>

<style scoped lang="less">
*{
  margin: 0;
  padding: 0;
}
#wrap{
  width: 300px;
  height: 300px;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  transition: 2s;
}
#wrap > div{
  margin: 10px;
  width: 130px;
  height: 130px;
  background-color: hotpink;
  float: left;
  box-sizing: border-box;
  border: 3px solid palegreen;
}
#wrap > div:nth-child(1), #wrap > div:nth-child(4){
  border-radius: 0 60%;
}
#wrap > div:nth-child(2), #wrap > div:nth-child(3){
  border-radius: 60% 0;
}
#wrap:hover{
  transform: rotate(120deg);
}
</style>