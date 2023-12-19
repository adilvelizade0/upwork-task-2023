/**
 * useChatGPTQuery Custom Hook
 *
 * Description:
 * This hook manages the chat interaction with the ChatGPT API. It maintains the history of messages and
 * allows sending new messages to the API. Successful responses are appended to the message history.
 *
 * Returns:
 * - `sendMessage`: A function obtained from the `useMutation` hook. Call this function with a new message
 *   string to initiate a POST request to the ChatGPT API.
 * - `data`: The latest response data received from the API.
 * - `isLoading`: A boolean indicating if the mutation (API request) is currently in progress (true) or not (false).
 * - `error`: An error object that contains API error information.
 * - `messageHistory`: An array of Message objects representing the ongoing chat with ChatGPT.
 * - `setMessageHistory`: A function to manually update the message history, useful if you need to directly control
 *   the conversation's state or implement additional features like undo/redo or specific message updates.
 *
 * Message Structure:
 * - `role`: A string representing who sent the message. Can be 'system', 'user', or 'assistant'.
 * - `content`: The text content of the message itself.
 *
 * API Communication:
 * - The `fetchChatResponse` function makes a POST request to the ChatGPT API, sending the current message
 *   and the entire message history for context-aware conversations.
 * - For the API call, the `model` parameter is set to "gpt-3.5-turbo". Replace with the appropriate model
 *   according to your OpenAI configuration.
 * - It requires an OpenAI API key which should be stored as an environment variable `NEXT_PUBLIC_OPENAI_API_KEY`.
 *
 * Usage:
 * ```jsx
 * const {
 *   sendMessage,
 *   data,
 *   isLoading,
 *   error,
 *   messageHistory,
 *   setMessageHistory
 * } = useChatGPTQuery();
 *
 * // Use `sendMessage` in your component to send messages:
 * sendMessage("Hello, ChatGPT!");
 * ```
 *
 * Caution:
 * - Ensure that you are handling user retry behavior in case of an error (network errors, API rate limits, etc.)
 * - DO NOT expose your OpenAI API key in your frontend code or repositories. It should only be used
 *   on the server side or within environment variables as shown.
 */

import { useMutation, useQueryClient } from "react-query";
import { useState } from "react";

// Type for a chat message
type Message = {
  role: "system" | "user" | "assistant";
  content: string;
};

/**
 * Asynchronously fetches a response from the ChatGPT API based on the provided message and message history.
 * @param message - The new message to be sent to the API.
 * @param messageHistory - The history of messages in the conversation.
 * @returns A Promise that resolves to the response from the ChatGPT API.
 * @throws If the API request fails.
 */
async function fetchChatResponse(message: string, messageHistory: Message[]) {
  const response = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_OPENAI_API_KEY}`,
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

/**
 * Custom React Query hook for interacting with ChatGPT API.
 * @returns An object containing various properties and functions for managing chat state and sending messages.
 */

export const useChatGPTQuery = () => {
  const queryClient = useQueryClient();
  const [messageHistory, setMessageHistory] = useState<Message[]>([
    { role: "system", content: "You are a helpful assistant." },
  ]);

  // useMutation hook to send a new message and update message history
  const sendMessage = useMutation(
    (newMessage: string) => fetchChatResponse(newMessage, messageHistory),
    {
      onSuccess: (data) => {
        // Update message history with user and assistant messages
        setMessageHistory((prev) => [
          ...prev,
          { role: "user", content: data.choices[0].message.content },
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
