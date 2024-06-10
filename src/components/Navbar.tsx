"use client"
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { BsHouses } from 'react-icons/bs'
import { MdContentPasteGo } from 'react-icons/md'

const Navbar = () => {
    const [addUser, setAddUser] = useState(false)
    return (
        <nav className='h-[100px] flex justify-between items-center'>
            <div className="sm:flex-[3] flex gap-[4rem] items-center">
                <Link href="/" className="flex items-center gap-[2px]">
                    <MdContentPasteGo size={38} />
                    <span className='font-[500] text-[20px] ml-[0.2rem]'>Paster</span>
                </Link>

            </div>
            <div className="sm:flex-[2] bg-transparent flex justify-end items-center">

                {
                    addUser ? (<>  <Link className='px-[2px] py-[2px] m-[20px] text-[#000]' href="/login">John Doe</Link>
                        <Link className=' bg-[#fece51] p-3 rounded-md ml-[1rem] font-medium' href="/register" >
                            Profile
                        </Link></>) : (<>  <span className='px-[2px] py-[2px] m-[20px] text-[#000]'>Visitor Mode</span>
                            <Link className=' bg-[#fece51] p-3 rounded-md ml-[1rem] font-medium' href="/register" >
                                Log in
                            </Link></>)
                }
            </div>
        </nav>
    )
}

export default Navbar