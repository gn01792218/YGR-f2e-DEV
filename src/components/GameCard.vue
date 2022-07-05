<template>
    <div class="w-[150px] h-[150px] rounded-full overflow-hidden cursor-pointer shadow-2xl shadow-cyan-900 relative transition-all duration-300 hover:scale-105
        before:content-[attr(data-text)] before:absolute before:w-full before:h-full before:bg-black before:bg-opacity-0 before:text-transparent before:flex before:justify-center before:items-center before:transition-all before:duration-300
        hover:before:bg-opacity-50 hover:before:text-white
    "
        @click="gotoGame(userName,card.gameId,gameLang)"
        :data-text="card.gameCnName"
    >
        <img :src="card.imgSrc" :alt="`遊戲 :${card.gameId}`" width="150" height="150">
    </div>
</template>
<script setup lang="ts">
import {Lang} from "../types/lang"
import { GameCardObj } from "../types/game/game"
import useUser from "../composable/user/useUser"
import useGame from "../composable/game/useGame"
defineProps<{ card: GameCardObj }>();
const {userName} = useUser()
const {gameLang} = useGame()
function gotoGame(account:string,gameID:string,lang:Lang){
    let gameUrl = `http://61.219.219.74:3101/Login?Account=${account}&GameId=${gameID}&Lang=${lang}`
    window.open(gameUrl)
}
</script>