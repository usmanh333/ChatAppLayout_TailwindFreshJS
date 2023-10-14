import { useState } from "preact/hooks";
import ProfileImage from "./ProfileImage.tsx";

export default function ProfileHeader() {
  const [isActive, setIsActive] = useState(true);

  const toggleStatus = () => {
    setIsActive(!isActive);
  };

  return (
    <div className="flex flex-col items-center bg-[#1b1b1eff] border border-gray-600 mt-4 w-full py-6 px-4 rounded-lg">
      <div className="h-20 w-20 rounded-full border overflow-hidden">
        <ProfileImage />
      </div>
      <div className="text-sm font-semibold mt-2">Usman</div>
      <div className="text-xs text-gray-400 font-medium">
        Javascript Developer
      </div>
      <div className="flex flex-row items-center mt-3">
        <button class="focus:outline-none" onClick={toggleStatus}>
          <div
            className={`flex flex-col justify-center h-4 w-8 rounded-full ${
              isActive ? "bg-indigo-500" : "bg-gray-400"
            }`}
          >
            <div
              className={`h-3 w-3 rounded-full ${
                isActive
                  ? "self-end mr-1 bg-white"
                  : "self-start ml-1 bg-gray-600"
              }`}
            />
          </div>
        </button>
        <div className="leading-none ml-2 text-xs">
          {isActive ? "Active" : "Inactive"}
        </div>
      </div>
    </div>
  );
}
