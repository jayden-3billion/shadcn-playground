import {
  Sidebar,
  SidebarRail,
  SidebarSeparator,
} from "@/components/ui/sidebar";
import { NavbarContent } from "./navbar-content";
import { NavbarHeader } from "./navbar-header";
import { NavbarFooter } from "./navbar-footer";

export function Navbar() {
  return (
    <Sidebar>
      <NavbarHeader />
      <SidebarSeparator className="m-0" />
      <NavbarContent />
      <SidebarSeparator className="m-0" />
      <NavbarFooter />
      <SidebarRail />
    </Sidebar>
  );
}
