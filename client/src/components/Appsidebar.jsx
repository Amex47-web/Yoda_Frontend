import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { Link } from "react-router-dom"

import { RiDashboard3Fill } from "react-icons/ri";
import { RiCalendarScheduleFill } from "react-icons/ri";
import { SiPagespeedinsights } from "react-icons/si";

import { TbMessageChatbotFilled } from "react-icons/tb";
import { IoSettingsSharp } from "react-icons/io5";

const Appsidebar = () => {
  return (
     <Sidebar>
      <SidebarHeader  /> 
      <SidebarContent >
        <SidebarGroup />
        <SidebarMenu>
            <SidebarMenuItem>
                <SidebarMenuButton>
                  <RiDashboard3Fill />
                    <Link to="">Dashboard</Link>
                </SidebarMenuButton>
            </SidebarMenuItem>

<SidebarMenuItem>
                <SidebarMenuButton>
                  <RiCalendarScheduleFill />

                    <Link to="">Schedule</Link>
                </SidebarMenuButton>
            </SidebarMenuItem>

            <SidebarMenuItem>
                <SidebarMenuButton>
                  <SiPagespeedinsights />
                    <Link to="">Weekly Insights</Link>
                </SidebarMenuButton>
            </SidebarMenuItem>

            <SidebarMenuItem>
                <SidebarMenuButton>
                  <TbMessageChatbotFilled />
                    <Link to="">Yoda Chatbot</Link>
                </SidebarMenuButton>
            </SidebarMenuItem>

            <SidebarMenuItem>
                <SidebarMenuButton>
                  <IoSettingsSharp />
                    <Link to="">Settings</Link>
                </SidebarMenuButton>
            </SidebarMenuItem>

            
        </SidebarMenu>
        <SidebarGroup />
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  )
}

export default Appsidebar