<template>
  <main class="flex flex-col flex-1 items-center gap-4 sm:gap-8 py-8">
    <CommonTitle
      title="Gemini Chat"
    />

    <section class="flex flex-col gap-2 w-[90%] sm:max-w-[50%]">
      <p class="text-sm text-gray-900 dark:text-white">
        Input Message
      </p>

      <textarea
        v-model="inputData"
        class="text-gray-900 border border-gray-900 rounded-md px-3 py-2 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
        type="text"
      />

      <button
        class="bg-sky-500 disabled:bg-gray-400 px-4 py-2 border border-sky-500 disabled:border-gray-400 text-md text-white rounded-md"
        type="submit"
        :disabled="!inputData || isRequestData"
        @click="handleSubmit"
      >
        {{ isRequestData? 'Loading...' : 'Generate Response' }}
      </button>
    </section>

    <section
      v-show="result"
      class="flex flex-col gap-2 w-[90%] sm:max-w-[60%]"
    >
      <h3 class="text-sm text-gray-900 dark:text-white">Response Information</h3>
      <MdPreview
        v-model:model-value="result"
        class="rounded-md"
        editor-id="preview-only"
        language="en-US"
        theme="dark"
        :code-theme="'github'"
        :show-code-row-number="true"
      />
    </section>
  </main>
</template>

<script lang="ts" setup>
import CommonTitle from '@/components/Common/CommonTitle.vue'
import type { GeminiChatResponse } from '@/types/Gemini/GeminiChat'
import { MdPreview } from 'md-editor-v3'
import 'md-editor-v3/lib/preview.css'

useHead({
  title: 'Gemini Chat',
})

const inputData = ref('')
const isRequestData = ref(false)
const result = ref('')

const config = useRuntimeConfig()

const handleSubmit = async (e: MouseEvent) => {
  e.preventDefault()
  isRequestData.value = true
  result.value = ''
  
  const isUseGeminiStream = JSON.parse(config.public.isUseGeminiStream as string || 'false')

  if (isUseGeminiStream) {
    const eventSource = new EventSource(`${config.public.apiDomain}/gemini/stream`)

    const listener = ({ data }: any) => {
      result.value += data
    }
    eventSource.addEventListener('message.stream.gemini', listener)

    eventSource.onerror = (error) => {
      console.log(error)
      eventSource.removeEventListener('message.stream.gemini', listener)
      eventSource.close()
    }
  }

  const response: GeminiChatResponse = await $fetch(`${config.public.apiDomain}/gemini/chat`,{
    method: 'POST',
    body: {
      message: inputData.value,
      stream: isUseGeminiStream,
    }
  })

  if (response.success && response.result) {
    result.value = response.result
  }

  isRequestData.value = false
  inputData.value = ''
}
</script>
