<template>
  <div id="wrap">
    <div class="inner" :style="{marginTop: sc}">

    </div>
  </div>
</template>

<script setup>

import {computed, ref} from "vue";

let flag = ref(0)

setInterval(() => {
  flag.value++
  if (flag.value == 300){
    flag.value = 0
  }
}, 1000/60)

const sc = computed(()=>{
  return `-${flag.value}px`
})
</script>

<style scoped lang="less">
*{
  margin: 0;
  padding: 0;
}
#wrap{
  width: 40px;
  height: 300px;
  border: 1px solid;
  margin: 100px auto;
  overflow: hidden;
}
#wrap > .inner{
  height: 600px;
  background: repeating-linear-gradient(135deg, black 0px, black 10px, white 0px, white 20px);
}
</style>