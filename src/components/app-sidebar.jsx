import * as React from "react";
// import { GalleryVerticalEnd, HomeIcon } from "lucide-react";
import {
  HomeIcon,
  UsersIcon,
  FileTextIcon,
  LayoutPanelTop,
  CodeIcon,
  FolderIcon,
  ShieldAlertIcon,
  SettingsIcon,
  BarChartIcon,
  MegaphoneIcon,
  MessageCircleIcon,
  CalendarIcon,
  User,
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarRail,
} from "@/components/ui/sidebar";

// This is sample data.
const data = {
  navMain: [
    {
      title: "Dashboard",
      url: "/dashboard",
      icon: LayoutPanelTop,
    },
    {
      title: "Users",
      url: "/dashboard/users",
      icon: UsersIcon,
    },
    {
      title: "Posts",
      url: "/dashboard/allPost",
      icon: FileTextIcon,
    },
    {
      title: "Community",
      url: "#",
      icon: MessageCircleIcon,
      items: [
        {
          title: "Comments",
          url: "/dashboard/comments",
        },
        {
          title: "Reports",
          url: "/dashboard/reports",
        },
        {
          title: "Feedback",
          url: "/dashboard/feedback",
        },
      ],
    },
    {
      title: "Profile",
      url: "/dashboard/profile",
      icon: User,
    },
    {
      title: "Announcements",
      url: "/dashboard/announcements",
      icon: MegaphoneIcon,
    },
    {
      title: "Analytics",
      url: "/dashboard/analytics",
      icon: BarChartIcon,
    },
    {
      title: "Settings",
      url: "/dashboard/settings",
      icon: SettingsIcon,
    },
    {
      title: "Home",
      url: "/",
      icon: HomeIcon,
    },
  ],
};

export function AppSidebar({ ...props }) {
  return (
    <Sidebar {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <a href="#">
                <div className="flex justify-between gap-5 items-center  leading-none">
                  <h3 className="text-2xl font-semibold text-primary ">
                    Dev
                    <span className=" font-bold text-black">meet</span>
                  </h3>
                  <span className="text-sm">v1.0.0</span>
                </div>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarMenu>
            {data.navMain.map((item) => (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton asChild>
                  <a
                    href={item.url}
                    className="flex items-center gap-3 font-medium"
                  >
                    <item.icon className="w-4 h-4" />
                    {item.title}
                  </a>
                </SidebarMenuButton>
                {item.items?.length ? (
                  <SidebarMenuSub>
                    {item.items.map((item) => (
                      <SidebarMenuSubItem key={item.title}>
                        <SidebarMenuSubButton asChild isActive={item.isActive}>
                          <a href={item.url}>{item.title}</a>
                        </SidebarMenuSubButton>
                      </SidebarMenuSubItem>
                    ))}
                  </SidebarMenuSub>
                ) : null}
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}
