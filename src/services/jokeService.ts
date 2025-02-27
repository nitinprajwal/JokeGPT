import axios from 'axios';

const GROQ_API_KEY = import.meta.env.VITE_GROQ_API_KEY;

export const generateJoke = async (): Promise<string> => {
  try {
    const response = await axios.post(
      'https://api.groq.com/openai/v1/chat/completions',
      {
        messages: [
          {
            role: 'system',
            content: 'You are a dad joke generator. Generate a single, original, funny dad joke. Keep it clean and family-friendly. Only respond with the joke text, nothing else.'
          },
          {
            role: 'user',
            content: 'Generate a funny dad joke.'
          }
        ],
        model: 'llama-3.3-70b-versatile',
        temperature: 1,
        max_completion_tokens: 1024,
        top_p: 1,
        stream: false,
        stop: null
      },
      {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${GROQ_API_KEY}`
        }
      }
    );

    return response.data.choices[0].message.content.trim();
  } catch (error) {
    console.error('Error generating joke:', error);
    return "Why don't scientists trust atoms? Because they make up everything!";
  }
};