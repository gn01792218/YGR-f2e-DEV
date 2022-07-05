<template>
    <div class="w-[150px] h-[150px] rounded-full overflow-hidden cursor-pointer"
        @click="gotoGame(userName,card.gameId,gameLang)"
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