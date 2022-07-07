<template>
  <div class="flex justify-between items-start md:items-center">
    <div class="md:w-[35%] flex">
      <div>
        <h1 class="mb-5">使用帳號 : {{ userName }}</h1>
        <label for="plusMoneyInput">
          增加金額 :
          <input class="primary-input w-[100px] md:w-[150px] mr-5" type="text" v-model="plusMoneyInput"
            @keyup.enter="addMoney(userName,plusMoneyInput)">
        </label>
      </div>
      <div class="flex flex-col">
        <button class="primary-btn mb-5 text-sm" @click="clearUserMoney(userName)">清空帳號金額</button>
        <button class="primary-btn text-sm" @click="addMoney(userName,plusMoneyInput)">確認增加</button>
      </div>
    </div>
    <div class="hidden md:block md:w-[30%]">
      <img class="w-full" src="../assets/images/YGR_logo.png" alt="YGR官網LOGO" width="433" height="225">
    </div>
    <div class="md:w-[35%] flex justify-start md:justify-end items-start">
      <select name="" id="" v-model="currentLang" @change="selectLang(currentLang)">
        <option v-for="lang in Lang" :key="lang" :value="lang">{{ lang }}</option>
      </select>
    </div>
  </div>

</template>
<script setup lang="ts">
import { Lang } from "@/types/lang"
import useGame from '@/composable/game/useGame';
import useUser from "@/composable/user/useUser"
const { selectLang, currentLang } = useGame()
const { userName, plusMoneyInput, addMoney ,clearUserMoney } = useUser()
</script>