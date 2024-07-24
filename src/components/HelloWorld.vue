<template>
  <div class="content">
    <div id="wrap">
      <div v-for="obj in routes" :key="obj.id" class="route">
        <router-link :to="obj.url"><span>{{obj.name}}</span></router-link>
      </div>
    </div>
  </div>
</template>

<script setup>

let routes = [
  {id:0, url:'/box_shadow', name: '盒子阴影'},
  {id:1, url:'/radius', name: '旋转风车动画'},
  {id:2, url:'/gradual_change', name: '颜色渐变'},
  {id:3, url:'/hair', name: '发廊灯'},
  {id:4, url:'/flash', name: '闪光字体动画'},
  {id:5, url:'/transition', name: '过渡2d变换'},
  {id:6, url:'/transform', name: '组合2d变换'},
  {id:7, url:'/sector', name: '扇形动画导航'},
  {id:8, url:'/time', name: '时钟动画'},
  {id:9, url:'/3Dtransform', name: '过渡3D变换'},
  {id:10, url:'/dice', name: '致命骰子变换'}
]

</script>

<style scoped lang="less">
.content{
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
}
#wrap{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-content: start;
  width: 80%;
  background: cyan;
}
.route{
  height: 30px;
  margin: 10px;
  border-bottom: 3px solid hotpink;
  text-shadow: 3px 5px 6px pink;
}
</style>