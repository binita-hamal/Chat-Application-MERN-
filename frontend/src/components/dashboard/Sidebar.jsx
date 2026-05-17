import { MessageCircle, LogOut } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Sidebar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div className="w-20 bg-green-700 text-white flex flex-col items-center py-6 justify-between">
      <div className="flex flex-col gap-8 items-center">
        <button className="hover:bg-green-600 p-3 rounded-xl transition">
          <MessageCircle size={26} />
        </button>
      </div>

      {/* LOGOUT */}
      <button
        onClick={handleLogout}
        className="hover:bg-red-500 p-3 rounded-xl transition"
      >
        <LogOut size={24} />
      </button>
    </div>
  );
}
