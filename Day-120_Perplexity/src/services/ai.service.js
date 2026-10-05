import { initChatModel } from "langchain";

process.env.GOOGLE_API_KEY = process.env.GEMINI_API_KEY;

const model = await initChatModel("google:gemini-3.7-flash");

export async function testAi() {
    const response = await model.invoke("What is the capital of India?");

    console.log(response.text);
}