<template>
  <section class="flex flex-col sm:flex-row gap-4">
    <NuxtLink
      v-for="(card, idx) in cardList"
      :key="idx"
      :to="{
        path: card.link
      }"
      class="group border-2 border-grey-900 px-8 py-4 hover:border-[#bd34fe] shadow-sm hover:shadow-md rounded-md"
    >
      <h1 class="group-hover:hover:text-[#bd34fe] text-gray-900 dark:text-white text-xl">
        {{ card.name }}
      </h1>
    </NuxtLink>
  </section>
</template>

<script lang="ts" setup>
import type { ICommonRouteCard } from '@/types/Common/CommonRouteCard'

defineProps<{
  cardList: ICommonRouteCard[],
}>()
</script>
