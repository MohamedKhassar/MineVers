import { useLocation } from 'react-router-dom'
import { navItems } from '../data'
import { HashLink } from 'react-router-hash-link';
import { cn } from '../lib/cn';
import Button from '../UI/Button';
import { BiMenu, BiX } from 'react-icons/bi';
import { useEffect, useRef, useState } from 'react';
import SmallNavbar from './SmallNavbar';
const Navbar = () => {
    const { hash } = useLocation()
    const [isOpen, setIsOpen] = useState(false);
    const navRef = useRef<HTMLDivElement | null>(null);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            const target = event.target as HTMLElement;
            if (navRef.current && !navRef.current.contains(target)) {
                setIsOpen(false);
            }
        };
        window.addEventListener('mousedown', handleClickOutside);
        return () => {
            window.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);
    return (
        <header className='flex items-center justify-between w-full select-none sticky top-5 z-50 bg-slate-950/50 backdrop-blur-md lg:px-5 p-2 rounded-full'>
            <HashLink draggable={false} to='/#' className='flex items-center gap-4 justify-start'>
                <img draggable={false} src="./assets/imgs/logo.png" alt="Transparent image" className="md:w-13 w-10 object-cover" loading='lazy' />
                <h1 className='text-transparent bg-clip-text bg-gradient-to-r from-[#0092ff] via-[#7447ff] via-10% to-[#0029a5] md:text-2xl font-semibold'>MineVers</h1>
            </HashLink>
            <nav className="hidden lg:flex items-center justify-center">
                {navItems.map((item, index) => (
                    <HashLink to={item.path} key={index} className={cn("hover:text-blue-500 px-4 font-medium duration-500",
                        hash == item.path.replace("/", "") ? "text-blue-700" : "text-gray-300")}>{item.title}
                    </HashLink>
                ))}
            </nav>
            <section className="flex items-center gap-5 justify-end max-md:hidden">
                <HashLink to="/#contact-us" className="text-white">
                    <Button>Contact Us</Button>
                </HashLink>
                <Button variant='solid'>
                    get started
                </Button>
            </section>
            <section ref={navRef} className='relative lg:hidden'>
                <Button onClick={toggleMenu} variant='solid' className="lg:hidden text-white !px-2.5">
                    {isOpen ? <BiX className='size-5' /> : <BiMenu className='size-5' />}

                </Button>
                {isOpen && <SmallNavbar />}
            </section>
        </header>
    )
}

export default Navbar