import { NextResponse } from "next/server";
import axios from "axios";

interface PromptRequest {
  prompt: string;
  imageUrl?: string;
  chatContent?: string;
}

export async function POST(request: Request) {
  try {
    const apiKey = process.env.GEMINI_API_KEY;

    if (!apiKey) {
      return NextResponse.json(
        { error: "API Key not found in environment variables." },
        { status: 500 }
      );
    }

    const { prompt, imageUrl, chatContent }: PromptRequest =
      await request.json();

    if (!prompt || typeof prompt !== "string") {
      return NextResponse.json(
        { error: "Prompt is required and must be a string." },
        { status: 400 }
      );
    }

    const content: Array<{
      type: string;
      text?: string;
      image_url?: { url: string };
    }> = [
      {
        type: "text",
        text: prompt,
      },
    ];

    if (imageUrl && typeof imageUrl === "string") {
      content.push({
        type: "image_url",
        image_url: {
          url: imageUrl,
        },
      });
    }

    const response = await axios.post(
      "https://openrouter.ai/api/v1/chat/completions",
      {
        model: "google/gemini-2.0-flash-thinking-exp-1219:free",
        messages: [
          {
            role: "system",
            content: `To respond to the user's message, consider this text as a reference to their previous conversation
            ---
            ${chatContent}
            ---
            `,
          },
          {
            role: "user",
            content,
          },
        ],
      },
      {
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
      }
    );

    return NextResponse.json({
      result: response.data.choices[0].message.content,
    });
  } catch (error) {
    console.error("Error analyzing image:", error);
    return NextResponse.json(
      { error: "Failed to analyze the image." },
      { status: 500 }
    );
  }
}
