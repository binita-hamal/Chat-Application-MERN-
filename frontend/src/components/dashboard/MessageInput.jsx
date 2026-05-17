import { useState } from "react";
import socket from "../../lib/socket";

export default function MessageInput() {
  const [text, setText] = useState("");

  const handleSend = () => {
    if (!text.trim()) return;

    // The server saves it and broadcasts back to everyone including you.
    socket.emit("send_message", { text: text.trim() });

    setText(""); // clear input
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="p-4 bg-white border-t flex gap-3">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Type a message..."
        className="flex-1 border rounded-full px-5 py-3 outline-none focus:ring-2 focus:ring-green-300"
      />
      <button
        onClick={handleSend}
        disabled={!text.trim()}
        className="bg-green-600 hover:bg-green-700 disabled:opacity-40 text-white px-6 rounded-full transition"
      >
        Send
      </button>
    </div>
  );
}
