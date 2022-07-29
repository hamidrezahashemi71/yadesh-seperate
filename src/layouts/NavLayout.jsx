import NavbarComp from "../components/_general/Navbar";
import {Outlet} from "react-router-dom";

const NavLayout = () => {
  return (
    <>
      <NavbarComp />
      <Outlet />
    </>
  );
};

export default NavLayout;
