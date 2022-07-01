<template>
  <h1 class="bg-black text-white">AAAA</h1>
</template>
<script setup lang="ts">
import { ref } from "vue";

defineProps<{ msg: string }>();

const count = ref(0);
</script>
