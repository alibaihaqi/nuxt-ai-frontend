interface AiPage {
  name: string
  link: string
}

export const useHomeAiList = () => useState<AiPage[]>(
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