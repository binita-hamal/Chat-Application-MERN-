import { useState, useEffect } from "react";
import ChatWindow from "../components/dashboard/ChatWindow";
import GroupList from "../components/dashboard/GroupList";
import Sidebar from "../components/dashboard/Sidebar";
import socket from "../lib/socket"; //singleton socket

function Dashboard() {
  // Which group is selected (null = none, show empty state)
  const [selectedGroup, setSelectedGroup] = useState(null);
  const [messages, setMessages] = useState([]);
  const [stats, setStats] = useState({
    totalMessages: 0,
    totalUsers: 0,
    onlineUsers: 0,
  });

  useEffect(() => {
    // Connect when dashboard mounts
    socket.connect();

    socket.on("chat_history", (history) => {
      setMessages(history);
    });

    socket.on("new_message", (msg) => {
      setMessages((prev) => [...prev, msg]);
    });

    socket.on("stats_update", (data) => {
      setStats(data);
    });

    socket.on("user_join", (data) => {
      // Add a system notification to the chat
      setMessages((prev) => [
        ...prev,
        {
          _id: Date.now(),
          system: true,
          text: `${data.name} joined the chat 👋`,
          createdAt: new Date(),
        },
      ]);
    });

    socket.on("user_leave", (data) => {
      setMessages((prev) => [
        ...prev,
        {
          _id: Date.now() + 1,
          system: true,
          text: `${data.name} left the chat`,
          createdAt: new Date(),
        },
      ]);
    });

    // Cleanup: remove listeners + disconnect when leaving dashboard
    return () => {
      socket.off("chat_history");
      socket.off("new_message");
      socket.off("stats_update");
      socket.off("user_join");
      socket.off("user_leave");
      socket.disconnect();
    };
  }, []); // empty array = run once on mount

  return (
    <div className="h-screen flex bg-gray-100 overflow-hidden">
      <Sidebar />
      <GroupList
        stats={stats}
        onSelectGroup={setSelectedGroup}
        selectedGroup={selectedGroup}
      />
      {selectedGroup ? (
        <ChatWindow messages={messages} stats={stats} />
      ) : (
        <EmptyState />
      )}
    </div>
  );
}

// Shown when no group is selected (click a group in the middle column)
function EmptyState() {
  return (
    <div className="flex-1 flex items-center justify-center bg-[#efeae2]">
      <p className="text-gray-400">Select a group to start chatting</p>
    </div>
  );
}

export default Dashboard;
