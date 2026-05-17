import ChatHeader from "./ChatHeader";
import MessageList from "./MessageList";
import MessageInput from "./MessageInput";

export default function ChatWindow({ messages, stats }) {
  return (
    <div className="flex-1 flex flex-col bg-[#efeae2]">
      <ChatHeader stats={stats} />
      <MessageList messages={messages} />

      <MessageInput />
    </div>
  );
}
