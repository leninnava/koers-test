import { Box } from "@chakra-ui/react";
import { Children } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = () => {
  return (
    <>
      <Navbar />
      {Children}
      <Footer />
    </>
  );
};

export default Layout;
