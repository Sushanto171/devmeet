import { AppSidebar } from "@/components/app-sidebar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import Link from "next/link";
// import "quill/dist/quill.snow.css";

const layout = ({ children }) => {
  return (
    <>
      <SidebarProvider>
        <AppSidebar />
        <SidebarInset>
          <header className="flex justify-between h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12 border border-b bg-gray-50">
            <div className="flex items-center gap-2 px-4">
              <SidebarTrigger className="-ml-1" />
            </div>

            <div className="flex items-center gap-3">
              <Link href="/dashboard/profile">
                <img
                  className="w-12 h-12 rounded-full border"
                  src={"https://i.ibb.co.com/JWDd73K0/image.png"}
                  alt="profile"
                />
              </Link>
              <div>
                <p className="text-md mr-5">{"Admin Hossen"}</p>
                <p className="text-sm mr-5">Admin</p>
              </div>
            </div>
          </header>
          {/* <div className="flex flex-1 flex-col gap-4 p-4">
              <div className="grid auto-rows-min gap-4 md:grid-cols-3">
                <div className="bg-muted/50 aspect-video rounded-xl" />
                <div className="bg-muted/50 aspect-video rounded-xl" />
                <div className="bg-muted/50 aspect-video rounded-xl" />
              </div>
              <div className="bg-muted/50 min-h-[100vh] flex-1 rounded-xl md:min-h-min" />
            </div> */}
          <main className="bg-gray-100 w-full h-full ">{children}</main>
        </SidebarInset>
      </SidebarProvider>
    </>
  );
};

export default layout;
