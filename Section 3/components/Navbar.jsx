"use client"
import { useRouter } from 'next/navigation';
import React from 'react'
import { Navbar, NavbarBrand, NavbarCollapse, NavbarToggle } from "flowbite-react";
import Link from "next/link";

const MyNavbar = () => {
  const router = useRouter();

  return (
    <>
    <Navbar fluid rounded>
      <NavbarBrand as={Link} href="/" className='cursor-pointer'>
        {/* <img src="/favicon.svg" className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" /> */}
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Next.js practice</span>
      </NavbarBrand>
      <NavbarToggle />
      <NavbarCollapse>
      
       
         <button className='cursor-pointer' onClick={()=>router.push("facebook-post")}>facebook-post</button>
        <button className='cursor-pointer' onClick={()=>router.push("user-signup")}>user-signup</button>
      </NavbarCollapse>
    </Navbar>

    </>
  )
}

export default MyNavbar