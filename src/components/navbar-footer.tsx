import { CircleUser, EllipsisVertical } from "lucide-react";
import { SidebarFooter } from "./ui/sidebar";

export function NavbarFooter() {
  return (
    <SidebarFooter className="h-[60px] p-3 flex flex-row items-center justify-between">
      <div className="h-full flex flex-row items-center gap-x-1.5">
        <CircleUser className="size-5" />
        <span>John Doe</span>
      </div>
      <EllipsisVertical className="size-[14.75px]" />
    </SidebarFooter>
  );
}
