<template>
<div class="max-w-[1080px] mx-auto p-5">
    <router-view/>
</div>
</template>

<script setup lang="ts">
// import { ref } from 'vue'
// import { onMounted } from '@vue/runtime-core'
import useGameList from '@/composable/game/useGameList'
// import { useRouter } from 'vue-router';
const {fetchGameList} = useGameList()
fetchGameList()
// const router = useRouter()
// let beforeUnloadTime = ref(0)
// let gapTime = ref(0)

// const beforeunloadHandler = () => {
//   beforeUnloadTime.value = new Date().getTime();
//   return router.push("/")
  
// }

// const unloadHandler = () => {
//   gapTime.value = new Date().getTime() - beforeUnloadTime.value;
//   //判断是窗口关闭还是刷新
//   if (gapTime.value <= 5) {//浏览器关闭
//     router.push("/")
//   }
// }

// onMounted(() => {
//   //监听页面卸载（关闭）或刷新
//   window.addEventListener('beforeunload', () => beforeunloadHandler())
//   window.addEventListener('unload', () => unloadHandler())
// })
</script>
