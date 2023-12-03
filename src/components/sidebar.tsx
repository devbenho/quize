import React from 'react';
import { motion } from 'framer-motion';
import { AboutIcon } from './icons/about';

import { ContactIcon } from './icons/contact';
import { ProfileIcon } from './icons/profile';
import { TakeQuizIcon } from './icons/take-quiz';
import { ViewQuizIcon } from './icons/view-quiz';

export interface linkItem {
  title: string;
  url: string;
  icon: React.ReactNode;
}

const links: linkItem[] = [
  // { title: 'Home', url: '/', icon: <AboutIcon /> },
  { title: 'Student Home', url: '/student/home', icon: <AboutIcon /> },
  // { title: 'Quiz', url: '/quiz', icon: <AboutIcon /> },
  { title: 'Quiz Question', url: '/quiz-question', icon: <AboutIcon /> },
  { title: 'Quiz Result', url: '/quiz-result', icon: <AboutIcon /> },
  { title: 'Quiz View', url: '/quiz-view', icon: <AboutIcon /> },

  { title: '', url: '', icon: <></> },
  { title: '', url: '', icon: <></> },

  { title: 'Teacher Home', url: '/teacher/home', icon: <AboutIcon /> },
  { title: 'Create Quiz', url: '/teacher/create-quiz', icon: <AboutIcon /> },

  { title: '', url: '', icon: <></> },
  { title: '', url: '', icon: <></> },

  { title: 'Profile', url: '/profile', icon: <AboutIcon /> },

  { title: '', url: '', icon: <></> },
  { title: '', url: '', icon: <></> },

  { title: 'Login', url: '/login', icon: <AboutIcon /> },
  { title: 'Register', url: '/register', icon: <AboutIcon /> },
  { title: 'Contact', url: '/contact', icon: <ContactIcon /> },
  { title: 'About', url: '/about', icon: <AboutIcon /> },
];

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
          {links.map((link, index) => (
            <li className="flex  gap-5 items-center hover:border-r-4 hover:rounded-sm hover:border-indigo-50 transition-all ease-in-out duration-150 cursor-pointer">
              <a href={link.url}>
                <h5 className="text-indigo-50 flex d-flex gap-2">
                  <span className="">{link.icon}</span>
                  {link.title}
                </h5>
              </a>
            </li>
          ))}
        </ul>
      </motion.aside>
    </>
  );
};
