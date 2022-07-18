<template>
  <div
    class="w-[80px] h-[80px] 2xsm:w-[85px] 2xsm:h-[85px] xsm:w-[150px] xsm:h-[150px] overflow-hidden cursor-pointer shadow-cyan-900 relative transition-all duration-300 hover:scale-105 before:content-[attr(data-text)] before:absolute before:rounded-lg before:w-full before:h-full before:bg-black before:bg-opacity-0 before:text-transparent before:flex before:justify-center before:items-center before:transition-all before:duration-300 hover:before:bg-opacity-50 hover:before:text-white"
    @click="gotoGame(userName as string, card.gameId, gameLang)"
    :data-text="card.gameCnName"
  >
    <img
      class="w-full"
      :src="card.imgSrc"
      :alt="`遊戲 :${card.gameId}`"
      width="150"
      height="150"
    />
  </div>
</template>
<script setup lang="ts">
import { GameCardObj } from "../types/game/game";
import useUser from "../composable/user/useUser";
import useGame from "../composable/game/useGame";

defineProps<{ card: GameCardObj }>();
const { userName } = useUser();
const { gameLang, gotoGame } = useGame();
</script>
