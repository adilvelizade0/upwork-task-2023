/**
 * useChatStore (Zustand Store)
 *
 * Description:
 * A state management store for the chat application using Zustand. The store manages an array of messages,
 * an array of predefined options for chat interaction, and provides methods to manipulate the chat state,
 * including adding messages, rating messages, and deleting messages.
 *
 * Types:
 * - Message: Represents an individual chat message.
 *    - id: Unique identifier for the message.
 *    - text: Text content of the message.
 *    - sender: Indicates whether the message is from the "user" or the "bot".
 *    - rate: Optional, indicates if the message is "liked" or "disliked".
 *
 * - Options: Represents predefined options presented to users for modifying the chat response or quick replies.
 *    - title: A title categorizing the options.
 *    - data: An array of strings representing the actual options.
 *
 * State:
 * - messages: An array holding all chat messages.
 * - options: An array holding predefined categories and their respective data that can be used to enhance
 *   or modify the chatbot's response.
 *
 * Actions:
 * - addMessage (messageText, sender):
 *    Adds a new message to the chat with a unique identifier.
 *
 * - addRate (messageId, rate):
 *    Updates the rating of a message to either "like" or "dislike".
 *
 * - deleteMessage (messageId):
 *    Removes a message from the chat by its identifier.
 *
 * Usage:
 * ```jsx
 * const sendMessage = (text, sender) => {
 *   const { addMessage } = useChatStore();
 *   addMessage(text, sender);
 * };
 *
 * const likeMessage = (id) => {
 *   const { addRate } = useChatStore();
 *   addRate(id, "like");
 * };
 *
 * const deleteMessage = (id) => {
 *   const { deleteMessage } = useChatStore();
 *   deleteMessage(id);
 * };
 *
 * // In components:
 * // To send a message
 * sendMessage("Hello, ChatGPT!", "user");
 * // To like a message
 * likeMessage("unique-message-id");
 * // To delete a message
 * deleteMessage("unique-message-id");
 * ```
 *
 * Note:
 * Zustand is a minimalistic state manager which is ideal for simple states like these. It abstracts away the
 * boilerplate needed in typical state management solutions and offers a lean API. Ensure that you maintain the store
 * state immutably by copying and updating states rather than modifying them directly to prevent unwanted side effects.
 */

import { create } from "zustand";
import { v4 as uuidv4 } from "uuid";

export type Message = {
  id: string;
  text: string;
  sender: "user" | "bot";
  rate?: "like" | "dislike";
};

export type Options = {
  title: string;
  data: Array<string>;
};

type ChatState = {
  messages: Array<Message>;
  options: Array<Options>;
  addMessage: (messageText: string, sender: "user" | "bot") => void;
  addRate: (messageId: string, rate: "like" | "dislike") => void;
  deleteMessage: (messageId: string) => void;
};

export const useChatStore = create<ChatState>((set) => ({
  messages: [],
  options: [
    {
      title: "Define Strategy",
      data: ["Goal Setting", "Strategic Initiatives", "Business Plan Outline"],
    },
    {
      title: "Marketing Research",
      data: ["Customer Profiles", "Industry Trends"],
    },
    {
      title: "Risk Assessment",
      data: ["SWOT Analysis", "Risk Register", "Risk Score"],
    },
  ],
  addMessage: (messageText, sender) =>
    set((state) => ({
      messages: [
        ...state.messages,
        { id: uuidv4(), text: messageText, sender, liked: false },
      ],
    })),

  addRate: (messageId, rate) => {
    set((state) => ({
      messages: state.messages.map((message) =>
        message.id === messageId ? { ...message, rate } : message,
      ),
    }));
  },

  deleteMessage: (messageId) =>
    set((state) => ({
      messages: state.messages.filter((message) => message.id !== messageId),
    })),
}));
