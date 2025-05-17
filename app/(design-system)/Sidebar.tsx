"use client";

import { cn } from "@/lib/utils";
import { SidebarItem } from "@/types/sidebarItem";
import Link from "next/link";
import { useState } from "react";
import { LuBookA, LuTvMinimal } from "react-icons/lu";

const sidebarItems: SidebarItem[] = [
  { label: "Typography", icon: <LuBookA />, href: "/typography" },
  { label: "Button", icon: <LuTvMinimal />, href: "/button" },
];

const Sidebar = () => {
  const [isOpen] = useState(true);

  return (
    <div
      className={cn(
        isOpen ? "w-40" : "w-16",
        "sticky top-0 h-screen flex flex-col items-center pt-8  bg-primary transition-width duration-300 w-16 sm:w-40 "
      )}
    >
      {sidebarItems.map((item) => (
        <Link
          key={item.label}
          href={item.href}
          className={cn(
            "flex items-center gap-2 w-full p-3 hover:bg-primary-700 text-white justify-center sm:justify-normal transition-colors"
          )}
        >
          <span className="">{item.icon}</span>
          {isOpen && <span className="hidden sm:block">{item.label}</span>}
        </Link>
      ))}
    </div>
  );
};

export default Sidebar;
