<template>
<div class="flex justify-between">
  <div>
    <h1 class="bg-black text-white">使用帳號:{{userName}}</h1>
  </div>
  <div class="w-[433px] h-[255px]">
    <img class="w-full" src="../assets/images/YGR_logo.png" alt="YGR官網LOGO">
  </div>
  <div>
    <select name="" id="">
      <option
        v-for ="lang in Lang" :key="lang"
      :value="lang">{{lang}}</option>
      </select>
  </div>
</div>
  

</template>
<script setup lang="ts">
import {Lang} from "@/types/lang"
import useUser from "@/composable/user/useUser"
const {userName} = useUser()
</script>