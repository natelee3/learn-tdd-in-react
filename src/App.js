import NewMessageForm from './components/NewMessageForm';
import MessageList from './components/MessageList';
import { useState } from 'react';

function App () {
  const [messages, setMessages] = useState([]);

  const handleSend = (newMessage) => {
    setMessages([newMessage, ...messages])
  };

  return (
    <div>
      <NewMessageForm onSend={handleSend} />
      <MessageList messages={messages} />
    </div>
  );
}

export default App;
