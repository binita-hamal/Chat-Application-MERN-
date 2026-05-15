const messages = [
  {
    id: 1,
    sender: "Ram",
    text: "Hello everyone",
    isOwn: false,
  },
  {
    id: 2,
    sender: "You",
    text: "Hi Ram",
    isOwn: true,
  },
];

export default function MessageList() {
  return (
    <div className="flex-1 overflow-y-auto p-5 flex flex-col gap-4">
      
      {messages.map((message) => (
        <div
          key={message.id}
          className={`max-w-[60%] px-4 py-3 rounded-2xl shadow
          ${
            message.isOwn
              ? "bg-green-500 text-white self-end"
              : "bg-white text-gray-800 self-start"
          }`}
        >
          {!message.isOwn && (
            <p className="text-xs font-bold mb-1 text-green-700">
              {message.sender}
            </p>
          )}

          <p>{message.text}</p>
        </div>
      ))}

    </div>
  );
}
