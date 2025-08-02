import { FaRocket,  FaUsers, FaCogs, FaSatellite, FaHammer } from "react-icons/fa";
import SectionHeader from "../UI/SectionHeader";

const roadmap = [
  {
    title: "Phase 1: Launch & Token Genesis",
    icon: FaRocket,
    description: "MineVers Token (MVT) launch, liquidity provisioning, and whitepaper release.",
  },
  {
    title: "Phase 2: Platform Infrastructure",
    icon: FaHammer,
    description: "Deployment of mining modules, staking dashboard, and contract audits.",
  },
  {
    title: "Phase 3: Community Governance",
    icon: FaUsers,
    description: "DAO setup, proposal system, and token-holder voting integration.",
  },
  {
    title: "Phase 4: AI & Automation",
    icon: FaCogs,
    description: "Introduce AI-based mining optimization and predictive analytics.",
  },
  {
    title: "Phase 5: Global Expansion",
    icon: FaSatellite,
    description: "Cross-chain compatibility, partnerships, and worldwide node rollout.",
  },
];

const Roadmap = () => {
  return (
    <main id="roadmap" className="h-fit my-20">
        <SectionHeader
            white="MineVers"
            color=" Roadmap"
            description="Our roadmap outlines the key phases of MineVers development, from token launch to global expansion."
        />
      <section className="max-w-7xl mt-16 mx-auto">
        <div className="relative border-l-2 border-violet-800 pl-6 lg:pl-10 space-y-16">
          {roadmap.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={index}
                className={`relative lg:flex ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                } items-start gap-6 group`}
              >
                {/* Dot */}
                <div className="absolute -left-3 top-2 w-6 h-6 bg-gradient-to-r from-[#0092ff] via-[#7447ff] to-[#0029a5] rounded-full border-4 border-slate-950 shadow-lg" />

                {/* Icon */}
                <div className="flex-shrink-0 mt-1 text-3xl text-[#7447ff]">
                  <Icon />
                </div>

                {/* Content */}
                <div className="bg-violet-800 hover:bg-violet-700 transition duration-200 p-5 rounded-xl shadow-md w-full">
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-sm text-slate-300">{step.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
};

export default Roadmap;
