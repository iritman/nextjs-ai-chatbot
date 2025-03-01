import React from 'react';

interface ChatMessageProps {
    role: 'user' | 'assistant';
    content: string;
}

const ChatMessage: React.FC<ChatMessageProps> = ({ role, content }) => {
    return (
        <div className={`flex ${role === 'user' ? 'justify-end' : 'justify-start'} mb-4`}>
            <div
                className={`max-w-[70%] p-3 rounded-lg ${role === 'user'
                    ? 'bg-blue-500 text-white'
                    : 'bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100'
                    }`}
            >
                {content}
            </div>
        </div>
    );
};

export default ChatMessage;