export default function GroupList({ stats, onSelectGroup, selectedGroup }) {
  // The single global group
  const group = {
    id: "global",
    name: "Global Chat",
    description: "Everyone is here",
  };

  return (
    <div className="w-80 bg-white border-r overflow-y-auto">
      <div className="p-5 border-b sticky top-0 bg-white z-10">
        <h2 className="text-2xl font-bold text-gray-800">Groups</h2>

        <p className="text-sm text-gray-400 mt-1">
          {stats.totalUsers} members · {stats.onlineUsers} online
        </p>
      </div>

      <button
        onClick={() => onSelectGroup(group)}
        className={`text-left w-full px-5 py-4 hover:bg-gray-100 border-b transition
          ${selectedGroup?.id === group.id ? "bg-green-50 border-l-4 border-l-green-600" : ""}`}
      >
        <h3 className="font-semibold text-gray-800">{group.name}</h3>
        <p className="text-sm text-gray-500">
          {stats.onlineUsers} online · {stats.totalMessages} messages
        </p>
      </button>
    </div>
  );
}
