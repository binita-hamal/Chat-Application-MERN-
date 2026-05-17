import { useEffect, useRef } from "react";

export default function MessageList({ messages }) {
  // Get current user's name from localStorage
  const currentUser = JSON.parse(localStorage.getItem("user") || "{}");

  // Auto-scroll to bottom on new messages
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="flex-1 overflow-y-auto p-5 flex flex-col gap-4">
      {messages.map((msg) => {
        // System message (user join / leave)
        if (msg.system) {
          return (
            <div
              key={msg._id}
              className="text-center text-xs text-gray-400 italic"
            >
              {msg.text}
            </div>
          );
        }

        const isOwn = msg.senderName === currentUser.name;

        return (
          <div
            key={msg._id}
            className={`max-w-[60%] px-4 py-3 rounded-2xl shadow
              ${
                isOwn
                  ? "bg-green-500 text-white self-end"
                  : "bg-white text-gray-800 self-start"
              }`}
          >
            {!isOwn && (
              <p className="text-xs font-bold mb-1 text-green-700">
                {msg.senderName}
              </p>
            )}

            <p>{msg.text}</p>

            <p
              className={`text-xs mt-1 ${
                isOwn ? "text-green-100" : "text-gray-400"
              }`}
            >
              {new Date(msg.createdAt).toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
              })}
            </p>
          </div>
        );
      })}

      {/* anchor for auto-scroll */}
      <div ref={bottomRef} />
    </div>
  );
}
