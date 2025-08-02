import { FaLock, FaChartLine, FaClock, FaMoneyBillWave } from "react-icons/fa";
import stakingArt from "/assets/imgs/staking-art.png"; // Flat icon-style image
import SectionHeader from "../UI/SectionHeader";

const stakingFeatures = [
    {
        title: "Secure Staking",
        description: "Your MVT tokens are locked on-chain with non-custodial control.",
        icon: <FaLock className="text-[#7447ff] md:size-8 size-5" />,
    },
    {
        title: "Compound Rewards",
        description: "Reinvest your mining rewards and grow your yield over time.",
        icon: <FaChartLine className="text-[#0092ff] md:size-8 size-5" />,
    },
    {
        title: "Flexible Periods",
        description: "Choose between 1, 3, or 6-month lock durations to fit your goals.",
        icon: <FaClock className="text-[#0029a5] md:size-8 size-5" />,
    },
    {
        title: "Daily Payouts",
        description: "Track and claim staking rewards daily with zero gas fees.",
        icon: <FaMoneyBillWave className="text-green-400 md:size-8 size-5" />,
    },
];

const Staking = () => {
    return (
        <main id="staking" className="lg:max-h-[calc(100vh-100px)] lg:h-screen md:h-dvh h-fit">
            <section className="relative w-fit place-self-center">
                <SectionHeader
                    title="Stake and Earn with"
                    color=" MVT"
                    description="Lock your MineVers Tokens (MVT) to earn consistent mining rewards and unlock exclusive platform benefits."
                />
                <div className="absolute -top-16 float-start  size-72 bg-gradient-to-br from-[#7447ff] to-[#0029a5] opacity-50 blur-3xl -z-10 rounded-full" />
            </section>
            <section className="grid lg:grid-cols-2 gap-10 items-center my-10">
                {/* Left: Illustration (FlatIcon style) */}
                <div className="flex lg:justify-start justify-center">
                    <img
                        src={stakingArt}
                        alt="Staking Illustration"
                        className="md:size-100 size-60 z-10 -scale-x-100"
                        loading="lazy"
                    />
                </div>

                {/* Right: Content */}
                <div className="space-y-8 mx-5 my-10">
                    <div className="grid md:grid-cols-2 gap-14">
                        {stakingFeatures.map((feature, index) => (
                            <div key={index} className="flex items-start gap-4">
                                <div className="p-2 rounded-full bg-slate-800">{feature.icon}</div>
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

export default Staking;
