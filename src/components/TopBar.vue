<template>
  <div class="flex justify-between items-start md:items-center">
    <div class="md:w-[35%] flex">
      <div class="text-white">
        <h1 class="mb-5">使用帳號 : {{ userName }}</h1>
        <label class="relative" for="plusMoneyInput">
          增加金額 :
          <input class="text-black primary-input w-[100px] md:w-[150px] mr-5" type="text" v-model="plusMoneyInput"
            @keyup.enter="addMoney(userName as string, plusMoneyInput)">
          <MsgBox class="w-[500px] bottom-[-200%]" :msgObj="{
            transitionName: 'addMoney',
            msgArr: plusMoneyMsgArr
          }" />
        </label>
      </div>
      <div class="flex flex-col">
        <div class="relative">
          <button class="primary-btn mb-5 text-sm" @click="clearUserMoney(userName as string)">清空帳號金額</button>
          <MsgBox class="w-[300px] top-[-50%]" :msgObj="{
            transitionName: 'clearMoney',
            msgArr: clearMoneyMsgArr
          }" />
        </div>
        <button class="primary-btn text-sm" @click="addMoney(userName as string, plusMoneyInput)">確認增加</button>
      </div>
    </div>
    <div class="hidden md:block md:w-[30%]">
      <img class="w-full" src="../assets/images/YGR_logo.png" alt="YGR官網LOGO" width="433" height="225">
    </div>
    <div class="md:w-[35%] flex justify-end items-start">
      <div class="flex flex-col">
        <div class="text-white text-center mb-1 md:mb-5">{{Env[env]}}環境</div>
        <select class="w-full rounded-lg p-1 mb-1 md:mb-5" name="" id="" v-model="currentLang"
          @change="selectLang(currentLang)">
          <option v-for="lang in Lang" :key="lang" :value="lang">{{ lang }}</option>
        </select>
        <div>
          <button class="w-full primary-btn mb-5 text-sm" @click="logout">登出</button>
        </div>
      </div>

    </div>
  </div>
</template>
<script setup lang="ts">
import { Lang } from "@/types/lang"
import { Env } from "@/types/env"
import useGame from '@/composable/game/useGame';
import useUser from "@/composable/user/useUser"
import useLog from "@/composable/user/useLog"
import useError from "@/composable/error/useError"
import MsgBox from '@/components/MsgBox.vue';
const { selectLang, currentLang } = useGame()
const { userName, plusMoneyInput, addMoney, clearUserMoney } = useUser()
const { logout , env } = useLog()
const { plusMoneyMsgArr, clearMoneyMsgArr } = useError()
</script>