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
