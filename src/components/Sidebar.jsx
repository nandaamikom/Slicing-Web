"use client";

import { Sidebar, SidebarItem, SidebarItemGroup, SidebarItems } from "flowbite-react";
import { HiDocumentReport, HiChartPie, HiInbox, HiTable, HiViewBoards, HiCog, HiCube } from "react-icons/hi";
import { FaDropbox } from "react-icons/fa";
import { Link } from "react-router-dom";


export default function SidebarComponent() {
  return (
    <Sidebar aria-label="Sidebar" >
      <SidebarItems className="mt-8">
        <SidebarItemGroup className="space-y-6">
          <SidebarItem as={Link} to="/" icon={HiChartPie}>
            Dashboard
          </SidebarItem>
          <SidebarItem as={Link} to="/users" icon={HiCube}>
            Manajamen Barang
          </SidebarItem>
          <SidebarItem as={Link} to="/users" icon={HiInbox}>
            Barang Masuk
          </SidebarItem>
          <SidebarItem as={Link} to="/users" icon={FaDropbox}>
            Barang Keluar 
          </SidebarItem>
          <SidebarItem as={Link} to="/users" icon={HiDocumentReport}>
            Laporan
          </SidebarItem>
          <SidebarItem as={Link} to="/users" icon={HiCog}>
            Pengaturan
          </SidebarItem> 
        </SidebarItemGroup>
      </SidebarItems>
    </Sidebar>
  );
}