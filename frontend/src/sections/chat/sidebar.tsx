import { ChatIcon, SignOutIcon } from "@phosphor-icons/react";

const Sidebar = () => {
  return (
    <div className="flex flex-col border-r p-2">
      <div className="mx-auto border p-2 rounded-md">
        <ChatIcon size={24} />
      </div>
      <div className="flex flex-col grow"></div>
      <div className="flex">
        <div className="mx-auto border p-2 rounded-md hover:bg-accent cursor-pointer">
          <SignOutIcon size={24} />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
