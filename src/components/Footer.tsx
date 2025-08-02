import { FaFacebookF, FaTwitter, FaDiscord, FaTelegramPlane } from "react-icons/fa";
import { SiSolana } from "react-icons/si";
import { HashLink } from "react-router-hash-link";
import logo from "/assets/imgs/logo.png";
import { footerContent } from "../data";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="w-full flex flex-col items-center justify-center bg-slate-900 p-12">
      <div className="w-full flex md:flex-row flex-col md:px-0 px-5 items-start justify-between md:gap-[90px] gap-10 max-w-7xl">

        {/* Logo + Brand */}
        <HashLink draggable={false} to="/#" className="flex items-center gap-4 justify-start">
          <img
            draggable={false}
            src={logo}
            alt="MineVers Logo"
            className="md:w-13 w-10 object-cover"
            loading="lazy"
          />
          <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-[#0092ff] via-[#7447ff] via-10% to-[#0029a5] md:text-2xl font-semibold">
            MineVers
          </h1>
        </HashLink>

        {/* Footer Links */}
        {footerContent.map((item, index) => (
          <div className="flex flex-col gap-6" key={index}>
            <span className="text-light text-[20px]">{item.title}</span>
            <div className="flex flex-col gap-4">
              {item.links.map((link, idx) => (
                <a key={idx} href={link.path} className="text-sm text-gray-400 hover:text-white transition">
                  {link.title}
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Social + Copyright */}
      <div className="w-full mt-10 flex flex-col items-center gap-4">
        <div className="flex gap-4 text-white text-lg">
          <Link to="#" className="hover:text-blue-500"><FaTwitter /></Link>
          <Link to="#" className="hover:text-blue-600"><FaFacebookF /></Link>
          <Link to="#" className="hover:text-indigo-500"><FaDiscord /></Link>
          <Link to="#" className="hover:text-sky-500"><FaTelegramPlane /></Link>
          <Link to="#" className="hover:text-purple-600"><SiSolana /></Link>
        </div>
        <p className="text-[12px] text-gray-400">© 2025 MineVers. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
