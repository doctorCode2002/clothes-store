import { useContext, useState } from "react";
import Container from "./Container";
import { AiFillInstagram } from "react-icons/ai";
import { IoIosCloseCircle } from "react-icons/io";

import {
  FaFacebook,
  FaYoutube,
  FaShoppingCart,
  FaUserAlt,
  FaHeart,
  FaSearch,
  FaBars,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContextProvider";

const socialLinks = [
  {
    id: 1,
    icon: <FaFacebook />,
    url: "https://www.facebook.com/",
  },
  {
    id: 2,
    icon: <AiFillInstagram />,
    url: "https://www.instagram.com/",
  },
  {
    id: 3,
    icon: <FaYoutube />,
    url: "https://www.youtube.com/",
  },
];

const navLinks = [
  {
    id: 1,
    text: "home",
    url: "/",
  },
  {
    id: 2,
    text: "shop",
    url: "/shop",
  },
  {
    id: 3,
    text: "about",
    url: "/about",
  },
  {
    id: 4,
    text: "contact",
    url: "/contact",
  },
];

const iconsPages = [
  {
    id: 1,
    icon: <FaSearch />,
    url: "/search",
  },
  {
    id: 2,
    icon: <FaHeart />,
    url: "/favorite",
  },
  {
    id: 3,
    icon: <FaUserAlt />,
    url: "/user",
  },
  {
    id: 4,
    icon: <FaShoppingCart />,
    url: "/cart",
  },
];

export default function Header() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const {cart} = useContext(CartContext);
  function handleClick() {
    setShowMobileMenu((prev) => !prev);
  }

  return (
    <header>
      {/* the top header (brown) */}
      <div className="bg-primary-500 ">
        <Container className="flex text-white items-center justify-between  h-10">
          <p className="grow text-center text-sm text-slate-200">
            inspired by streetwear clothes company
          </p>
          <div className="flex gap-2">
            {socialLinks.map((link) => (
              <a key={link.id} href={link.url} target="_blank">
                {link.icon}
              </a>
            ))}
          </div>
        </Container>
      </div>

      {/* the botton header (light-brown) */}
      <div className="bg-primary-50 ">
        <Container>
          <nav className="flex items-center justify-between h-16">
            <Link to="/">
              <p className="text-2xl capitalize cursor-pointer">supro</p>
            </Link>

            <button
              onClick={() => handleClick()}
              className="md:hidden flex flex-col gap-1 cursor-pointer hover:rotate-90 transition-transform duration-300"
            >
              {/* <FaBars />  */}
              <span className="h-1 w-6 bg-primary-400 inline-block rounded-sm "></span>
              <span className="h-1 w-6 bg-primary-400 inline-block rounded-sm "></span>
              <span className="h-1 w-6 bg-primary-400 inline-block rounded-sm "></span>
            </button>

            <ul className="hidden md:flex gap-8">
              {navLinks.map((link) => (
                // this is doen using the border
                <li
                  key={link.id}
                  className="capitalize border-b-2 border-transparent hover:text-primary-500 transition-colors duration-300 hover:border-b-primary-500"
                >
                  {/* 

                        this is done usign pseudon elements
                 <li
                   key={link.id}
                   className="relative z-2 capitalize hover:text-white border-2 border-transparent rounded-xl px-4 py-1  hover:border-primary-500 transition-colors duration-300 before:content-[''] before:absolute before:w-[90px] before:aspect-square before:rounded-full before:bg-primary-500/30 before:-top-20 before:-right-20 hover:before:top-0 hover:before:right-0  before:transition-all before:duration-300 overflow-hidden cursor-pointer before:-z-1 before:ease-linear hover:before:rounded-none"
                 >*/}
                  <Link to={link.url}>{link.text}</Link>
                </li>
              ))}
            </ul>
            <div className="hidden  md:flex gap-4">
              {iconsPages.map((icon) => (
                <Link
                  key={icon.id}
                  to={icon.url}
                  className="relative hover:text-primary-400 transition duration-300"
                >
                  {icon.id === 4 && (
                    <span className="absolute -top-2 -right-2 h-4 aspect-square rounded-full bg-red-500 flex items-center justify-center text-white text-xs">{cart.length}</span>
                  )}
                  {icon.icon}
                </Link>
              ))}
            </div>
          </nav>
        </Container>
      </div>

      {/* mobile menu  */}
      {showMobileMenu && (
        <div className="fixed md:hidden top-0 right-0 w-1/2 h-screen bg-primary-50 flex items-center justify-center text-center">
          <nav className="flex flex-col gap-4">
            <button
              onClick={() => setShowMobileMenu(false)}
              className="cursor-pointer text-center inline-block"
            >
              <span className="absolute top-4 left-4 inline-block text-5xl text-primary-400">
                <IoIosCloseCircle />
              </span>
            </button>
            {navLinks.map((link) => (
              <Link
                key={link.id}
                to={link.url}
                className="capitalize hover:text-primary-500 transition-colors duration-300 inline-block"
              >
                {link.text}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
