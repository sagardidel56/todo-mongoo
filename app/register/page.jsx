"use client"

import Link from 'next/link'
import React from 'react'

export const metadata = {
    title: 'Register | TODO APP',
    description: ' This is a mongoose todo app',
}

const page = () => {
    return (
        <div className='login' >
            <section>
                <form>
                    <input type="text" placeholder='name' name="" id="" />
                    <input type="email" placeholder='email' name="" id="" />
                    <input type="password" placeholder='password' name="" id="" />
                    <button>Sign up</button>
                    <p>OR</p>
                    <Link href={'/login'}>Login</Link>
                </form>

            </section>
        </div>
    )
}

export default page