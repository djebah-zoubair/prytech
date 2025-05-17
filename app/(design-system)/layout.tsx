// app/design-system/layout.tsx
import React from "react";
import Sidebar from "./Sidebar";

export default function DesignSystemLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar incluse uniquement dans ce layout */}
      <Sidebar />
      <main className="flex-1 p-8 bg-gray-50">{children}</main>
    </div>
  );
}
