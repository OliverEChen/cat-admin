<template>
  <div id="container"></div>
</template>
<script lang="ts" setup name="a-map">
import AMapLoader from '@amap/amap-jsapi-loader'
import { shallowRef, onMounted } from 'vue'
const map = shallowRef(null)
const initMap = () => {
  AMapLoader.load({
    key: 'a2098b6659af463bf2866c64c0e4f577', //设置您的key
    version: '2.0',
    plugins: ['AMap.ToolBar', 'AMap.Driving'],
    AMapUI: {
      version: '1.1',
      plugins: []
    },
    Loca: {
      version: '2.0.0'
    }
  })
    .then((AMap) => {
      const map = new AMap.Map('container', {
        pitch: 75, // 地图俯仰角度，有效范围 0 度- 83 度
        viewMode: '3D', // 地图模式
        terrain: true, // 开启地形图
        zoom: 5,
        zooms: [2, 22],
        center: [105.602725, 37.076636]
      })
      let positionArr = [
        [113.357224, 34.977186],
        [114.555528, 37.727903],
        [112.106257, 36.962733],
        [109.830097, 31.859027],
        [116.449181, 39.98614]
      ]
      for (let item of positionArr) {
        let marker = new AMap.Marker({
          position: [item[0], item[1]]
        })
        map.add(marker)
      }
    })
    .catch((e) => {
      console.log(e)
    })
}
onMounted(() => {
  //DOM初始化完成进行地图初始化
  initMap()
})
</script>
<style scope>
#container {
  height: 100%;
  width: 100%;
  padding: 0px;
  margin: 0px;
}
</style>
