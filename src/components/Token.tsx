import { FaCoins, FaGavel, FaGift, FaFire, FaCube } from "react-icons/fa";
import tokenImg from "/assets/imgs/token.png";
import SectionHeader from "../UI/SectionHeader";

const tokenFeatures = [
    {
        title: "Staking Rewards",
        description: "Earn up to 15% annual ROI by staking MVT tokens securely.",
        Icon: FaCoins,
    },
    {
        title: "Governance Voting",
        description: "Vote on MineVers proposals and shape the ecosystem's future.",
        Icon: FaGavel,
    },
    {
        title: "Monthly Airdrops",
        description: "Receive MVT from mining revenue based on your holdings.",
        Icon: FaGift,
    },
    {
        title: "Burn Mechanism",
        description: "Monthly token buyback and burn to reduce supply & boost value.",
        Icon: FaFire,
    },
    {
        title: "NFT Integrations",
        description: "Mint NFTs that represent real-world mining rights and income.",
        Icon: FaCube,
    },
];

const Token = () => {
    return (
        <main id="token" className="lg:max-h-[calc(100vh-100px)] lg:h-screen md:h-dvh h-fit">
            <SectionHeader
                title="MineVers Token (MVT)"
                description="MVT is the utility token of the MineVers ecosystem, unlocking access to staking, voting, discounts, and NFT-based mining income."
            />
            <section className="grid lg:grid-cols-2 gap-14 items-center lg:mt-5 mt-16">
                {/* Left: Image */}
                <div className="relative flex justify-center items-center">
                    <div className="absolute md:size-100 size-80 bg-gradient-to-br from-[#0092ff] to-[#0029a5] opacity-80 rounded-full blur-3xl -z-10" />
                    <img src={tokenImg} alt="MineVers Token" className="md:size-120 size-60 z-10" loading="lazy" />
                </div>

                {/* Right: Content */}
                <div className="space-y-8">
                    <div className="grid md:grid-cols-2 grid-cols-1 gap-15 mx-5">
                        {tokenFeatures.map((feature, idx) => (
                            <div key={idx} className="flex items-start space-x-4">
                                <feature.Icon className="text-violet-500 text-xl md:size-8 size-5" />
                                <div>
                                    <h4 className="font-semibold text-white md:text-base text-sm">{feature.title}</h4>
                                    <p className="md:text-sm text-xs text-slate-400">{feature.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Token;
