const Whitepaper = () => {
  return (
    <main className="bg-slate-950 text-white min-h-screen px-6 py-16 md:px-20">
      <div
        className="max-w-4xl mx-auto text-center"
      >
        <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-[#0092ff] via-[#7447ff] to-[#0029a5]">
          MineVers Whitepaper
        </h1>
        <p className="text-slate-300 mb-10 text-base md:text-lg leading-7">
          Learn everything about the MineVers ecosystem: tokenomics, staking, governance,
          and more. This whitepaper provides a transparent and comprehensive overview of how
          our project works and the future we are building.
        </p>
        <a
          href="/docs/minevers-whitepaper.pdf" // <-- Replace with actual path
          download
          className="inline-block px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-md font-medium transition"
        >
          Download Whitepaper (PDF)
        </a>
      </div>

      {/* Optional sections */}
      <section className="mt-20 space-y-14">
        {[
          {
            title: "Introduction",
            content:
              "MineVers is a decentralized Web3 mining ecosystem powered by the Solana blockchain. Our goal is to make mining accessible, transparent, and sustainable through tokenized infrastructure.",
          },
          {
            title: "Token Utility",
            content:
              "MVT serves as the core of the MineVers platform. It can be staked for rewards, used for NFT mining assets, governance voting, and paying for services like cloud mining.",
          },
          {
            title: "Roadmap",
            content:
              "Phase 1: Token Launch. Phase 2: Staking & Airdrops. Phase 3: NFT Mining Platform. Phase 4: Decentralized Cloud Mining Services. Phase 5: Full DAO Governance.",
          },
          {
            title: "Security & Audits",
            content:
              "Our smart contracts undergo third-party audits to ensure security and transparency for the community.",
          },
        ].map((section, idx) => (
          <div
            className="max-w-3xl mx-auto"
            key={idx}
          >
            <h2 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#0092ff] via-[#7447ff] to-[#0029a5] mb-3">
              {section.title}
            </h2>
            <p className="text-slate-400 leading-7 text-sm md:text-base">{section.content}</p>
          </div>
        ))}
      </section>
    </main>
  );
};

export default Whitepaper;
