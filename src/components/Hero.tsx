// import { FaPlay } from "react-icons/fa";
// import Button from "../UI/Button";
import heroImage from "/assets/imgs/hero-image.png";
const Hero = () => {
    return (
        <main id="home" className="w-full flex lg:flex-row flex-col lg:items-center lg:justify-between md:justify-start gap-20 relative lg:max-h-[calc(100vh-100px)] lg:h-screen md:h-dvh h-fit lg:mt-0 my-10">
            <section className="flex flex-col gap-6 md:items-start items-center md:text-left text-center">
                <div className="text-gray-200 font-bold lg:text-[84px] md:text-[70px] text-[45px] max-w-[661px] md:leading-[90px]">
                    Revolutionizing <span className='text-transparent bg-clip-text bg-gradient-to-r from-[#0092ff] via-[#7447ff] via-10% to-[#0029a5] font-semibold'>Web3</span> Finance
                </div>
                <p className="text-gray-300 md:max-w-3xl max-w-sm leading-7 md:text-base text-sm">
                    MineVers is a powered protocol redefining the future of cryptocurrency mining through real-world asset (RWA) tokenization. Our mission is to make mining accessible, decentralized, and profitable for everyone—without the need to own or operate physical hardware.                </p>
                {/* <div className="flex items-center gap-5">
                    <Button variant="solid" className="md:!text-lg">Get Started</Button>
                    <Button className="flex items-center gap-2 md:!text-lg"><FaPlay className="size-3.5" />Watch video</Button>
                </div> */}
                <div className="absolute -left-30 size-70 bg-blue-500 opacity-40 blur-3xl -z-1" />
            </section>
            <section className="xl:min-w-3xl lg:min-w-xl md:min-w-lg min-w-xs xl:w-3xl lg:w-xl md:w-lg w-xs mx-auto">
            <img src={heroImage} alt="hero-image" loading="lazy" draggable={false} className="place-self-center" />
            </section>
        </main>
    )
}

export default Hero