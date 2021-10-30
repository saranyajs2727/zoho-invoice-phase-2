import NavBar from "../HomeItems/Navbar";
import Logo from "../HomeItems/Logo";
import Router from "next/router";
import { useEffect, useState } from "react";
const Layout = ({ children }) => {
  const pathNames = ["/", "/sign-in", "/sign-up", "/organizationsetup"];
  const [showNavbar, setShowNavbar] = useState(true);

  useEffect(() => {
    if (pathNames.includes(Router.pathname)) {
      setShowNavbar(false);
    }
  }, []);

  return (
    <>
      {showNavbar && <Logo />}
      {children}
      {showNavbar && <NavBar />}
    </>
  );
};
export default Layout;
