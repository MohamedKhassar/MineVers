import { useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";
import SectionHeader from "../UI/SectionHeader";

const faqs = [
  {
    question: "What is MineVers Token (MVT)?",
    answer:
      "MineVers Token (MVT) is a token built on the Solana Chain. It powers the MineVers ecosystem which includes crypto mining operations, rewards, NFT integrations, and more.",
  },
  {
    question: "What can I do with MVT tokens?",
    answer:
      "MVT tokens can be used to:\n• Earn passive income through staking\n• Receive monthly airdrops\n• Get discounts on mining equipment and services\n• Vote in governance decisions\n• Mint mining NFTs\n• Pay for cloud mining services",
  },
  {
    question: "How do I earn rewards with MVT?",
    answer:
      "By staking your MVT tokens in the official staking contract, you can earn up to 15% annual rewards. Rewards are distributed monthly and based on the amount and duration of your stake.",
  },
  {
    question: "What are the airdrops and who receives them?",
    answer:
      "Every month, a portion of mining profits is used to distribute MVT tokens to active and top-ranking token holders. The more MVT you hold, the higher your chance of receiving airdrops.",
  },
  {
    question: "Where can I buy MVT tokens?",
    answer:
      "MVT will be available for purchase on decentralized exchanges like Dex Screener and later on centralized exchanges after the launch.",
  },
];

const Faq = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) =>
    setOpenIndex(openIndex === index ? null : index);

  return (
    <section id="faq"  className="lg:max-h-[calc(100vh-100px)] lg:h-screen md:h-dvh h-fit flex flex-col items-center justify-center">
        <SectionHeader
            white="MineVers"
            color=" FAQ"
            description="Frequently Asked Questions about MineVers Token (MVT) and the ecosystem."
        />

        <div className="space-y-6 max-w-6xl mx-auto my-16">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="border-2 border-violet-900 p-5 rounded-xl transition-all duration-300 shadow hover:shadow-lg"
              >
                <button
                  onClick={() => toggle(index)}
                  className="w-full flex items-center justify-between text-left  cursor-pointer"
                >
                  <h3 className="text-lg font-medium">{faq.question}</h3>
                  <span className="text-2xl">
                    {isOpen ? <FiMinus /> : <FiPlus />}
                  </span>
                </button>

                <div
                  className={`transition-all duration-300 overflow-hidden ${
                    isOpen ? "max-h-[300px] mt-3" : "max-h-0"
                  }`}
                >
                  <p className="text-sm text-slate-300 whitespace-pre-line">
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
    </section>
  );
};

export default Faq;
