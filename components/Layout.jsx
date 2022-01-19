import React from "react";
import SideBar from "./SideBar";
import { Container, Flex, Heading } from "@chakra-ui/react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaTools } from "react-icons/fa";

const Layout = ({ children }) => {
  return (
    <>
      <SideBar pageWrapId="__main-container__" />
      <Flex
        as="nav"
        align="center"
        justify="center"
        wrap="wrap"
        padding={6}
        bg="gray.500"
        color="white"
      >
        <Flex align="center" mr={5}>
          <Heading as="h1" size="lg" letterSpacing={"tighter"}>
            <FaTools className="inlline" />
          </Heading>
        </Flex>
      </Flex>
      <Container maxW="container.xl" id="__main-container__">
        {children}
        <ToastContainer />
        <footer className="fixed bottom-0 left-0 p-3 text-center w-full">
          <p className="">Made by Anjal Binayak with ❤</p>
        </footer>
      </Container>
    </>
  );
};

export default Layout;
