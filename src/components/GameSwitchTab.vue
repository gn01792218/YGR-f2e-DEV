<template>
    <ul class="w-full flex justify-center grey-400 my-10">
        <li class="mr-5 cursor-pointer"
            v-for="tab in tabList" :key="tab"
            @click="switchGameCategory(tab)"
        >{{GameCategory[tab]}}</li>
    </ul>
</template>

<script setup lang="ts">
import {GameCategory} from "@/types/game/game"
import useGame from "@/composable/game/useGame"
defineProps<{ tabList:GameCategory[] }>();
const {switchGameCategory} = useGame()
</script>