"use client"
import Link from 'next/link'
import React from 'react'

export const metadata = {
    title: 'Login | TODO APP',
    description: ' This is a mongoose todo app',
}

const LoginPage = () => {
    return (
        <div className='login' >
            <section>
                <form>
                    <input type="email" placeholder='email' name="" id="" />
                    <input type="password" placeholder='password' name="" id="" />
                    <button>Login</button>
                    <p>OR</p>
                    <Link href={'/register'}>New User ?</Link>
                </form>
            </section>
        </div>
    )
}

export default LoginPage