import ChatWindow from "../components/dashboard/ChatWindow";
import GroupList from "../components/dashboard/GroupList";
import Sidebar from "../components/dashboard/Sidebar";

function Dashboard() {
  return (
    <>
      <div className="h-screen flex bg-gray-100 overflow-hidden">
        <Sidebar />
        <GroupList />
        <ChatWindow />
      </div>
    </>
  );
}

export default Dashboard;
