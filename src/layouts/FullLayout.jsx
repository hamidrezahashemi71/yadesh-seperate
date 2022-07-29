import NavbarComp from "../components/_general/Navbar";
import {Outlet} from "react-router-dom";
import FooterComp from "../components/_general/Footer";

const FullLayout = () => {
  return (
    <>
      <NavbarComp />
      <Outlet />
      <FooterComp />
    </>
  );
};

export default FullLayout;
