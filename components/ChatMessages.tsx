import messages from "../utils/Messages.ts";

export default function ChatMessages({ liveMessages }: any) {
  return (
    <div className="flex flex-col h-full overflow-x-auto custom-scrollbar mb-4">
      <div className="flex flex-col h-full">
        <div className="grid grid-cols-12 gap-y-2">
          {messages.map((message, index) => {
            if (message.sender) {
              return (
                <div className="col-start-1 col-end-8 p-3 rounded-lg">
                  <div className="flex flex-row items-center">
                    <div className="text-white font-medium flex items-center justify-center h-10 w-10 rounded-full bg-indigo-500 flex-shrink-0">
                      A
                    </div>
                    <div className="relative ml-3 text-sm bg-white py-2 px-4 shadow rounded-xl">
                      <div>{message.message}</div>
                    </div>
                  </div>
                </div>
              );
            } else {
              const isLastMessage = index === messages.length - 1;
              return (
                <div className="col-start-6 col-end-13 p-3 rounded-lg">
                  <div className="flex items-center justify-start flex-row-reverse">
                    <div className="relative mr-3 text-sm bg-indigo-100 py-2 px-4 shadow rounded-xl">
                      <div>{message.message}</div>
                      {isLastMessage && (
                        <div className="absolute text-xs bottom-0 right-0 -mb-5 mr-2 text-gray-500">
                          Seen
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            }
          })}
          {/* Live Messages */}
          {liveMessages.map((message: any) => {
            return (
              <div className="col-start-6 col-end-13 p-3 rounded-lg">
                <div className="flex items-center justify-start flex-row-reverse">
                  <div className="relative mr-3 text-sm bg-indigo-100 py-2 px-4 shadow rounded-xl">
                    <div>{message.text}</div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
