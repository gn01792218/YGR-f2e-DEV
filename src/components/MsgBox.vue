<template>
  <ul class="absolute text-red-600 font-extrabold">
    <transition-group :name="msgObj.transitionName">
      <li
        :class="[
          { 'text-red-600': msg.type === MsgType.ERROR },
          { 'text-yellow-500': msg.type === MsgType.SUCCESS },
        ]"
        v-for="msg in msgObj.msgArr"
        :key="msg.content"
      >
        {{ msg.content }}
      </li>
    </transition-group>
  </ul>
</template>
<script setup lang="ts">
import { MsgBox, MsgType } from "@/types/msg/msgBox";
defineProps<{ msgObj: MsgBox }>();
</script>
