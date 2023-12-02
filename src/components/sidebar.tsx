import React from "react";
import { motion } from "framer-motion";
import { AboutIcon } from "./icons/about";
import { ContactIcon } from "./icons/contact";
export const Sidebar: React.FC<{ auth?: boolean }> = ({ auth }) => {
  return (
    <>
      <motion.aside
        className={`flex  gap-6 p-3 flex-col m-3 rounded-md overflow-hidden text-indigo-50 `}
      >
        <header className="flex gap-2 items-center w-full">
          <h1>Quize</h1>
        </header>
        <ul className="flex flex-col gap-4">
          <li className="flex gap-2 items-center hover:border-r-4 hover:rounded-sm hover:border-indigo-50 transition-all ease-in-out duration-150 cursor-pointer">
            <span>
              <AboutIcon />
            </span>
            <h5 className="text-indigo-50">About</h5>
          </li>
          <li className="flex gap-2 items-center hover:border-r-4 hover:rounded-sm hover:border-indigo-50 transition-all ease-in-out duration-150 cursor-pointer ">
            <span>
              <ContactIcon />
            </span>
            <h5 className="text-indigo-50">Contact</h5>
          </li>
        </ul>
      </motion.aside>
    </>
  );
};
