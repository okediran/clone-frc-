import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen overflow-hidden relative">
      <Navbar />
       <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
}
