
import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = () => {
  const location = useLocation();
  const isUseCaseDiagram = location.pathname === "/use-case-diagram";

  return (
    <div className="min-h-screen flex flex-col">
      {!isUseCaseDiagram && <Navbar />}
      <main className="flex-grow">
        <Outlet />
      </main>
      {!isUseCaseDiagram && <Footer />}
    </div>
  );
};

export default Layout;
