<template>
    <ul class="gameswitch w-full flex justify-center my-10 py-5">
        <li class="mr-5 p-5 cursor-pointer relative
            before:absolute before:w-full before:h-full before:flex before:justify-center before:items-center before:top-0 before:left-0 before:border-y-2 before:border-y-yellow-800 before:scale-y-150 before:transition-transform before:duration-300 before:opacity-0
        "
            v-for="tab in tabList" :key="tab"
            @click="switchGameCategory(tab)"
            :class="[{active:gameCategory===tab}]"
        >{{GameCategory[tab]}}</li>
    </ul>
</template>

<script setup lang="ts">
import {GameCategory} from "@/types/game/game"
import useGame from "@/composable/game/useGame"
defineProps<{ tabList:GameCategory[] }>();
const {switchGameCategory,gameCategory} = useGame()
</script>