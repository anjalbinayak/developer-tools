import { slide as Menu } from "react-burger-menu";

import React from "react";
import Link from "next/link";

const SideBar = ({ pageWrapId }) => {
  const showSettings = (e) => {
    e.preventDefault();
  };

  const styles = {
    bmBurgerButton: {
      position: "fixed",
      width: "36px",
      height: "30px",
      left: "36px",
      top: "36px",
    },
    bmBurgerBars: {
      background: "#373a47",
    },
    bmBurgerBarsHover: {
      background: "#a90000",
    },
    bmCrossButton: {
      height: "24px",
      width: "24px",
    },
    bmCross: {
      background: "#bdc3c7",
    },
    bmMenuWrap: {
      position: "fixed",
      height: "100%",
    },
    bmMenu: {
      background: "#373a47",
      padding: "2.5em 1.5em 0",
      fontSize: "1.15em",
    },
    bmMorphShape: {
      fill: "#373a47",
    },
    bmItemList: {
      color: "#b8b7ad",
      padding: "0.8em",
    },
    bmItem: {
      display: "inline-block",
    },
    bmOverlay: {
      background: "rgba(0, 0, 0, 0.3)",
    },
  };

  return (
    <Menu styles={styles} pageWrapId={`${pageWrapId}`}>
      <div className="flex flex-col">
        <div>
          <Link href="/">
            <a id="home" className="menu-item">
              Home
            </a>
          </Link>
        </div>
        <div>
          <Link href="/tools">
            <a id="tools" className="menu-item">
              Tools
            </a>
          </Link>
        </div>
        <div>
          <Link href="/tools/image">
            <a id="image" className="menu-item">
              Image Converter
            </a>
          </Link>
        </div>
      </div>
    </Menu>
  );
};

export default SideBar;
