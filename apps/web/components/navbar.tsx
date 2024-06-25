
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaGithub, FaSearch } from 'react-icons/fa'
import ThemeToggle from './theme-toggle'

const Navbar = () => {
    return (
        <nav className='max-w-screen-2xl mx-auto py-4'>

            <div className='grid grid-cols-2 lg:grid-cols-3 items-center'>

                <div className='flex gap-4 lg:gap-8 mx-auto items-center '>

                    <Link href={'/'}>
                        <Image src={'/logo.svg'} alt='logo' width={70} height={80} loading='lazy' />
                    </Link>

                    <Link href={'/elements'} className='text-base md:text-lg font-medium text-tLight dark:text-tDark px-4 py-2'>Components</Link>

                </div>

                <form className='hidden bg-white border-2 rounded-full lg:flex items-center px-2 h-10 '>
                    <input type="text " placeholder='Search for components ....' className='p-2 rounded-full outline-none w-[93%] bg-transparent' />

                    <button type='submit'>
                        <FaSearch size={20} color='black' />
                    </button>
                </form>

                <div className=' flex gap-4 lg:gap-8 mx-auto items-center '>

                    <h1 className='text-base font-medium text-gray-400'>v1.0</h1>

                    <Link href={'/'}>
                        <FaGithub size={20} />
                    </Link>

                    <ThemeToggle />

                </div>

            </div>
        </nav>
    )
}

export default Navbar