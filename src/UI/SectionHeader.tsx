import type { SectionHeaderProps } from "../lib/types"

const SectionHeader = ({ title, description, white, color }: SectionHeaderProps) => {
    return (
        <div className="flex flex-col gap-5 items-center justify-center">
            <h2 className="text-gray-200 font-bold md:text-[50px] text-[35px] max-w-[900px] text-center capitalize">
                {title || white}
                <span className='capitalize text-transparent bg-clip-text bg-gradient-to-r from-[#0092ff] via-[#7447ff] via-10% to-[#0029a5] font-semibold'>{color}</span>
            </h2>
            <p className="text-center md:max-w-7xl max-w-sm text-gray-500 md:text-lg text-sm">
                {description}
            </p>
        </div>
    )
}

export default SectionHeader
