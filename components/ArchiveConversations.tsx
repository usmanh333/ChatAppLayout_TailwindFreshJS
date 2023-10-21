export default function ArchiveConversations() {
  return (
    <>
      <div className="flex flex-row items-center justify-between text-xs mt-6">
        <span className="font-bold">Archived Conversations</span>
        <span className="flex items-center justify-center bg-gray-300 h-4 w-4 rounded-full text-black font-bold">
          1
        </span>
      </div>
      <div className="flex flex-col space-y-1 mt-4 -mx-2 hover:text-black">
        <button className="flex flex-row items-center hover:bg-gray-100 rounded-xl p-2">
          <div className="text-black font-bold flex items-center justify-center h-8 w-8 bg-indigo-200 rounded-full">
            H
          </div>
          <div className="ml-2 text-sm font-semibold">Henry Boyd</div>
        </button>
      </div>
    </>
  );
}
