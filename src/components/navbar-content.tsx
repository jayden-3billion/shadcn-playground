import {
  SidebarContent,
  SidebarGroup,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@radix-ui/react-collapsible";
import { ChevronDown } from "lucide-react";
import { Link } from "react-router";

type SidebarItem = {
  title: string;
  items: {
    title: string;
    url: string;
  }[];
};

const sidebarItems: SidebarItem[] = [
  {
    title: "Dashboard",
    items: [
      {
        title: "Overview",
        url: "/dashboard/overview",
      },
    ],
  },
  {
    title: "DNA",
    items: [
      {
        title: "DNA Reception",
        url: "/dna/reception",
      },
      {
        title: "DNA Job",
        url: "/dna/job",
      },
    ],
  },
];

export function NavbarContent() {
  return (
    <SidebarContent>
      <SidebarGroup>
        <SidebarMenu>
          {sidebarItems.map((item) => (
            <Collapsible key={item.title} className="group/collapsible">
              <SidebarMenuItem>
                <CollapsibleTrigger asChild>
                  <SidebarMenuButton>
                    {item.title}
                    <ChevronDown className="ml-auto group-data-[state=open]/collapsible:-rotate-180 transition-transform duration-200" />
                  </SidebarMenuButton>
                </CollapsibleTrigger>
                {item.items?.length ? (
                  <CollapsibleContent>
                    <SidebarMenuSub>
                      {item.items.map((item) => (
                        <SidebarMenuSubItem key={item.title}>
                          <SidebarMenuSubButton asChild>
                            <Link to={item.url}>{item.title}</Link>
                          </SidebarMenuSubButton>
                        </SidebarMenuSubItem>
                      ))}
                    </SidebarMenuSub>
                  </CollapsibleContent>
                ) : null}
              </SidebarMenuItem>
            </Collapsible>
          ))}
        </SidebarMenu>
      </SidebarGroup>
    </SidebarContent>
  );
}
