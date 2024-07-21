import React, { useState } from 'react';
import './Chat.css';

const Chat = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="chat-container">
      <button className="chat-button" onClick={toggleChat}>
        💬
      </button>
      {isOpen && (
        <div className="chat-window">
          <div className="chat-header">
            <h3>Chat</h3>
            <button onClick={toggleChat} className="close-chat">✖</button>
          </div>
          <div className="chat-body">
            <p>Welcome to the chat!</p>
          </div>
          <div className="chat-footer">
            <input type="text" placeholder="Type a message..." />
            <button>Send</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chat;