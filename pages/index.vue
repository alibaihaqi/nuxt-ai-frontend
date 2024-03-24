<template>
  <main class="flex flex-col flex-1 items-center justify-center">
    <CommonTitle
      title="Alibaihaqi AI"
    />
    <CommonRouteCard :card-list="HomeAiList" />
  </main>
</template>

<script lang="ts" setup>
import CommonRouteCard from '@/components/Common/CommonRouteCard.vue'
import CommonTitle from '@/components/Common/CommonTitle.vue'
import { useHomeAiList } from '@/composables/route.composable'

useHead({
  title: 'Dashboard'
})

const HomeAiList = useHomeAiList()
</script>
