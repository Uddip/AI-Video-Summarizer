"use server";

import model from "@/utils/GenerativeAiClient";

export async function summarizeVideo(videoUrl: string) {
  const client = model;
  const result = await client.generateContent([
    "Please summarize the video in 1-2 paragraphs.",
    {
      fileData: {
        fileUri: videoUrl,
        mimeType: "",
      },
    },
  ]);

  return result.response.text();
}
