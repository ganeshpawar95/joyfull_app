import Header from "./custom/Header/Header";
import Footer from "./custom/Footer/Footer";
import React from "react";
import { Outlet } from "react-router-dom";
export default function BasicLayout() {
  return (
    <React.Fragment>
      <Header />
      <Outlet /> {/* This renders the child route */}
      <Footer />
    </React.Fragment>
  );
}
