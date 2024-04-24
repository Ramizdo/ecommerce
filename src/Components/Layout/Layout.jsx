import NavBar from "./NavBar/NavBar";
import { Footer } from "./Footer/Footer";
import { Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <div>
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
};
