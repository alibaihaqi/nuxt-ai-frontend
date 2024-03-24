<template>
  <h1 class="my-4 text-4xl text-center title">
    {{ title }}
  </h1>
</template>

<script lang="ts" setup>
import type { CommonTitleProps } from '@/types/Common/CommonTitle'

defineProps<CommonTitleProps>()
</script>

<style scoped>
.title {
  background: -webkit-linear-gradient(120deg, #bd34fe 30%, #41d1ff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>