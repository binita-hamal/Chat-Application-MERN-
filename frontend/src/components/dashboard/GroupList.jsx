const groups = [
  {
    id: 1,
    name: "MERN Developers",
    lastMessage: "Let's push the code today",
  },
  {
    id: 2,
    name: "Project Team",
    lastMessage: "Meeting at 7 PM",
  },
];

export default function GroupList() {
  return (
    <div className="w-80 bg-white border-r overflow-y-auto">
      
      {/* HEADER */}
      <div className="p-5 border-b sticky top-0 bg-white z-10">
        <h2 className="text-2xl font-bold text-gray-800">
          Groups
        </h2>
      </div>

      {/* GROUP ITEMS */}
      <div className="flex flex-col">
        {groups.map((group) => (
          <button
            key={group.id}
            className="text-left px-5 py-4 hover:bg-gray-100 border-b transition"
          >
            <h3 className="font-semibold text-gray-800">
              {group.name}
            </h3>

            <p className="text-sm text-gray-500 truncate">
              {group.lastMessage}
            </p>
          </button>
        ))}
      </div>

    </div>
  );
}
