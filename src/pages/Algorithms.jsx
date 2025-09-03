import React from "react";
import { NavLink, Outlet } from "react-router-dom";

function Algorithms() {
  const tabClass = ({ isActive }) =>
    `px-4 py-2 rounded-md transition-colors duration-150 ${
      isActive
        ? "bg-primary text-primary-foreground"
        : "bg-muted text-foreground hover:bg-muted/80"
    }`;

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="w-full space-y-6">
        <div className="flex justify-center gap-3">
          <NavLink to="kmp" className={tabClass}>
            KMP
          </NavLink>
          <NavLink to="rabin-karp" className={tabClass}>
            Rabin-Karp
          </NavLink>
          <NavLink to="z-algorithm" className={tabClass}>
            Z-Algorithm
          </NavLink>
        </div>
        <Outlet />
      </div>
    </div>
  );
}

export default Algorithms;
