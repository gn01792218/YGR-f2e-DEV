<template>
  <TopBar />
  <div class="flex flex-wrap ml-3">
      <GameCard class="mr-7" v-for="card in gameList" :key="card.GameId" :card="{
        gameId: card.GameId,
        lang: Lang['zh-CN'],
        imgSrc: getAssetsFileURL(`images/gameIcon/${card.GameId}_cn.png`)
      }" />
  </div>
</template>
<script setup lang="ts">
import { Lang } from "@/types/lang"
import { GameCardObj } from "@/types/game/game";
import { watch } from "vue";
import useUtil from '@/composable/util/useUtil'
import useGameList from '@/composable/game/useGameList'
import useutil from "@/composable/util/useUtil";
import GameCard from '@/components/GameCard.vue'
import TopBar from '@/views/TopBar.vue'

const { getAssetsFileURL } = useUtil()
const { gameList } = useGameList()
// watch(gameList,()=>{
//   console.log('取得資料',gameList.value)
// })
Lang["en-US"]
</script>
