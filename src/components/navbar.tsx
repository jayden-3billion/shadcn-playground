import { Sidebar, SidebarFooter } from "@/components/ui/sidebar";
import { NavbarContent } from "./navbar-content";
import { NavbarHeader } from "./navbar-header";

export function Navbar() {
  return (
    <Sidebar>
      <NavbarHeader />
      <NavbarContent />
      <SidebarFooter />
    </Sidebar>
  );
}
