import { navItems } from '../data'
import { HashLink } from 'react-router-hash-link'
import Button from '../UI/Button'
import { useLocation } from 'react-router-dom'
import { cn } from '../lib/cn'

const SmallNavbar = () => {
    const { hash } = useLocation()

    return (
        <section className='absolute top-full mt-2 right-2 border border-slate-500 bg-gradient-to-br from-slate-800/96 via-slate-900/96 to-slate-950/96 p-5 rounded-2xl bg-'>
            <nav className="flex flex-col items-center justify-center lg:hidden">
                {navItems.map((item, index) => (
                    <HashLink to={item.path} key={index} className={cn("hover:text-blue-500 py-4 font-medium duration-500",
                        hash == item.path.replace("/", "") ? "text-blue-700" : "text-gray-300")}>{item.title}
                    </HashLink>
                ))}
            </nav>
            <section className="flex-col flex gap-3 lg:hidden text-nowrap">
                <HashLink to="/#contact-us" className="text-white">
                    <Button className='!text-sm '>Contact Us</Button>
                </HashLink>
                <Button variant='solid' className='!text-sm'>
                    get started
                </Button>
            </section>
        </section>
    )
}

export default SmallNavbar