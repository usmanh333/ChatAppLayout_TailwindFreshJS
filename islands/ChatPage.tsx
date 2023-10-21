import { useState } from "preact/hooks";
import ActiveUsers from "../components/ActiveUsers.tsx";
import ChatMessages from "../components/ChatMessages.tsx";
import ProfileHeader from "../components/ProfileHeader.tsx";
import ChatSVG from "../components/SVGs/ChatSVG.tsx";
import FileSVG from "../components/SVGs/FileSVG.tsx";
import SmileSVG from "../components/SVGs/SmileSVG.tsx";
import SendButton from "../components/SendButton.tsx";

export default function ChatPage() {
  const [messages, setMessages] = useState<any>([]);
  const [newMessage, setNewMessage] = useState("");

  const handleSendMessage = () => {
    if (newMessage.trim() === "") {
      return;
    }
    const message = {
      text: newMessage,
      timestamp: new Date().toLocaleTimeString(),
    };
    setMessages([...messages, message]);
    setNewMessage("");
  };

  const handleInputKeyPress = (e: any) => {
    if (e.key === "Enter") {
      handleSendMessage();
    }
  };

  return (
    <div>
      <div className="flex h-[92vh] antialiased text-gray-800">
        <div className="flex flex-row h-full w-full overflow-x-hidden">
          <div className="bg-[#212121ff] text-white flex flex-col pt-3 pl-6 pr-2 w-64 bg-white flex-shrink-0">
            <ProfileHeader />
            <ActiveUsers />
          </div>
          <div className="flex flex-col flex-auto h-full p-6">
            <div className="bg-[#191e2bff] flex flex-col flex-auto flex-shrink-0 rounded-2xl bg-gray-100 h-full p-4 ">
              <ChatMessages liveMessages={messages} />
              <div className="bg-[#f0f8ff] flex flex-row items-center h-16 rounded-xl bg-white w-full px-4">
                <div>
                  <button className="flex items-center justify-center text-gray-400 hover:text-gray-600 focus:outline-none">
                    <FileSVG />
                  </button>
                </div>
                <div className="flex-grow ml-4">
                  <div className="relative w-full">
                    <input
                      type="text"
                      className="flex w-full border rounded-xl focus:outline-none focus:border-indigo-300 pl-4 h-10"
                      value={newMessage}
                      onInput={(e: any) => setNewMessage(e.target.value)}
                      onKeyPress={(e: any) => handleInputKeyPress(e)}
                    />
                    <button className="absolute flex items-center justify-center h-full w-12 right-0 top-0 text-gray-400 hover:text-gray-600">
                      <SmileSVG />
                    </button>
                  </div>
                </div>
                <div className="ml-4">
                  <SendButton handleSendMessage={handleSendMessage} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
