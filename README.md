# 🚀 AI Chatbot

This is an AI-powered chatbot built with Next.js, TypeScript, and TailwindCSS. The chatbot allows users to have interactive conversations with an AI model while maintaining conversation history and supporting image-based queries.

## ✨ Features

- 💬 **Chat with AI:** Users can send messages and receive AI-generated responses.
- 📜 **Chat Log Display:** Chat messages are logged at the top of the application.
- 🔄 **Auto Scroll:** When a new prompt is sent, the chat automatically scrolls to the latest message.
- 🖼️ **Image Support:** Users can optionally include an image URL with their prompt and ask questions about the image.
- 📁 **Export Chat History:** Users can download their conversation as a `.txt` file.
- 🧠 **Context Awareness:** The chatbot remembers previous messages in the conversation for more coherent responses.
- 🔗 **Powered by OpenRouter.AI:** AI responses are generated using the OpenRouter.AI API.

## 🌐 Live Demo

You can try the chatbot online at:
🔗 **[Live Demo](https://iritman-chatbot.vercel.app)**

## 📦 Tech Stack

- **Next.js** (React framework for server-side rendering)
- **TypeScript** (Strongly typed JavaScript for better maintainability)
- **TailwindCSS** (Utility-first CSS framework for rapid UI development)
- **OpenRouter.AI** (AI service provider for chat interactions)

## 🚀 Getting Started

### 🔧 Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (Latest LTS recommended)
- [Yarn](https://yarnpkg.com/) or [npm](https://www.npmjs.com/)

### 📥 Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/iritman/nextjs-ai-chatbot.git
   cd nextjs-ai-chatbot
   ```
2. Install dependencies:
   ```sh
   yarn install  # or npm install
   ```
3. Create a `.env.local` file in the root directory and add your OpenRouter.AI API key:
   ```env
   GEMINI_API_KEY=your_api_key_here
   ```

### ▶️ Running the Project

Start the development server:

```sh
yarn dev  # or npm run dev
```

The app will be available at [http://localhost:3000](http://localhost:3000) 🎉

## 📤 Exporting Chat History

- Click the **Export** button to download your conversation as a `.txt` file.
- The file will contain the full chat history in a readable format.

## 🌟 Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request. 🚀

## 📄 License

This project is licensed under the MIT License.

## 📧 Contact

For any questions or feedback, feel free to reach out:

- 📩 Email: [iritman@gmail.com](mailto:iritman@gmail.com)
- 🔗 LinkedIn: [Naiem Yousefifard](https://www.linkedin.com/in/naiem-yousefifard-11086729b)

Happy coding! 🎉
