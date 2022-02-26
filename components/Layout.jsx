import React from "react";
import { Container } from "@chakra-ui/react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Nav from "./Header";

const Layout = ({ children }) => {
  return (
    <>
      <Nav />

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
