# Chat Application with ChatGPT Integration

This chat application is built using React and integrates with OpenAI's ChatGPT to provide a responsive and interactive chatbot experience. It leverages the power of React Query for state management and Zustand for global state handling.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Components](#components)
- [Hooks](#hooks)
- [Styling](#styling)

## Features

- Real-time ChatGPT integration
- Interactive message input and options menu
- Message history tracking with Zustand
- Stylish UI with Tailwind CSS and custom SCSS modules

## Installation

To set up the project locally, follow these steps:

1. Clone the repository

```bash
git clone
```

2. Install dependencies (use --force because one library has version issues)

```bash
npm install --force
```

3. Add OpenAI API key to .env file

```bash
NEXT_PUBLIC_OPENAI_API_KEY='YOUR_API_KEY'
```

4. Start the development server

```bash
npm run dev
```


## Usage

To interact with the chatbot:

1. Open the application in your browser.
2. Click on the "Open Chat" button to open the chat window.
3. Type your message in the input area or select predefined options.
4. View the bot's response, and interact with messages using the provided icons.

## Components

- `ChatWindow`: The main container for the chat interface.
- `MessageInput`: Allows the user to type and send messages.
- `MessageList`: Displays a list of all messages.
- `ChatGPTMessage`: Renders individual chat messages with animation.
- `InteractionIcons`: Provides interaction icons for likes, dislikes, and other actions.
- `OptionMenu`: Shows predefined options for user interaction.
- `ActionMenu`: Offers modification options for ChatGPT's responses.

Each component is documented in their respective files with detailed descriptions and usage examples.

## Hooks
The following custom hooks are part of the application:

- `useChatGPTQuery`: Manages the interactions with the ChatGPT API.
- `useChatStore`: Provides the global state management with Zustand for messages and options.

Refer to the hooks directory for proper documentation of each hook.

## Styling
The application uses Tailwind CSS for styling and custom SCSS modules for component-specific styling. The SCSS files are located in the `styles` directory and are imported in the respective component files. The Tailwind CSS configuration file is located in the root directory.
