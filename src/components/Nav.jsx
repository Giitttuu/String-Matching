import React from "react";
import { NavLink } from "react-router-dom";

function Nav() {
  const linkClass = ({ isActive }) =>
    `px-4 py-2 rounded-md transition-all duration-200 transform outline-none
     text-lg md:text-xl font-semibold tracking-wide font-serif
     hover:text-primary hover:scale-105
     ${isActive ? "text-primary font-semibold" : "text-foreground"}`;

  return (
    <nav className="w-full sticky top-0 z-50 bg-background/90 backdrop-blur-lg supports-[backdrop-filter]:bg-background/80">
      <div className="w-full px-6 h-16 flex items-center justify-center">
        {/* Navigation Links */}
        <div className="flex items-center gap-4">
          <NavLink to="/" className={linkClass} end>
            Home
          </NavLink>
          <NavLink to="/visualiser" className={linkClass}>
            Visualiser
          </NavLink>
          <NavLink to="/algorithms" className={linkClass}>
            Algorithms
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
