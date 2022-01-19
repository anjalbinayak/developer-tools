import React from "react";
import SideBar from "./SideBar";
import { Container, Menu } from "@chakra-ui/react";
const Layout = ({ children }) => {
  return (
    <>
      <Menu>Developer Tools</Menu>
      <SideBar pageWrapId="__main-container__" />
      <Container id="__main-container__">{children}</Container>
    </>
  );
};

export default Layout;
