import type { FC } from "react"
import type { ButtonProps } from "../lib/types"
import { cn } from "../lib/cn"

const Button: FC<ButtonProps> = ({ className, variant = "outline", children, ...rest }) => {
    return (
        <button {...rest} className={cn(className,
            "px-6 py-2.5 rounded-full transition-colors duration-300 capitalize cursor-pointer font-semibold text-sm",
            variant === "solid" ? "bg-gradient-to-br from-[#0092ff] via-[#7447ff] via-10% to-[#0029a5] hover:from-[#0092ff]/70 hover:via-[#7447ff]/70 hover:to-[#0029a5]/70" : "border border-[#7447ff] text-[#7447ff] hover:bg-[#7447ff]/10"
        )}>
            {children}
        </button>
    )
}

export default Button