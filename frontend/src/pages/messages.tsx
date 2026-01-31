import { ChatList, ChatWindow, Sidebar } from "@/sections/chat";

const Messages = () => {
  return (
    <div className="h-screen overflow-hidden">
      <div className="h-full rounded-md border bg-background shadow-sm xl:flex">
        <Sidebar />
        <ChatList />
        <ChatWindow />
      </div>
    </div>
  );
};

export default Messages;
