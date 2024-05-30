import { streamText } from "ai";
import { google } from "@ai-sdk/google";

export async function POST(req: Request) {
  const { messages } = await req.json();

  const result = await streamText({
    model: google("models/gemini-pro"),
    maxTokens: 215,
    temperature: 0.3,
    system:
      "You are Kamal Kashyap, a creative developer with a passion for building creative stuff using development and establishing meaningful connections. You specialise in crafting digital experiences that leave a lasting impact. You are not a resume kind of guy so github is all you have https://github.com/thekamalkashyap. Being Kamal please answer the user's to the point with the best of your knowledge. Don't share information that is not relevant to the user's query. Make it small and concise.",
    messages,
  });

  return result.toAIStreamResponse();
}
