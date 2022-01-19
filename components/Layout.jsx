import React from "react";
import SideBar from "./SideBar";
import { Container } from "@chakra-ui/react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Layout = ({ children }) => {
  return (
    <>
      <div className="h-12">Developer Tools</div>
      <SideBar pageWrapId="__main-container__" />
      <Container id="__main-container__">
        {children}
        <ToastContainer />
      </Container>
    </>
  );
};

export default Layout;
