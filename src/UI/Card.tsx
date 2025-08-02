import type { FeatureItem } from '../lib/types'

const Card = ({ Icon, ...feature }: FeatureItem) => {
    return (
        <div className="lg:w-101 md:w-93 w-full bg-gradient-to-r from-purple-900 via-violet-900 to-cyan-900 rounded-2xl p-1">
            <div className="size-full bg-slate-950 rounded-xl flex flex-col justify-center items-center md:space-y-5 space-y-3 p-5">
                <Icon className="bg-gray-900 hover:bg-gray-900/10 duration-300 cursor-pointer hover:border-slate-900 border-2 border-slate-700 p-5 size-max rounded-3xl" />
                <h3 className="lg:text-lg md:text-base text-sm font-extrabold">{feature.title}</h3>
                <p className="text-center text-slate-400 lg:text-base md:text-sm text-xs">{feature.description}</p>
            </div>
        </div>
    )
}

export default Card