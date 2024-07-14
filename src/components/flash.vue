<template id="content">
  <h1 :style="{backgroundPosition: sc}">Solidity</h1>
</template>

<script setup>

import {computed, ref} from "vue";

let fla = ref(-160)

setInterval(() => {
  fla.value += 10
  if (fla.value == 500){
    fla.value = -160
  }
}, 30)

const sc = computed(()=>{
  return `${fla.value}px, 0`
})

</script>

<style scoped>
*{
  margin: 0;
  padding: 0;
}
h1{
  color: rgba(255,255,255,.3);
  font-size: 80px;
  font-weight: bold;
  background: linear-gradient(140deg, rgba(255,255,255,0) 80px, rgba(255,255,255,1) 160px, rgba(255,255,255,0) 190px);
  background-repeat: no-repeat;
  -webkit-background-clip: text;
}
</style>