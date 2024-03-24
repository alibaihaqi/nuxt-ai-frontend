<template>
  <main class="flex flex-col flex-1 items-center justify-center">
    <CommonTitle
      title="Gemini"
    />
    <CommonRouteCard :card-list="GeminiRouteList" />
  </main>
</template>

<script lang="ts" setup>
import CommonTitle from '@/components/Common/CommonTitle.vue'
import { useGeminiRouteList } from '@/composables/route.composable'

useHead({
  title: 'Gemini',
})

const GeminiRouteList = useGeminiRouteList()
</script>