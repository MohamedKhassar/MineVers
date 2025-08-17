import { useLocation } from 'react-router-dom'
import { navItems } from '../data'
import { HashLink } from 'react-router-hash-link';
import { cn } from '../lib/cn';
import Button from '../UI/Button';
import { BiChevronDown, BiMenu, BiX } from 'react-icons/bi';
import { useEffect, useRef } from 'react';
import { useSmallNavbar } from '../hooks/useSmallNavbar';
const Navbar = () => {
    const { hash } = useLocation()
    const { toggleMenu, isOpen } = useSmallNavbar()
    const detailsRef = useRef<HTMLDetailsElement[]>([]);


    useEffect(() => {
        const handleClickOutsideDetails = (event: MouseEvent) => {
            const target = event.target as HTMLElement;
            if (detailsRef.current && !detailsRef.current.some(el => el.contains(target))) {
                detailsRef.current.forEach(el => {
                    if (target !== el) {
                        el.removeAttribute('open');
                    }
                });
            }
        };
        window.addEventListener('mousedown', handleClickOutsideDetails);
        return () => {
            window.removeEventListener('mousedown', handleClickOutsideDetails);
        };
    }, []);


    return (
        <header className='flex items-center justify-between select-none sticky top-5 z-40 bg-slate-950/50 backdrop-blur-md lg:px-5 p-2 rounded-full w-full'>
            <HashLink draggable={false} to='/#' className='flex items-center gap-4 justify-start'>
                <img draggable={false} src="./assets/imgs/logo.png" alt="Transparent image" className="md:w-13 w-10 object-cover" loading='lazy' />
                <h1 className='text-transparent bg-clip-text bg-gradient-to-r from-[#0092ff] via-[#7447ff] via-10% to-[#0029a5] md:text-2xl font-semibold'>MineVers</h1>
            </HashLink>
            <nav className="hidden lg:flex items-center justify-center">
                {navItems.map((item, index) => (
                    item.dropdown ?
                        <div key={index} className="relative">
                            <details ref={
                                (el) => {
                                    if (el && !detailsRef.current.includes(el)) {
                                        detailsRef.current.push(el);
                                    }
                                }
                            }
                                className="group">
                                <summary className={cn("flex items-center gap-1 cursor-pointer list-none",
                                    item.dropdown?.some(
                                        (sub) => sub.path.replace("/", "") === hash
                                    )
                                        ? "text-blue-700"
                                        : "text-gray-300"
                                )}
                                >
                                    <span>{item.title}</span>
                                    <BiChevronDown className="transition-transform group-open:rotate-180" />
                                </summary>

                                <div className="absolute mt-2 hidden flex-col bg-slate-950/50 backdrop-blur-md rounded-lg shadow-lg p-2 group-open:flex">
                                    {item.dropdown?.map((subItem, subIndex) => (
                                        <HashLink
                                            key={subIndex}
                                            to={subItem.path}
                                            className={cn(
                                                "hover:text-blue-500 px-4 py-2 font-medium duration-500",
                                                hash === subItem.path.replace("/", "") ? "text-blue-700" : "text-gray-300"
                                            )}
                                        >
                                            {subItem.title}
                                        </HashLink>
                                    ))}
                                </div>
                            </details>
                        </div>

                        :
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
            <section className='lg:hidden'>
                <Button
                    onClick={toggleMenu}
                    variant='solid'
                    className="lg:hidden text-white !px-2.5"
                >
                    {isOpen ? <BiX className='size-5' /> : <BiMenu className='size-5' />}
                </Button>
            </section>
        </header>
    )
}

export default Navbar