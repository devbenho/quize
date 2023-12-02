import React from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { motion } from "framer-motion";
import { AboutIcon } from "./icons/about";
import { ContactIcon } from "./icons/contact";
export const Sidebar: React.FC<{ auth?: boolean }> = ({ auth }) => {
  const [collapsed, setCollapsed] = React.useState(true);
  auth ? (auth = true) : (auth = false);
  const sidebarVariants = {
    collapsed: {
      width: "44px",
      transition: {
        duration: 0.4,
      },
    },
    expanded: {
      width: "100%",
      transition: {
        duration: 0.4,
      },
    },
  };
  return (
    <>
      <motion.aside
        className={`flex bg-[#9b97e9] gap-6 p-3 flex-col m-3 rounded-md overflow-hidden text-indigo-50 `}
        initial={false}
        animate={collapsed ? "collapsed" : "expanded"}
        variants={sidebarVariants}
      >
        <header className="flex gap-2 items-center w-full">
          <a onClick={() => setCollapsed(!collapsed)}>
            <RxHamburgerMenu />
          </a>
          {!collapsed && <h4>Quizie</h4>}
        </header>
        <ul className="flex flex-col gap-4">
          <li className="flex gap-2 items-center">
            <span>
              <AboutIcon />
            </span>
            <li className="text-indigo-50">About</li>
          </li>
          <li className="flex gap-2 items-center">
            <span>
              <ContactIcon />
            </span>
            <li className="text-indigo-50">Contact</li>
          </li>
        </ul>
      </motion.aside>
    </>
  );
};
