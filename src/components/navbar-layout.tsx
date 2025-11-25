import { Outlet } from "react-router";
import { SidebarProvider, SidebarTrigger } from "./ui/sidebar";
import { Navbar } from "./navbar";

export function NavbarLayout() {
  return (
    <SidebarProvider>
      <Navbar />
      <main>
        <SidebarTrigger />
        <Outlet />
      </main>
    </SidebarProvider>
  );
}
