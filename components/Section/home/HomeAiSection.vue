<template>
  <section class="flex flex-col sm:flex-row gap-2">
    <router-link
      v-for="(data, idx) in AiList"
      :key="idx"
      :to="{
        path: data.link
      }"
      class="px-4 py-2 border border-grey-900 hover:border-blue-500 shadow-sm hover:shadow-md rounded-md"
    >
      <h1 class="text-lg dark:text-white">{{ data.name }}</h1>
    </router-link>
  </section>
</template>

<script lang="ts" setup>
import { useHomeAiList } from '@/composables/home.composable'

const AiList = useHomeAiList()
</script>
