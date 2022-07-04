<template>
    <div class="w-[100px] h-[100px] rounded-full overflow-hidden">
        <h1 class="bg-black text-white">{{card.gameId}}</h1>
        <img :src="card.imgSrc" :alt="`遊戲 :${card.gameId}`" width="50" height="50">
    </div>
</template>
<script setup lang="ts">
import { GameCardObj } from "../types/game/game";
import { ref } from "vue";

defineProps<{ card: GameCardObj }>();

const count = ref(0);
</script>