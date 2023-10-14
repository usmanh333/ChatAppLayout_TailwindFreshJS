import Users from "../utils/Users.ts";
import ArchiveConversations from "./ArchiveConversations.tsx";

export default function ActiveUsers() {
  return (
    <div className="flex flex-col mt-8">
      <div className="flex flex-row items-center justify-between text-xs">
        <span className="font-bold">Active Conversations</span>
        <span className="flex items-center justify-center bg-gray-300 h-4 w-4 rounded-full text-black font-bold">
          {Users.length}
        </span>
      </div>
      <a href="/">
        <div className="flex flex-col space-y-1 mt-4 py-2 px-1 -mx-2 h-72 overflow-y-auto custom-scrollbar">
          {Users.map((user) => {
            return (
              <button
                className="flex flex-row items-center rounded-xl p-2 group"
                key={user.id}
              >
                <div
                  className={`border-white text-black flex items-center justify-center h-8 w-8 ${user.color} font-bold rounded-full group-hover:text-black`}
                >
                  {user.initial}
                </div>
                <div className="ml-2 text-sm font-semibold">
                  {user.username}
                </div>
              </button>
            );
          })}
        </div>
      </a>
      <ArchiveConversations />
    </div>
  );
}
