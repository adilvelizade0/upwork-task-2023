import { useMutation, useQueryClient } from "react-query";
import { useState } from "react";

// Structuring a message history type
type Message = {
  role: "system" | "user" | "assistant";
  content: string;
};

// Function to fetch the ChatGPT response
async function fetchChatResponse(message: string, messageHistory: Message[]) {
  const response = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer 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`,
    },
    body: JSON.stringify({
      model: "gpt-3.5-turbo", // use the correct model identifier
      messages: messageHistory.concat({ role: "user", content: message }),
    }),
  });

  if (!response.ok) {
    throw new Error("Fetching ChatGPT response failed");
  }

  return response.json();
}

// Custom hook that maintains the conversation context
export const useChatGPTQuery = () => {
  const queryClient = useQueryClient();
  const [messageHistory, setMessageHistory] = useState<Message[]>([
    { role: "system", content: "You are a helpful assistant." },
  ]);

  // Mutation to send a message
  const sendMessage = useMutation(
    (newMessage: string) => fetchChatResponse(newMessage, messageHistory),
    {
      onSuccess: (data) => {
        // Append the new user message and the GPT response to the message history
        setMessageHistory((prev) => [
          ...prev,
          { role: "user", content: data.choices[0].message.content }, // Assuming the API response structure
          { role: "assistant", content: data.choices[0].message.content },
        ]);
      },
    },
  );

  return {
    sendMessage: sendMessage.mutate, // Function to call when you want to send a message.
    data: sendMessage.data, // Latest successful data.
    isLoading: sendMessage.isLoading, // Is the mutation in flight.
    error: sendMessage.error, // Any error that might have occurred.
    messageHistory, // The history of messages for the currently maintained conversation.
    setMessageHistory, // Function to manually update the message history if needed.
  };
};
