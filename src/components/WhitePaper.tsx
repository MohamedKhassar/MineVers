import SectionHeader from "../UI/SectionHeader";

const gradientTitleClasses =
    "capitalize text-transparent bg-clip-text bg-gradient-to-r from-[#0092ff] via-[#7447ff] via-10% to-[#0029a5] font-semibold";

const WhitepaperPage = () => {
    return (
        <main className="px-4 sm:px-6 md:px-12 lg:px-20 py-10 text-white max-w-7xl mx-auto">
            <SectionHeader
                color="MineVers Whitepaper"
                description="Explore the MineVers whitepaper to understand our vision, mission, and the innovative solutions we bring to the cryptocurrency mining industry."
            />

            <section className="my-10">
                <h2 className={`text-xl sm:text-2xl md:text-3xl mb-3 leading-snug ${gradientTitleClasses}`}>
                    1. Introduction
                </h2>
                <p className="text-sm sm:text-base leading-relaxed">
                    MineVers is a blockchain-powered ecosystem designed to transform the
                    landscape of cryptocurrency mining. At its core lies the MineVers Token
                    (MVT), a SOLANA utility token built on Solana Chain. The project focuses
                    on creating sustainable, decentralized, and profitable digital mining
                    operations backed by real infrastructure, token utility, and community
                    governance.
                </p>
            </section>

            <section className="mb-10">
                <h2 className={`text-xl sm:text-2xl md:text-3xl mb-3 leading-snug ${gradientTitleClasses}`}>
                    2. Vision & Mission
                </h2>
                <p className="text-sm sm:text-base leading-relaxed">
                    <strong>Vision:</strong> To build a decentralized mining ecosystem that
                    empowers individuals and organizations to participate profitably and
                    transparently in the future of digital assets.
                </p>
                <p className="mt-3 text-sm sm:text-base leading-relaxed">
                    <strong>Mission:</strong>
                    <ul className="list-disc list-inside ml-5 mt-2 space-y-1">
                        <li>To provide an inclusive and scalable mining platform.</li>
                        <li>To reward token holders through staking, airdrops, and governance.</li>
                        <li>To reduce mining costs through innovative hosting and energy solutions.</li>
                    </ul>
                </p>
            </section>

            <section className="mb-10">
                <h2 className={`text-xl sm:text-2xl md:text-3xl mb-3 leading-snug ${gradientTitleClasses}`}>
                    3. The Problem We Solve
                </h2>
                <ul className="list-disc list-inside ml-5 space-y-1 text-sm sm:text-base leading-relaxed">
                    <li>High energy costs for miners</li>
                    <li>Lack of transparency in centralized mining pools</li>
                    <li>No benefits for token holders in most mining projects</li>
                    <li>Environmental concerns with inefficient mining setups</li>
                </ul>
            </section>

            <section className="mb-10">
                <h2 className={`text-xl sm:text-2xl md:text-3xl mb-3 leading-snug ${gradientTitleClasses}`}>
                    4. Our Solutions
                </h2>
                <ul className="list-disc list-inside ml-5 space-y-1 text-sm sm:text-base leading-relaxed">
                    <li>Launch of low-cost, high-efficiency mining farms in the UAE</li>
                    <li>MVT staking and airdrop mechanisms for holders</li>
                    <li>Token-based discount model for services and equipment</li>
                    <li>Burn mechanism to ensure token scarcity and long-term value</li>
                    <li>Clean energy integration and eco-friendly mining designs</li>
                </ul>
            </section>

            <section className="mb-10">
                <h2 className={`text-xl sm:text-2xl md:text-3xl mb-3 leading-snug ${gradientTitleClasses}`}>
                    5. MineVers Token (MVT)
                </h2>
                <p className="text-sm sm:text-base leading-relaxed">
                    <strong>Network:</strong> Solana Chain
                    <br />
                    <strong>Token Symbol:</strong> MVT
                    <br />
                    <strong>Total Supply:</strong> 100,000,000 MVT
                </p>
                <p className="mt-3 text-sm sm:text-base leading-relaxed">Use Cases:</p>
                <ul className="list-disc list-inside ml-5 space-y-1 text-sm sm:text-base leading-relaxed">
                    <li>Staking for rewards</li>
                    <li>Access to cloud mining contracts</li>
                    <li>Discount on mining services and hardware</li>
                    <li>Governance voting rights</li>
                    <li>NFT-based mining integrations</li>
                    <li>Monthly airdrops</li>
                </ul>
            </section>

            <section className="mb-10">
                <h2 className={`text-xl sm:text-2xl md:text-3xl mb-3 leading-snug ${gradientTitleClasses}`}>
                    7. Staking And Rewards Model
                </h2>
                <p className="text-sm sm:text-base leading-relaxed">
                    Token holders can lock MVT tokens in our smart contract and earn monthly
                    rewards generated from mining profits. The more and longer you stake,
                    the higher the returns.
                </p>
                <ul className="list-disc list-inside ml-5 mt-2 space-y-1 text-sm sm:text-base leading-relaxed">
                    <li>Estimated Annual ROI: 15% (adjustable)</li>
                    <li>Reward Frequency: Monthly or on-demand</li>
                </ul>
            </section>

            <section className="mb-10">
                <h2 className={`text-xl sm:text-2xl md:text-3xl mb-3 leading-snug ${gradientTitleClasses}`}>
                    8. Governance Mechanism
                </h2>
                <p className="text-sm sm:text-base leading-relaxed">MineVers is community-centric. Token holders can:</p>
                <ul className="list-disc list-inside ml-5 mt-2 space-y-1 text-sm sm:text-base leading-relaxed">
                    <li>Vote on proposals: new mining sites, burn schedules, service upgrades</li>
                    <li>Participate in advisory boards</li>
                    <li>Propose partnerships and future use cases</li>
                </ul>
            </section>

            <section className="mb-10">
                <h2 className={`text-xl sm:text-2xl md:text-3xl mb-3 leading-snug ${gradientTitleClasses}`}>
                    9. Sustainability Strategy
                </h2>
                <ul className="list-disc list-inside ml-5 space-y-1 text-sm sm:text-base leading-relaxed">
                    <li>Set up solar-powered mining facilities in UAE industrial zones</li>
                    <li>Optimize cooling systems to reduce power waste</li>
                    <li>Implement carbon offset partnerships</li>
                </ul>
            </section>

            <section className="mb-10">
                <h2 className={`text-xl sm:text-2xl md:text-3xl mb-3 leading-snug ${gradientTitleClasses}`}>
                    10. Roadmap
                </h2>
                <p className="text-sm sm:text-base leading-relaxed">Phase 1:</p>
            </section>

            <section className="mb-10">
                <h2 className={`text-xl sm:text-2xl md:text-3xl mb-3 leading-snug ${gradientTitleClasses}`}>
                    11. Legal & Compliance
                </h2>
                <ul className="list-disc list-inside ml-5 space-y-1 text-sm sm:text-base leading-relaxed">
                    <li>Registered in UAE (RAK DAO / ADGM compliant)</li>
                    <li>No promises of guaranteed financial returns</li>
                    <li>Full transparency in mining operations and token usage</li>
                </ul>
            </section>

            <hr className="my-10 border-gray-600" />

            <h2 className={`text-2xl sm:text-3xl mb-4 leading-snug ${gradientTitleClasses}`}>
                MineVers Token (MVT) – Holder Benefits Overview
            </h2>

            <section className="mb-10">
                <p className="text-sm sm:text-base leading-relaxed">
                    <strong>Purpose:</strong> This document outlines the exclusive benefits and
                    utilities granted to holders of the MineVers Token (MVT), designed to
                    reward long-term holders, promote ecosystem engagement, and build token
                    value.
                </p>

                <ul className="list-decimal list-inside ml-5 mt-4 space-y-2 text-sm sm:text-base leading-relaxed">
                    <li>
                        <strong>Staking Rewards:</strong> Earn monthly rewards by locking your
                        MVT tokens in the staking contract. ROI up to 15%.
                    </li>
                    <li>
                        <strong>Monthly Airdrops:</strong> Funded from mining profits. More MVT =
                        more rewards.
                    </li>
                    <li>
                        <strong>Exclusive Discounts:</strong> Up to 25% off services when paying
                        with MVT.
                    </li>
                    <li>
                        <strong>Governance Participation:</strong> Vote on farm locations, burn
                        schedules, and roadmap decisions.
                    </li>
                    <li>
                        <strong>Deflationary Burn Mechanism:</strong> Monthly token burns reduce
                        supply and increase scarcity.
                    </li>
                    <li>
                        <strong>NFT Integration:</strong> Mint NFTs tied to passive mining income.
                    </li>
                    <li>
                        <strong>Early Access:</strong> Priority access to services and mining
                        opportunities.
                    </li>
                </ul>

                <p className="mt-4 text-sm sm:text-base leading-relaxed">
                    <strong>Summary:</strong> Holding MVT provides not just passive income, but
                    real utility within the MineVers ecosystem. Whether you're mining,
                    staking, or participating in governance—your tokens work for you.
                </p>
            </section>

            <hr className="my-10 border-gray-600" />

            <h2 className={`text-2xl sm:text-3xl mb-4 leading-snug ${gradientTitleClasses}`}>
                MineVers Token – Frequently Asked Questions (FAQs)
            </h2>
            <ol className="list-decimal list-inside ml-5 space-y-4 text-sm sm:text-base leading-relaxed">
                <li>
                    <strong>What is MineVers Token (MVT)?</strong> A Solana-based token powering
                    the MineVers ecosystem including mining, staking, NFTs, and governance.
                </li>
                <li>
                    <strong>What can I do with MVT tokens?</strong>
                    <ul className="list-disc list-inside ml-5 mt-2 space-y-1">
                        <li>Stake for rewards</li>
                        <li>Receive airdrops</li>
                        <li>Discounts on mining equipment and services</li>
                        <li>Governance voting</li>
                        <li>Mint NFTs</li>
                        <li>Pay for cloud mining</li>
                    </ul>
                </li>
                <li>
                    <strong>How do I earn rewards with MVT?</strong> Stake tokens and earn monthly
                    rewards (up to 15% annually).
                </li>
                <li>
                    <strong>What are the airdrops and who receives them?</strong> Top MVT holders
                    receive monthly token rewards funded from mining profits.
                </li>
                <li>
                    <strong>Where can I buy MVT tokens?</strong> On decentralized exchanges (e.g.
                    DexScreener) and later on centralized exchanges.
                </li>
                <li>
                    <strong>How is the token supply managed?</strong> Deflationary model with
                    monthly token burns using platform revenue.
                </li>
                <li>
                    <strong>What is the future utility of MVT?</strong> NFT integration, debit
                    cards, VIP pool access, and ecosystem expansion.
                </li>
                <li>
                    <strong>Is MineVers legally registered?</strong> Yes, under RAK DAO / ADGM in
                    the UAE.
                </li>
            </ol>
        </main>
    );
};

export default WhitepaperPage;
