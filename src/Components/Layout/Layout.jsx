import NavBar from "./NavBar/NavBar";
import { Footer } from "./Footer/Footer";
import { Outlet } from "react-router-dom";
import "./Layout.css"

export const Layout = () => {
  return (
    <div className="layout">
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
};
