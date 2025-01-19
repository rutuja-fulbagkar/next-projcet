"use client"; 
import { useState } from 'react';
// import Image from 'next/image';  
import Link from 'next/link';

const Menu = () => {
    const [open, setOpen] = useState(false);

    return (
        <div className="">
            {/* <Image 
                src="/next.svg" 
                alt='logo'
                width={28} 
                height={28} 
                className="cursor-pointer" 
                onClick={() => setOpen(prev => !prev)} 
            /> */}
             <button  onClick={() => setOpen(prev => !prev)} 
 className={`navbar_togglers hamburger_menu md:hidden focus:outline-none cursor-pointer pt-9`}>
            <span className={`block w-6 h-0.5 bg-gray-600 mb-1 transition-transform duration-300 ${open ? 'rotate-45 translate-y-1.5' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-gray-600 mb-1 transition-opacity duration-300 ${open ? 'opacity-0' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-gray-600 transition-transform duration-300 ${open ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
          </button>
            {open && <div className="absolute bg-black text-white left-0 top-20 w-full h-[calc(100vh-80px)] flex flex-col items-center justify-center gap-8 text-xl z-10"> 
                <Link href="/">Home</Link>
            </div>}
        </div>
    );
}

export default Menu;
