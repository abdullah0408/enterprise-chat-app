import { MagnifyingGlassIcon } from "@phosphor-icons/react";

const avatars = Array.from({ length: 16 }, (_, i) => ({
  id: i,
  src: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=400&auto=format&fit=crop",
}));

const ChatList = () => {
  return (
    <div className="hidden h-full flex-col border-r xl:flex xl:w-1/4">
      {/* Header */}
      <div className="flex shrink-0 items-center justify-between border-b px-6 py-6">
        <div className="flex h-10 items-center">
          <h3 className="text-lg font-medium 2xl:text-xl">
            Active Conversations
          </h3>
          <span className="mx-2 flex h-6 w-6 items-center justify-center rounded-full bg-accent text-sm font-medium">
            8
          </span>
        </div>
      </div>

      {/* Search */}
      <div className="shrink-0 p-5">
        <div className="relative">
          <input
            type="text"
            placeholder="Search..."
            className="w-full rounded border bg-accent py-2 pl-5 pr-10 text-sm outline-none transition-colors focus:border-primary"
          />
          <button
            type="button"
            className="absolute right-4 top-1/2 -translate-y-1/2"
          >
            <MagnifyingGlassIcon size={16} className="text-muted-foreground" />
          </button>
        </div>
      </div>

      {/* Chat List */}
      <div className="flex-1 min-h-0 overflow-y-auto px-2 pb-2 no-scrollbar">
        <div className="flex flex-col gap-1">
          {avatars.map((avatar) => (
            <div
              key={avatar.id}
              className="group flex cursor-pointer items-center gap-3 rounded px-3 py-2 transition-colors hover:bg-accent"
            >
              <div className="relative h-11 w-11 shrink-0">
                <img
                  src={avatar.src}
                  alt="User avatar"
                  className="h-full w-full rounded-full object-cover"
                />
                <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full bg-green-600 ring-2 ring-background transition-colors group-hover:ring-accent" />
              </div>

              <div className="min-w-0 flex-1">
                <h5 className="truncate text-sm font-medium">
                  Hello World {avatar.id}
                </h5>
                <p className="truncate text-xs text-muted-foreground">
                  Hello there, how are you doing? Hello there, how are you
                  doing?
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChatList;
