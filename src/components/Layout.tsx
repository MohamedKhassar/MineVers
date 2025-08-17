import { type ReactNode } from 'react'

const Layout = ({ children }: { children: ReactNode }) => {
    return (
        <main className='mx-auto py-5 xl:max-w-420 lg:max-w-220 md:max-w-3xl sm:max-w-md max-w-xs'>
            {children}
        </main>
    )
}

export default Layout