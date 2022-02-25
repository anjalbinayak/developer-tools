import { bubble as Menu } from "react-burger-menu";
import React from "react";
import Link from "next/link";
import { FaFileImage, FaHome, FaTools } from "react-icons/fa";
const SideBar = ({ pageWrapId }) => {
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
        <div className="p-1 menu-item-box">
          <Link href="/">
            <a id="home" className="menu-item">
              <FaHome className="inline mb-1" /> <span>Home</span>
            </a>
          </Link>
        </div>
        <div className="p-1 menu-item-box">
          <Link href="/tools">
            <a id="tools" className="menu-item">
              <FaTools className="inline mb-1" /> <span>Tools</span>
            </a>
          </Link>
        </div>
      </div>
    </Menu>
  );
};

export default SideBar;
