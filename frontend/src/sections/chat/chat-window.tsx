import {
  DotsThreeIcon,
  LinkSimpleIcon,
  PaperPlaneTiltIcon,
} from "@phosphor-icons/react";
import { SmileIcon } from "lucide-react";

const ChatWindow = () => {
  return (
    <div className="flex h-full flex-1 flex-col">
      {/* Header */}
      <div className="sticky top-0 flex items-center justify-between border-b px-6 py-6">
        <div className="flex items-center gap-4">
          <div className="h-10 w-10 overflow-hidden rounded-full">
            <img
              className="h-full w-full object-cover object-center"
              src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=400&auto=format&fit=crop"
              alt="Avatar"
            />
          </div>
          <div>
            <h5 className="font-medium">Hello World</h5>
            <p className="max-w-48 truncate text-xs text-muted-foreground">
              Hello there, how are you doing?
            </p>
          </div>
        </div>
        <button className="cursor-pointer transition-colors hover:text-primary">
          <DotsThreeIcon size={24} />
        </button>
      </div>

      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto px-6 py-6">
        {/* Messages will go here */}
      </div>

      {/* Input Area */}
      <div className="sticky bottom-0 border-t px-4 py-2">
        <form className="flex items-center gap-4">
          <div className="relative flex-1">
            <input
              type="text"
              placeholder="Type a message..."
              className="h-12 w-full rounded-md border bg-accent pl-5 pr-16 text-sm outline-none transition-colors focus:border-primary"
            />
            <div className="absolute right-3 top-1/2 flex -translate-y-1/2 items-center gap-2">
              <button
                type="button"
                className="cursor-pointer rounded p-1 transition-colors hover:bg-accent/50"
              >
                <LinkSimpleIcon
                  size={18}
                  className="text-muted-foreground transition-colors hover:text-foreground"
                />
              </button>
              <button
                type="button"
                className="cursor-pointer rounded p-1 transition-colors hover:bg-accent/50"
              >
                <SmileIcon
                  size={18}
                  className="text-muted-foreground transition-colors hover:text-foreground"
                />
              </button>
            </div>
          </div>

          <button
            type="submit"
            className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-md bg-primary text-primary-foreground transition-colors hover:bg-primary/80"
          >
            <PaperPlaneTiltIcon size={20} />
          </button>
        </form>
      </div>
    </div>
  );
};

export default ChatWindow;
