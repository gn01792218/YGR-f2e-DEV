<template>
  <router-view/>
</template>

<script setup lang="ts">
import useGameList from '@/composable/game/useGameList'
const {fetchGameList} = useGameList()
fetchGameList()
</script>
