import Container from "./Container";
import { AiFillInstagram } from "react-icons/ai";
import {
  FaFacebook,
  FaYoutube,
  FaShoppingCart,
  FaUserAlt,
  FaHeart,
  FaSearch,
} from "react-icons/fa";
import { Link } from "react-router-dom";

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
            <ul className="flex gap-8">
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
            <div className="flex gap-4">
              {iconsPages.map((icon) => (
                <Link
                  key={icon.id}
                  to={icon.url}
                  className="hover:text-primary-400 transition duration-300"
                >
                  {icon.icon}
                </Link>
              ))}
            </div>
          </nav>
        </Container>
      </div>
    </header>
  );
}
