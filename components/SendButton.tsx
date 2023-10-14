import SendSVG from "./SVGs/SendSVG.tsx";

export default function SendButton({handleSendMessage}:any) {
  return (
    <div>
      <button onClick={handleSendMessage} className="flex items-center justify-center bg-indigo-800 hover:bg-indigo-600 rounded-xl text-white px-4 py-2 flex-shrink-0">
        <span className="mr-2">
          <SendSVG />
        </span>
        <span>Send</span>
      </button>
    </div>
  );
}
