import { FaVoteYea, FaUsersCog, FaBalanceScale, FaShieldAlt } from "react-icons/fa";
import govImg from "/assets/imgs/governance.png"; // replace with an illustration
import SectionHeader from "../UI/SectionHeader";
import Card from "../UI/Card";

const governanceFeatures = [
    {
        title: "On-Chain Voting",
        description: "Every token holder has the power to vote directly on key decisions using secure smart contracts.",
        icon: FaVoteYea,
        color: "text-[#0092ff]",
    },
    {
        title: "Decentralized Authority",
        description: "No central entity. Governance is driven by the MineVers community, through the DAO protocol.",
        icon: FaUsersCog,
        color: "text-[#7447ff]",
    },
    {
        title: "Transparent Proposals",
        description: "Track, submit, and review proposals in real-time through the governance dashboard.",
        icon: FaBalanceScale,
        color: "text-[#0029a5]",
    },
    {
        title: "Secure Participation",
        description: "All votes are cryptographically verified and immutable on the blockchain.",
        icon: FaShieldAlt,
        color: "text-green-400",
    },
];

const Governance = () => {
    return (
        <main id="governance" className="lg:max-h-[calc(100vh-100px)] lg:h-screen md:h-dvh h-fit">
            <SectionHeader
                color="Decentralized Future"
                white="Community Governance For a "
                description="The MineVers DAO ensures all protocol changes, economic policies, and platform upgrades are decided by you—the token holders. You propose. You vote. You govern."
            />
            <section className="grid lg:grid-cols-2 gap-14 items-center my-15">
                {/* Left side - text */}
                <div className="space-y-8">
                    {/* Feature Cards */}
                    <div className="grid md:grid-cols-2 gap-5 pt-4">
                        {governanceFeatures.map((item, idx) => (
                            <Card
                                key={idx}
                                title={item.title}
                                description={item.description}
                                Icon={item.icon}
                            />
                        ))}
                    </div>
                </div>

                {/* Right side - Illustration */}
                <div className="relative flex justify-center items-center">
                    <div className="absolute top-0 right-10 size-72 bg-gradient-to-br from-[#0092ff] to-[#7447ff] opacity-70 blur-3xl -z-10" />
                    <img
                        src={govImg}
                        alt="Governance illustration"
                        loading="lazy"
                        className="-scale-x-100 md:size-120 size-60"
                    />
                </div>
            </section>
        </main>
    );
};

export default Governance;
