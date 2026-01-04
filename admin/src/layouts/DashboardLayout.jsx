import React from "react";
import { Outlet } from "react-router";

function DashboardLayout() {
  return (
    <div>
      <h1>Sidebar</h1>
      <h2>Navbar</h2>
      <Outlet />
    </div>
  );
}

export default DashboardLayout;
