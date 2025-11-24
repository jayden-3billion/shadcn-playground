import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
} from "@/components/ui/sidebar";
import { AppSidebarNavigator } from "./app-sidebar-navigator";

export function AppSidebar() {
  return (
    <Sidebar collapsible="icon">
      <SidebarHeader />
      <SidebarContent>
        <AppSidebarNavigator />
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  );
}
