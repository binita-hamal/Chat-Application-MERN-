export default function ChatHeader({ stats }) {
  return (
    <div className="bg-green-700 text-white p-4 shadow flex justify-between items-center">
      <div>
        <h2 className="text-xl font-bold">Global Chat</h2>

        <p className="text-sm text-green-100">
          {stats?.totalUsers ?? "..."} members · {stats?.onlineUsers ?? 0}{" "}
          online
        </p>
      </div>
    </div>
  );
}
