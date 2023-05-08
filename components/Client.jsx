"use client"
import Link from "next/link"
import { createContext, useContext, useState } from "react"

export const Context = createContext({ user: {} })

export const ContextProvider = ({ children }) => {
    const [user, setUser] = useState({})
    return (
        <Context.Provider value={{ user: user, setUser: setUser }} >
            {children}
        </Context.Provider>
    )
}

export const LogoutBtn = () => {
    const { user } = useContext(Context)
    const logoutHandler = () => {
        alert('Logging out')
    }
    return (
        user.id ? (
            <button className="btn" onClick={logoutHandler} >Logout</button>
        ) : (
            <Link href={'/login'} >Login</Link>
        )
    )
}

export const TodoButton = ({ id, comlpeted }) => {
    const deleteHandler = (id) => {
        alert('deleting', id)
    }
    return (<>
        <input type="checkbox" checked={comlpeted} name="" id="" />
        <button className="btn" onClick={() => deleteHandler(id)} >Delete</button>
    </>)
}