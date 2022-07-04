<template>
    <div class="w-[200px] h-[200px] rounded-full overflow-hidden cursor-pointer"
        @click="gotoGame(userName,card.gameId,Lang['zh-CN'])"
    >
        <img :src="card.imgSrc" :alt="`遊戲 :${card.gameId}`" width="200" height="200">
    </div>
</template>
<script setup lang="ts">
import {Lang} from "../types/lang"
import { GameCardObj } from "../types/game/game"
import useUser from "../composable/user/useUser"
defineProps<{ card: GameCardObj }>();
const {userName} = useUser()
function gotoGame(account:string,gameID:string,lang:Lang){
    let gameUrl = `http://61.219.219.74:3101/Login?Account=${account}&GameId=${gameID}&Lang=${lang}`
    window.open(gameUrl)
}
</script>