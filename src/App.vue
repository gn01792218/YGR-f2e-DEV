<template>
<div class="max-w-[1080px] mx-auto">
    <router-view/>
</div>
</template>

<script setup lang="ts">
import useGameList from '@/composable/game/useGameList'
const {fetchGameList} = useGameList()
fetchGameList()
</script>
