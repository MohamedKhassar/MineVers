import { type ReactNode } from 'react'

const Layout = ({ children }: { children: ReactNode }) => {
    return (
        <main className=' sm:mx-auto mx-5 py-5 xl:max-w-420 lg:max-w-220 md:max-w-3xl max-w-md'>
            {children}
        </main>
    )
}

export default Layout