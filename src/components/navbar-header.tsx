import { SidebarHeader } from "@/components/ui/sidebar";
import limsLogo from "@/assets/lims-logo.svg";

export function NavbarHeader() {
  return (
    <SidebarHeader className="flex flex-row items-center gap-x-[5px]">
      <img src={limsLogo} alt="LIMS Logo" className="size-[22px]" />
      <h1 className="text-[28px] font-bold">LIMS</h1>
    </SidebarHeader>
  );
}
