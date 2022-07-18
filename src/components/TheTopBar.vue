<template>
  <div class="flex flex-col md:flex-row justify-between items-start md:items-center">
    <div class="w-full order-1 md:w-[35%] md:order-[-1] flex justify-between">
      <div class="text-white">
        <h1 class="mb-5">使用帳號 : {{ userName }}</h1>
        <label class="relative" for="plusMoneyInput">
          增加金額 :
          <input class="text-black primary-input w-[100px] md:w-[150px] mr-5" type="text" v-model="plusMoneyInput"
            @keyup.enter="addMoney(userName as string, plusMoneyInput)" />
          <MsgBox class="w-[500px] bottom-[-200%]" :msgObj="{
            transitionName: 'addMoney',
            msgArr: plusMoneyMsgArr,
          }" />
        </label>
      </div>
      <div class="flex flex-col">
        <div class="relative">
          <button class="primary-btn mb-5 text-sm" @click="clearUserMoney(userName as string)">
            清空餘額
          </button>
          <MsgBox class="w-[300px] top-[-50%]" :msg-obj="{
            transitionName: 'clearMoney',
            msgArr: clearMoneyMsgArr,
          }" />
        </div>
        <button class="primary-btn text-sm" @click="addMoney(userName as string, plusMoneyInput)">
          確認增加
        </button>
      </div>
    </div>
    <div class="hidden md:block md:w-[30%]">
      <img class="w-full ml-10" src="../assets/images/YGR_logo.png" alt="YGR官網LOGO" width="433" height="225" />
    </div>
    <div class="w-full mt-5 md:w-[35%] md:mt-0 flex md:justify-end md:items-start">
      <div class="w-full mb-5 flex justify-between border-b-4 md:w-auto md:mb-0 md:flex-col md:border-b-0 items-center">
        <div>
          <div class="text-white text-center mr-5 mb-1 md:mb-5 md:mr-0">
            {{ envStr }}環境
          </div>
          <select class="rounded-lg p-1 mb-5" name="" id="" v-model="currentLang" @change="selectLang(currentLang)">
            <option v-for="lang in Lang" :key="lang" :value="lang">
              {{ lang }}
            </option>
          </select>
        </div>
        <div class="w-[150px] 3xsm:w-[100px] md:hidden mb-5">
          <img class="w-full" src="../assets/images/YGR_logo.png" alt="YGR官網LOGO" width="433" height="225" />
        </div>
        <div>
          <button class="w-full primary-btn mb-5 text-sm" @click="logout">
            登出
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { onMounted } from "vue";
import { Lang } from "@/types/lang";
import useGame from "@/composable/game/useGame";
import useUser from "@/composable/user/useUser";
import useLog from "@/composable/user/useLog";
import useError from "@/composable/error/useError";
import MsgBox from "@/components/MsgBox.vue";
const { selectLang, currentLang, resetGameLang } = useGame();
const { userName, plusMoneyInput, addMoney, clearUserMoney } = useUser();
const { logout, envStr } = useLog();
const { plusMoneyMsgArr, clearMoneyMsgArr } = useError();
//mounted
onMounted(() => {
  //避免登出又登入時，需將Lang改回預設值
  resetGameLang()
})
</script>
