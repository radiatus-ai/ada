const providerOptions = [
  { name: 'Anthropic', value: 'anthropic' },
  { name: 'Cohere', value: 'cohere' },
  { name: 'Google', value: 'google' },
  { name: 'Groq', value: 'groq' },
  { name: 'Ollama', value: 'ollama' },
  { name: 'OpenAI', value: 'openai' },
  { name: 'Perplexity AI', value: 'perplexity' },
];

const providerModelOptions = {
  anthropic: [
    { name: 'Claude 3.5 Sonnet', value: 'claude-3-5-sonnet-20240620' },
    { name: 'Claude 3 Opus', value: 'claude-3-opus-20240229' },
    { name: 'Claude 3 Sonnet', value: 'claude-3-sonnet-20240229' },
    { name: 'Claude 3 Haiku', value: 'claude-3-haiku-20240307' },
  ],
  cohere: [
    { name: 'Command-R', value: 'command-r' },
    { name: 'Command-R Plus', value: 'command-r-plus' },
  ],
  groq: [
    { name: 'Llama 3 8b', value: 'llama3-8b-8192', context_window: 8192 },
    { name: 'Llama 3 70b', value: 'llama3-70b-8192', context_window: 8192 },
    { name: 'Llama 2 70b', value: 'llama2-70b-4096', context_window: 4096 },
    {
      name: 'Mixtral 8x7b',
      value: 'mixtral-8x7b-32768',
      context_window: 32768,
    },
    { name: 'Gemma 7b', value: 'gemma-7b-it', context_window: 8192 },
  ],
  google: [
    { name: 'Gemini 1.0 Pro', value: 'gemini-1.0-pro-latest' },
    {
      name: 'Gemini 1.0 Pro - Vision',
      value: 'gemini-1.0-pro-vision-latest',
    },
    { name: 'Gemini 1.5 Pro', value: 'gemini-1.5-pro-latest' },
    { name: 'Chat Bison', value: 'chat-bison-001' },
    { name: 'Text Bison', value: 'text-bison-001' },
  ],
  ollama: [
    { name: 'Codellama', value: 'codellama:latest' },
    { name: 'Llama3 8b', value: 'llama3:8b' },
    { name: 'Llama2 7b', value: 'llama2:7b' },
    { name: 'Mixtral', value: 'mixtral:latest' },
  ],
  openai: [
    { name: 'GPT 4o', value: 'gpt-4o' },
    { name: 'GPT 4 Turbo 2024-04-09', value: 'gpt-4-turbo-2024-04-09' },
    { name: 'GPT 3.5 Turbo', value: 'gpt-3.5-turbo-0125' },
  ],
  perplexity: [
    { name: 'Mistral 7b Instruct', value: 'mistral-7b-instruct' },
    { name: 'Sonar Medium - Chat', value: 'sonar-medium-chat' },
    { name: 'Sonar Medium - Online', value: 'sonar-medium-online' },
  ],
};

export { providerModelOptions, providerOptions };
