'use client'
import { headerLinks } from '@/constants'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const NavItems = () => {
    const pathName = usePathname();
    return (
        <ul className='md:flex-between flex md:flex-row w-full gap-5 flex-col items-start'>
            {headerLinks.map((links) => {
                const isActive = pathName === links.route
                return (
                    <li
                        key={links.route}
                        className={`${isActive ? 'text-primary-500' : 'text-gray-500'}
                    flex-center p-medium-16 whitespace-nowrap
                ` }
                    >
                        <Link href={links.route}>{links.label}</Link>
                    </li>
                )
            })}
        </ul>
    )
}

export default NavItems
