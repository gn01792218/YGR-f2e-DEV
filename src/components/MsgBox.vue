<template>
<ul class="absolute text-red-600 font-extrabold">
    <transition-group :name="msgObj.transitionName">
        <li
        v-for="msg in msgObj.msgArr" :key="msg"
        >{{msg}}</li>
    </transition-group>
</ul>
    
</template>
<script setup lang="ts">
import { MsgBox } from '@/types/msg/msgBox'
defineProps<{msgObj:MsgBox }>();
</script>