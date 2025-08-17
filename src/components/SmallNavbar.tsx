import { navItems } from '../data'
import { HashLink } from 'react-router-hash-link'
import Button from '../UI/Button'
import { useLocation } from 'react-router-dom'
import { cn } from '../lib/cn'
import { motion, AnimatePresence } from 'framer-motion'
import { useSmallNavbar } from '../hooks/useSmallNavbar'
import { useEffect, useRef } from 'react'
import AnimatedDropdown from '../hooks/AnimatedDropdown'

const SmallNavbar = () => {
    const { hash } = useLocation()
    const { isOpen, closeMenu } = useSmallNavbar()
    const navRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            const target = event.target as HTMLElement;
            if (navRef.current && !navRef.current.contains(target)) {
                closeMenu();
            }
        };
        window.addEventListener('mousedown', handleClickOutside);
        return () => {
            window.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    useEffect(() => {
        if (hash) {
            closeMenu(); // Close the menu when navigating to a hash link
        }
    }, [hash]);


    return (
        <AnimatePresence>
            {isOpen && (
                <div className='lg:hidden'>
                    {/* Overlay */}
                    <motion.div
                        className='fixed inset-0 w-full bg-blue-black/20 backdrop-blur-2xl z-40 h-screen top-0'
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={closeMenu} // close when clicking overlay
                    />

                    {/* Sidebar */}
                    <motion.section
                        className='fixed top-0 left-0 w-72 h-screen z-50 bg-slate-950 rounded-tr-3xl rounded-br-3xl shadow-lg p-10 space-y-5 overflow-y-scroll'
                        ref={navRef}

                        initial={{ x: "-100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "-100%" }}
                        transition={{ type: "tween", duration: 0.3 }}
                    >
                        <HashLink draggable={false} to='/#' className='flex items-center gap-4 justify-start'>
                            <img draggable={false} src="./assets/imgs/logo.png" alt="Transparent image" className="md:w-13 w-10 object-cover" loading='lazy' />
                            <h1 className='text-transparent bg-clip-text bg-gradient-to-r from-[#0092ff] via-[#7447ff] via-10% to-[#0029a5] text-2xl font-semibold'>MineVers</h1>
                        </HashLink>
                        <nav
                            className="flex flex-col items-start justify-center lg:hidden">
                            {navItems.map((item, index) =>
                                item.dropdown ? (
                                    <AnimatedDropdown
                                        key={index}
                                        title={item.title}
                                    >
                                        {
                                            item.dropdown.map((subItem, subIndex) => (
                                                <HashLink
                                                    to={subItem.path!}
                                                    key={subIndex}
                                                    onClick={closeMenu} // close sidebar on link click
                                                    className={cn(
                                                        "hover:text-blue-500 py-3 font-medium duration-500",
                                                        hash === subItem.path?.replace("/", "")
                                                            ? "text-blue-700"
                                                            : "text-gray-300"
                                                    )}
                                                >
                                                    {subItem.title}
                                                </HashLink>
                                            ))
                                        }
                                    </AnimatedDropdown>

                                ) : (
                                    <HashLink
                                        to={item.path!}
                                        key={index}
                                        onClick={closeMenu} // close sidebar on link click
                                        className={cn(
                                            "hover:text-blue-500 py-3 font-medium duration-500",
                                            hash === item.path?.replace("/", "")
                                                ? "text-blue-700"
                                                : "text-gray-300"
                                        )}
                                    >
                                        {item.title}
                                    </HashLink>
                                )
                            )}
                        </nav>

                        {/* CTA Buttons */}
                        <section className="grid mt-6 md:hidden gap-3">
                            <HashLink to="/#contact-us" className="text-white" onClick={closeMenu}>
                                <Button className='!text-sm w-full'>Contact Us</Button>
                            </HashLink>
                            <Button variant='solid' className='!text-sm' onClick={closeMenu}>
                                get started
                            </Button>
                        </section>
                    </motion.section>
                </div>
            )}
        </AnimatePresence>
    )
}

export default SmallNavbar
