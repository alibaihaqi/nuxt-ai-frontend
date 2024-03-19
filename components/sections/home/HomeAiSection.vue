<template>
  <section class="flex flex-col sm:flex-row gap-2">
    <router-link
      v-for="(data, idx) in AiList"
      :key="idx"
      :to="{
        path: data.link
      }"
      class="px-4 py-2 border border-grey-700 rounded-md"
    >
      <h1>{{ data.name }}</h1>
    </router-link>
  </section>
</template>

<script lang="ts" setup>
const AiList = ref([
  {
    name: 'OpenAI',
    link: '/openai'
  },
  {
    name: 'Gemini',
    link: '/gemini'
  }
])
</script>