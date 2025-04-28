import React, { useState, useRef, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { MessageCircle, Send } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { ChatBotTexts } from "@/helpers/Helper";
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

type MessageType = {
    id: string;
    sender: 'bot' | 'user';
    text?: string;        // For user messages or free texts
    textKey?: string;     // For bot messages like 'welcome', 'findTickets', etc
    options?: string[];
};

const ChatBot = () => {
    const { language } = useLanguage();
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<MessageType[]>([]);
    const [inputValue, setInputValue] = useState('');
    const messagesEndRef = useRef<HTMLDivElement>(null);
    const navigate = useNavigate();

    // Initialize chat with welcome message
    useEffect(() => {
        if (isOpen && messages.length === 0) {
            setMessages([{
                id: '1',
                sender: 'bot',
                textKey: 'welcome',             // Save key instead of full text
                options: ChatBotTexts.options.map(opt => opt.key),
            }]);
        }
    }, [isOpen, messages]);
    
    

    // Auto-scroll to bottom on new messages
    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);

    const toggleChat = () => {
        setIsOpen(!isOpen);
    };

    const handleOptionClick = (key: string) => {
        const option = ChatBotTexts.options.find(opt => opt.key === key);
        if (!option) return;
    
        addMessage(option[language], 'user');

        // Simulate bot response based on option
        setTimeout(() => {
        const response: MessageType = {
            id: Date.now().toString(),
            text: '',
            sender: 'bot',
            options: ChatBotTexts.options[language]
        };

        // Navigate if the option matches
        if (key === 'find_tickets') {
            navigate('/tickets');
        } else if (key === 'view_matches') {
            navigate('/matches');
        }
        
        switch (key) {
            case 'find_tickets':
                response.textKey = 'findTickets';
                break;
            case 'explore_tourism':
                response.textKey = 'exploreTourism';
                break;
            case 'view_matches':
                response.textKey = 'viewMatches';
                break;
            case 'help':
                response.textKey = 'help';
                break;
            default:
                response.text = ChatBotTexts.unknown[language];
        }
        

        setMessages(prevMessages => [...prevMessages, response]);
        }, 600);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!inputValue.trim()) return;

        addMessage(inputValue, 'user');
        setInputValue('');

        // Simulate bot response to custom input
        setTimeout(() => {
        setMessages(prevMessages => [
            ...prevMessages,
            {
            id: Date.now().toString(),
            textKey: 'thanks',
            sender: 'bot',
            options: ChatBotTexts.options[language]
            }
        ]);
        }, 800);
    };

    const addMessage = (text: string, sender: 'bot' | 'user') => {
        const newMessage = {
        id: Date.now().toString(),
        text,
        sender
        };
        setMessages(prevMessages => [...prevMessages, newMessage]);
    };

    return (
        <div className="fixed bottom-6 right-6 z-50">
        {/* Chat toggle button */}
        <Button
            onClick={toggleChat}
            className={`rounded-full w-14 h-14 flex items-center justify-center shadow-lg ${isOpen ? 'bg-red-700' : 'bg-red-600'} hover:bg-red-700`}
            aria-label="Chat with us"
        >
            <MessageCircle className="text-white" />
        </Button>

        {/* Chat window */}
        <AnimatePresence>
            {isOpen && (
            <motion.div
                className="absolute bottom-20 right-0 w-80 md:w-96 bg-white rounded-lg shadow-xl border border-gray-200 flex flex-col max-h-[500px] overflow-hidden"
                initial={{ opacity: 0, scale: 0.8, y: 50 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8, y: 50 }}
                transition={{ duration: 0.3 }}
            >
                {/* Chat header */}
                <div className="bg-red-600 text-white p-4 flex justify-between items-center">
                    <h3 className="font-bold">Morocco 2030 Assistant</h3>
                    <button
                    onClick={toggleChat}
                    className="text-white hover:text-gray-200"
                    aria-label="Close chat"
                    >
                    ✕
                    </button>
                </div>

                {/* Messages container */}
                <div className="flex-1 p-4 overflow-y-auto max-h-80">
                    {messages.map(message => (
                        <div key={message.id} className="mb-4">
                        
                        {/* Message bubble */}
                        <div
                            className={`p-3 rounded-lg ${
                            message.sender === 'bot'
                                ? 'bg-gray-100 text-gray-800'
                                : 'bg-red-600 text-white ml-auto'
                            } max-w-[80%] ${message.sender === 'user' ? 'ml-auto' : ''}`}
                        >
                            {message.sender === 'bot' && message.textKey
                            ? ChatBotTexts[message.textKey]?.[language] || ''
                            : message.text}
                        </div>

                        {/* Suggestions / Options */}
                        {message.options && message.sender === 'bot' && (
                            <div className="mt-2 flex flex-wrap gap-2">
                            {message.options.map(key => {
                                const option = ChatBotTexts.options.find(opt => opt.key === key);
                                if (!option) return null;
                                return (
                                <button
                                    key={key}
                                    onClick={() => handleOptionClick(key)}
                                    className="bg-gray-200 hover:bg-gray-300 px-3 py-1 rounded-full text-sm text-gray-800 transition-colors"
                                >
                                    {option[language]}
                                </button>
                                );
                            })}
                            </div>
                        )}
                        
                        </div>
                    ))}
                    <div ref={messagesEndRef} />
                </div>


                {/* Input area */}
                <form onSubmit={handleSubmit} className="border-t border-gray-200 p-3 flex">
                    <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder={ChatBotTexts.placeholder[language]}
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-1 focus:ring-red-600"
                    />
                    <Button
                    type="submit"
                    className="bg-red-600 hover:bg-red-700 rounded-r-md rounded-l-none"
                    aria-label="Send message"
                    >
                    <Send size={18} />
                    </Button>
                </form>
            </motion.div>
            )}
        </AnimatePresence>
        </div>
    );
};

export default ChatBot;
