import {
  FaMicrochip,
  FaWallet,
  FaUsers,
  FaGlobe,
  FaBolt,
} from "react-icons/fa";
export const navItems = [
  { title: "Home", path: "/#home" },
  { title: "About", path: "/#about" },
  {
    title: "Ecosystem",
    dropdown: [
      { title: "Token", path: "/#token" },
      { title: "Staking", path: "/#staking" },
      { title: "Governance", path: "/#governance" },
    ],
  },
  { title: "Roadmap", path: "/#roadmap" },
  {
    title: "Resources",
    dropdown: [
      { title: "FAQ", path: "/#faq" },
      { title: "WhitePaper", path: "whitepaper" },
    ],
  },
];

export const features = [
  {
    title: "Tokenized Mining",
    description:
      "Convert physical mining rigs into income-generating digital assets via ERC-1155 tokens.",
    Icon: FaMicrochip,
    delay: 0.1,
  },
  {
    title: "Passive Income",
    description:
      "Earn mining rewards without owning hardware or managing technical infrastructure.",
    Icon: FaWallet,
    delay: 0.2,
  },
  {
    title: "Community-Powered",
    description:
      "MVT holders vote on upgrades, mining locations, and token economics.",
    Icon: FaUsers,
    delay: 0.3,
  },
  {
    title: "Global Access",
    description:
      "Invest from anywhere in the world with full on-chain transparency and traceability.",
    Icon: FaGlobe,
    delay: 0.4,
  },
  {
    title: "Green Mining",
    description:
      "Future-proof infrastructure with eco-friendly energy sources and optimized operations.",
    Icon: FaBolt,
    delay: 0.5,
  },
];

export const footerContent = [
  {
    title: "Quick links",
    links: [
      { title: "Home", path: "/#home" },
      { title: "About", path: "/#about" },
      { title: "Token", path: "/#token" },
      { title: "Staking", path: "/#staking" },
    ],
  },
  {
    title: "Help",
    links: [{ title: "FAQ", path: "/#faq" }],
  },
  {
    title: "Social Media",
    links: [
      {
        title: "X (Twitter)",
        path: "https://x.com/MINEVERS01?t=YbhDZb3CcX9esRxm43Ss-A&s=09",
      },
      { title: "Telegram", path: "https://t.me/+EEhbAjvm0KxjMTBk" },
    ],
  },
];
