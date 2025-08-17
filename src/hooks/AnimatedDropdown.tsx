import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { BiChevronDown } from 'react-icons/bi';

const AnimatedDropdown = ({ title, children }: { title: string; children: React.ReactNode }) => {
    const [open, setOpen] = useState(false);
    return (
        <details className="group w-full" onClick={() => setOpen(!open)}>
            <summary className="flex items-center  gap-2 cursor-pointer py-2 list-none">
                <span>{title}</span>
                <BiChevronDown className={`transition-transform duration-300 size-5 ${open ? 'rotate-180' : ''}`} />
            </summary>

            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ type: "tween", duration: 0.3 }}
                        className="overflow-hidden pl-4 flex flex-col h-0"
                    >
                        {children}
                    </motion.div>
                )}
            </AnimatePresence>
        </details>
    );
};

export default AnimatedDropdown;
