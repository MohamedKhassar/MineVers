import { FaTelegramPlane } from "react-icons/fa";
import { HashLink } from "react-router-hash-link";
import logo from "/assets/imgs/logo.png";
import { footerContent } from "../data";
import { Link } from "react-router-dom";
import { FaXTwitter } from "react-icons/fa6";

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
                                <HashLink key={idx} to={link.path} className="text-sm text-gray-400 hover:text-white transition">
                                    {link.title}
                                </HashLink>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            {/* Social + Copyright */}
            <div className="w-full mt-10 flex flex-col items-center gap-4">
                <div className="flex gap-4 text-white text-lg">
                    <Link target="_blank" to="https://x.com/MINEVERS01?t=YbhDZb3CcX9esRxm43Ss-A&s=09" className="hover:text-black"><FaXTwitter /></Link>
                    <Link target="_blank" to="https://t.me/+EEhbAjvm0KxjMTBk" className="hover:text-sky-500"><FaTelegramPlane /></Link>
                </div>
                <p className="text-[12px] text-gray-400">© 2025 MineVers. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
