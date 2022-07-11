<template>
  <TopBar />
  <GameSwitchTab :tabList="[GameCategory.ALLGAME, GameCategory.SLOT, GameCategory.FISH]" />
  <div class="flex flex-wrap ml-3 justify-center xl:justify-start">
    <div v-for="card in gameList" :key="card.GameId">
      <GameCard class="m-1 xsm:m-2"
      v-show="gameCategory===card.GameCategoryId || gameCategory===0" 
      :card="{
        gameId: card.GameId,
        lang: Lang['zh-CN'],
        imgSrc:getGameImgUrl(card.GameId),
        gameCategoryId: card.GameCategoryId,
        gameCnName:card.CnName
      }" />
    </div>

  </div>
</template>
<script setup lang="ts">
import { GameCategory } from "@/types/game/game"
import { Lang } from "@/types/lang"

import useGame from '@/composable/game/useGame'
import GameCard from '@/components/GameCard.vue'
import TopBar from '@/components/TopBar.vue'
import GameSwitchTab from '@/components/GameSwitchTab.vue'


const { gameList,gameCategory,getGameImgUrl} = useGame()
</script>
