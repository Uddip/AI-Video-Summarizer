import React from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "./ui/sidebar";
import { ClipboardClock, Cog, Home, NotebookText } from "lucide-react";

const NavItems = [
  { icon: Home, label: "Home", href: "#" },
  { icon: ClipboardClock, label: "History", href: "#" },
  { icon: NotebookText, label: "Text Summarizer", href: "#" },
  { icon: Cog, label: "About", href: "#" },
];

function AppSidebar() {
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {NavItems.map((item) => (
                <SidebarMenuItem key={item.label}>
                  <SidebarMenuButton asChild>
                    <a href={item.href}>
                      <item.icon />
                      <span>{item.label}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}

{
  /* <div
      className={`bg-gray-800 text-white transition-all duration-300 ease-in-out 
        ${
          // sidebarVisible ?
          "w-64"
          //  :
          // "w-0 overflow-hidden"
        }`}
    >
      <div className="p-4 flex justify-between items-center border-b border-gray-700">
        {
          // sidebarVisible &&
          <h2 className="text-xl font-bold">Menu</h2>
        }
        <button
          // onClick={toggleSidebar}
          className="p-2 rounded-full hover:bg-gray-700 transition-colors text-xl"
          aria-label="Close sidebar"
        >
          ❌
        </button>
      </div>

      <nav className="p-4">
        <ul className="space-y-2">
          <li>
            <a
              href="#"
              className="flex items-center p-3 rounded hover:bg-gray-700 transition-colors"
            >
              🏠{" "}
              {
                // sidebarVisible &&
                <span className="ml-3">Home</span>
              }
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center p-3 rounded hover:bg-gray-700 transition-colors"
            >
              📜{" "}
              {
                // sidebarVisible &&
                <span className="ml-3">History</span>
              }
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center p-3 rounded hover:bg-gray-700 transition-colors"
            >
              📜{" "}
              {
                // sidebarVisible &&
                <span className="ml-3">Text Summarizer</span>
              }
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center p-3 rounded hover:bg-gray-700 transition-colors"
            >
              ⚙️{" "}
              {
                // sidebarVisible &&
                <span className="ml-3">About</span>
              }
            </a>
          </li>
        </ul>
      </nav>
    </div> */
}

export default AppSidebar;
