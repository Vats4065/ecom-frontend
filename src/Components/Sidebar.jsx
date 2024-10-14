import React from "react";
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from "cdbreact";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div
      style={{ display: "flex", height: "100vh", overflow: "scroll initial" }}
    >
      <CDBSidebar textColor="#fff" backgroundColor="#333">
        <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
          <a
            href="/"
            className="text-decoration-none"
            style={{ color: "inherit" }}
          >
            Sidebar
          </a>
        </CDBSidebarHeader>

        <CDBSidebarContent className="sidebar-content">
          <CDBSidebarMenu>
            <NavLink
              exact
              to="/partner-dashboard/"
              activeClassName="activeClicked"
            >
              <CDBSidebarMenuItem>Home</CDBSidebarMenuItem>
            </NavLink>
            <NavLink
              exact
              to="/partner-dashboard/product&service"
              activeClassName="activeClicked"
            >
              <CDBSidebarMenuItem>Product & Services</CDBSidebarMenuItem>
            </NavLink>
            <NavLink
              exact
              to="/partner-dashboard/promotion"
              activeClassName="activeClicked"
            >
              <CDBSidebarMenuItem>Promotions</CDBSidebarMenuItem>
            </NavLink>
            <NavLink
              exact
              to="/partner-dashboard/booking"
              activeClassName="activeClicked"
            >
              <CDBSidebarMenuItem>Booking</CDBSidebarMenuItem>
            </NavLink>
            <NavLink
              exact
              to="/partner-dashboard/pricing"
              activeClassName="activeClicked"
            >
              <CDBSidebarMenuItem>Pricing</CDBSidebarMenuItem>
            </NavLink>
            <NavLink
              exact
              to="/partner-dashboard/statistic"
              activeClassName="activeClicked"
            >
              <CDBSidebarMenuItem>Statistics</CDBSidebarMenuItem>
            </NavLink>
            <NavLink
              exact
              to="/partner-dashboard/setting"
              activeClassName="activeClicked"
            >
              <CDBSidebarMenuItem>Settings</CDBSidebarMenuItem>
            </NavLink>
          </CDBSidebarMenu>
        </CDBSidebarContent>
      </CDBSidebar>
    </div>
  );
};

export default Sidebar;
