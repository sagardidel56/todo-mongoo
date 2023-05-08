import React from 'react'
import Link from 'next/link'
import { LogoutBtn } from '@/components/Client'

const Header = () => {
    return (
        <div className='header'>
            <div>
                <h2>Todo.</h2>
            </div>
            <article>
                <Link href={'/'} >Home</Link>
                <Link href={'/about'} >About</Link>
                <LogoutBtn />
            </article>
        </div>
    )
}

export default Header