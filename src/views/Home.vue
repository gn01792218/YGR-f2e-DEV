<template>
  <TopBar />
  <GameSwitchTab :tabList="[GameCategory.ALLGAME, GameCategory.SLOT, GameCategory.FISH]" />
  <div class="flex flex-wrap ml-3">
    <div v-for="card in gameList" :key="card.GameId">
      <GameCard class="mr-5"
      v-show="gameCategory===card.GameCategoryId || gameCategory===0" 
      :card="{
        gameId: card.GameId,
        lang: Lang['zh-CN'],
        imgSrc: getAssetsFileURL(`images/gameIcon/${card.GameId}_cn.png`),
        gameCategoryId: card.GameCategoryId
      }" />
    </div>

  </div>
</template>
<script setup lang="ts">
import { GameCategory } from "@/types/game/game"
import { Lang } from "@/types/lang"
import useUtil from '@/composable/util/useUtil'
import useGame from '@/composable/game/useGame'
import GameCard from '@/components/GameCard.vue'
import TopBar from '@/components/TopBar.vue'
import GameSwitchTab from '@/components/GameSwitchTab.vue'

const { getAssetsFileURL } = useUtil()
const { gameList,gameCategory} = useGame()
</script>
