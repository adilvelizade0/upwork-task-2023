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
 * State:
 * - messages: An array holding all chat messages.
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
 *
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
 *
 * // To send a message
 * sendMessage("Hello, ChatGPT!", "user");
 *
 * // To like a message
 * likeMessage("unique-message-id");
 *
 * // To delete a message
 * deleteMessage("unique-message-id");
 * ```
 */

import { create } from "zustand";
import { v4 as uuidv4 } from "uuid";

// Basic data structure for a message
export type IMessage = {
  id: string;
  text: string;
  sender: "user" | "bot";
  rate?: "like" | "dislike";
};

// Type for ChatState, encompassing the usage of the Zustand hook
type ChatState = {
  messages: Array<IMessage>;
  addMessage: (messageText: string, sender: "user" | "bot") => void;
  addRate: (messageId: string, rate: "like" | "dislike") => void;
  deleteMessage: (messageId: string) => void;
};

// Creating the Zustand hook
export const useChatStore = create<ChatState>((set) => ({
  // Initially an empty array for messages
  messages: [],

  // Function to add a new message
  // addMessage: Used to add a new message. Takes the message text and sender ("user" or "bot") as parameters.
  addMessage: (messageText, sender) =>
    set((state) => ({
      messages: [
        ...state.messages,
        { id: uuidv4(), text: messageText, sender, liked: false },
      ],
    })),

  // Function to rate a message
  // addRate: Used to rate a message (like or dislike). Takes the message ID and the rating (like or dislike) as parameters.
  addRate: (messageId, rate) => {
    set((state) => ({
      messages: state.messages.map((message) =>
        message.id === messageId ? { ...message, rate } : message,
      ),
    }));
  },

  // Function to delete a message
  // deleteMessage: Used to delete a message. Takes the message ID as a parameter.
  deleteMessage: (messageId) =>
    set((state) => ({
      messages: state.messages.filter((message) => message.id !== messageId),
    })),
}));
