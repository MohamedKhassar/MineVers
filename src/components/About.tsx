
import { features } from "../data";
import Card from "../UI/Card";
import SectionHeader from "../UI/SectionHeader";
const About = () => {
    return (
        <main
            id="about"
            className="lg:max-h-[calc(100vh-100px)] h-screen">
            <SectionHeader
                title={"about MineVers"}
                description={" We are on a mission to empower businesses with transformative AI technology. Our team of experts combines industry‑leading research with innovative algorithms to deliver a platform that adapts to your unique needs. Join us and lead the digital revolution in your industry."}
            />
            <section className="flex gap-5 items-center justify-center max-w-7xl flex-wrap mx-auto my-10">
                {
                    features.map((feature, index) => (
                        <Card
                            key={index}
                            Icon={feature.Icon}
                            title={feature.title}
                            description={feature.description}
                        />
                    ))
                }
            </section>
        </main>
    );
};

export default About;
