import Link from "next/link";
import Menu from "./Menu";
import Searchbar from "./Searchbar";
import Navicons from "./Navicons";
import Image from "next/image";

const Navbar = () => {
    return (
        <div className="h-20 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 bg-white shadow sticky top-0">
            {/* Mobile */}
            <div className="h-full flex justify-between items-center md:hidden">
                <Link href="/" className="flex justify-between items-center gap-3">
                    <Image 
                        src="/next.svg" 
                        alt='logo'
                        width={28} 
                        height={28} 
                        className="cursor-pointer" 
                    />
                    <div className="text-2xl tracking-wide">Lama</div>
                </Link>
                <Menu />
            </div>
            {/* Bigger Screen */}
            <div className="hidden md:flex items-center h-full justify-between gap-8">
                {/* Left Section */}
                <div className="w-1/3 xl:w-1/2 flex items-center gap-12">
                    <Link href="/" className="flex items-center gap-3">
                        <Image 
                            src="/next.svg" 
                            alt='logo'
                            width={28} 
                            height={28} 
                            className="cursor-pointer" 
                        />
                        <div className="text-2xl tracking-wide">Lama</div>
                    </Link>
                    <div className="hidden xl:flex gap-4">
                        <div className="relative group">
                            <Link href="/" className="text-gray-600 hover:text-gray-800">Home</Link>
                        </div>
                        <div className="relative group">
                            <Link href="/shop" className="text-gray-600 hover:text-gray-800">Shop</Link>
                            <div className="absolute left-0 mt-2 w-40 bg-white border border-gray-200 rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity">
                                <Link href="/shop/electronics" className="block px-4 py-2 text-gray-600 hover:bg-gray-100">Electronics</Link>
                                <Link href="/shop/clothing" className="block px-4 py-2 text-gray-600 hover:bg-gray-100">Clothing</Link>
                                <Link href="/shop/accessories" className="block px-4 py-2 text-gray-600 hover:bg-gray-100">Accessories</Link>
                            </div>
                        </div>
                        <div className="relative group">
                            <Link href="/about" className="text-gray-600 hover:text-gray-800">About</Link>
                            <div className="absolute left-0 mt-2 w-40 bg-white border border-gray-200 rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity">
                                <Link href="/about/company" className="block px-4 py-2 text-gray-600 hover:bg-gray-100">Our Company</Link>
                                <Link href="/about/team" className="block px-4 py-2 text-gray-600 hover:bg-gray-100">Our Team</Link>
                            </div>
                        </div>
                        <div className="relative group">
                            <Link href="/contact" className="text-gray-600 hover:text-gray-800">Contact</Link>
                        </div>
                    </div>
                </div>
                {/* Right Section */}
                <div className="w-2/3 flex justify-between gap-8 items-center">
                    <Searchbar />
                    <Navicons />
                </div>
            </div>
        </div>
    );
};

export default Navbar;
