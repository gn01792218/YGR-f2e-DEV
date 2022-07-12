<template>
    <div class="w-[100px] h-[100px] 2xsm:w-[150px] 2xsm:h-[150px] overflow-hidden cursor-pointer shadow-cyan-900 relative transition-all duration-300 hover:scale-105
        before:content-[attr(data-text)] before:absolute before:rounded-lg before:w-full before:h-full before:bg-black before:bg-opacity-0 before:text-transparent before:flex before:justify-center before:items-center before:transition-all before:duration-300
        hover:before:bg-opacity-50 hover:before:text-white
    "
        @click="gotoGame(userName as string,card.gameId,gameLang)"
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
import { Env } from "@/types/env";
defineProps<{ card: GameCardObj }>();
const {userName} = useUser()
const {gameLang} = useGame()
function gotoGame(account:string,gameID:string,lang:Lang){
    // let gameUrl = `http://61.219.219.74:6082/Login?Account=${account}&GameId=${gameID}&Lang=${lang}`
    let env = JSON.parse(sessionStorage.getItem('env') as string)
    let gameUrl = ""
    switch(env){
        case Env.DEV:
            // gameUrl = `http://61.219.219.74:3101/Login?Account=${account}&GameId=${gameID}&Lang=${lang}`
            gameUrl = `${import.meta.env.VITE_APP_API_BASE_URL_DEV}/Login?Account=${account}&GameId=${gameID}&Lang=${lang}`
            break;
        case Env.QA:
            gameUrl = `${import.meta.env.VITE_APP_API_BASE_URL_QA}/Login?Account=${account}&GameId=${gameID}&Lang=${lang}`
            break;
    }
    console.log(gameUrl)
    window.open(gameUrl)
}
</script>