<template>
  <h1 class="bg-black text-white">使用帳號:{{userName}}</h1>

</template>
<script setup lang="ts">
import useUser from "../composable/user/useUser"
const {userName} = useUser()
</script>