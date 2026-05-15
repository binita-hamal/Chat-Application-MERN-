export default function MessageInput() {
  return (
    <div className="p-4 bg-white border-t flex gap-3">
      
      <input
        type="text"
        placeholder="Type a message"
        className="flex-1 border rounded-full px-5 py-3 outline-none focus:ring-2 focus:ring-green-300"
      />

      <button className="bg-green-600 hover:bg-green-700 text-white px-6 rounded-full transition">
        Send
      </button>

    </div>
  );
}
