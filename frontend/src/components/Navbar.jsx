import React, { useState } from 'react'
import { FaSearch } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaShoppingBag } from "react-icons/fa";
import { FaBars } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";
import logo from "/logo.png"
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }
    const navItems = [
        {title: "Jewelry & Accessories", path: "/"},
        {title: "Clothing & Shoes", path: "/"},
        {title: "Home & Living", path: "/"},
        {title: "Wedding & Party", path: "/"},
        {title: "Toys & Entertainment", path: "/"},
        {title: "Art & Collectibles", path: "/"},
        {title: "Craft Supplies & Tools", path: "/"},
    ]
  return (
    <header className='max-w-screen-3xl xl:px-28 px-4 absolute top-0 right-0 left-0'>
        <nav className='flex justify-between items-center md:py-4 pt-6 pb-3'>
            <FaSearch className='text-Black w-5 h-5 cursor-pointer hidden md:block' />
            {/* logo */}
            <a href='/'><img src={logo} alt="" /></a>
            {/* account and shopping btn */}
            <div className='text-lg text-Black sm:flex items-center gap-4 hidden'>
                <a href='' className='flex items-center gap-2'><FaUser/>Account</a>
                <a href='' className='flex items-center gap-2'><FaShoppingBag/>Shopping</a>
            </div>
            {/* nav for mobile devices */}
            <div className='sm:hidden'>
                <button onClick={toggleMenu}>
                   {
                    isMenuOpen ? <FaTimes/> :  <FaBars className='w-5 h-5 text-Black'/>
                   }
                </button>
            </div>
        </nav>
        <hr/>
        {/* Categorie items */}
        <div className='pt-4'>
            <ul className='lg:flex items-center justify-between text-Black hidden'>
                {
                    navItems.map(({title, path}) => (
                        <li key={title} className='hover:text-orange-500'>
                            <Link to="/">{title}</Link>
                        </li>
                    ))
                }
            </ul>
        </div>
        {/* only mobile menu items */}
        <div>
            <ul className={`bg-Black text-white px-4 py-2 ${isMenuOpen ? "" : "hidden"}`}>
                {
                    navItems.map(({title, path}) => (
                        <li key={title} className='hover:text-orange-500 my-3 cursor-pointer'>
                            <Link to="/">{title}</Link>
                        </li>
                    ))
                }
            </ul>
        </div>
    </header>
  )
}

export default Navbar