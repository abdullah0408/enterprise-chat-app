import { ChatIcon, SignOutIcon } from "@phosphor-icons/react";

const Sidebar = () => {
  return (
    <div className="flex flex-col border-r p-2">
      {/* Header */}
      <div className="mx-auto rounded-md border p-2">
        <ChatIcon size={24} />
      </div>

      {/* Spacer */}
      <div className="flex-1" />

      {/* Footer */}
      <div className="mx-auto cursor-pointer rounded-md border p-2 transition-colors hover:bg-accent">
        <SignOutIcon size={24} />
      </div>
    </div>
  );
};

export default Sidebar;
