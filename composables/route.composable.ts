import type { ICommonRouteCard } from '@/types/Common/CommonRouteCard'

export const useHomeAiList = () => useState<ICommonRouteCard[]>(
  'homeAiList', () => [
    {
      name: 'OpenAI',
      link: '/openai'
    },
    {
      name: 'Gemini',
      link: '/gemini'
    }
  ]
)

export const useOpenAiRouteList = () => useState<ICommonRouteCard[]>(
  'openAiRouteList', () => [
    {
      name: 'OpenAI Chat',
      link: '/openai/chat'
    },
    {
      name: 'OpenAI Image',
      link: '/openai/image'
    }
  ]
)

export const useGeminiRouteList = () => useState<ICommonRouteCard[]>(
  'geminiRouteList', () => [
    {
      name: 'Gemini Chat',
      link: '/gemini/chat'
    }
  ]
)
