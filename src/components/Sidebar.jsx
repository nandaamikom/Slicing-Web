
"use client";

import { Sidebar, SidebarItem, SidebarItemGroup, SidebarItems } from "flowbite-react";
import { HiArrowSmRight, HiChartPie, HiInbox, HiShoppingBag, HiTable, HiUser, HiViewBoards } from "react-icons/hi";
import { Link } from "react-router-dom";

export default function SidebarComponent() {
  return (
    <Sidebar aria-label="Sidebar">
      <SidebarItems className="mt-6">
        <SidebarItemGroup className="space-y-3">
          <SidebarItem as={Link} to="/" icon={HiChartPie}>
            Dashboard
          </SidebarItem>
          <SidebarItem as={Link} to="/users" icon={HiUser}>
            Users
          </SidebarItem>
          <SidebarItem as={Link} to="/users" icon={HiViewBoards}>
            Kanban
          </SidebarItem>
          <SidebarItem as={Link} to="/users" icon={HiInbox}>
            Inbox
          </SidebarItem>
          
        </SidebarItemGroup>
      </SidebarItems>
    </Sidebar>
  );
}
