<template>
  <main class="flex flex-col flex-1 items-center justify-center">
    <CommonTitle
      title="Open AI"
    />
    <CommonRouteCard :card-list="OpenAiRouteList" />
  </main>
</template>

<script lang="ts" setup>
import CommonTitle from '@/components/Common/CommonTitle.vue'
import { useOpenAiRouteList } from '@/composables/route.composable'

useHead({
  title: 'OpenAI',
})

const OpenAiRouteList = useOpenAiRouteList()
</script>
