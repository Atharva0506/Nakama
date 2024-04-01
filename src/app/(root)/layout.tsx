import Sidebar from "@/components/sidebar";
import Navbar from "@/components/navbar";
import React, { ReactNode } from "react";

function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="h-full">
        <Navbar/>
        <div className="hidden md:flex w-20 mt-16 flex-col fixed inset-y-0">
          <Sidebar/>
        </div>
      <main className="pl-20 pt-16 -full">{children}</main>
    </div>
  );
}

export default Layout;
