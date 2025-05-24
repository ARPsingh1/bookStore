import React from 'react'
import { useEffect, useState } from 'react'
import Login from './Login';
import { useAuth } from '../../context/AuthProvider';
import Logout from './Logout';
import { NavLink } from 'react-router-dom';
const Navbar = () => {
    const [menu, setMenu] = useState("home");
    const [authUser, setAuthUser] = useAuth();
    console.log(authUser);

    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

    const element = document.documentElement;
    useEffect(() => {
        if (theme === 'dark') {
            element.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            element.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    }, [theme]);
    const [sticky, setSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setSticky(window.scrollY > 0);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const Navitem = (
        <>
<li><NavLink to="/">Home</NavLink></li>
<li><NavLink to="/course">Course</NavLink></li>
<li><NavLink to="/contact">Contact</NavLink></li>
<li><a href="#footer">About</a></li>

        </>
    )
    return (
        <div className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${sticky ? 'sticky-navbar bg-base-300 bg-base-100 shadow' : ''} `}>
            <div className='navbar shadow-sm max-w-screen-2xl container mx-auto md:px-20 px-4 transition-all duration-300'>
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>

                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow gap-2">
                            {Navitem}
                        </ul>
                    </div>

                    <a className="btn btn-ghost text-xl">BookStore</a>
                </div>
                <div className="navbar-end gap-4">
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1 gap-2">
                            {Navitem}
                        </ul>
                    </div>
                    {authUser ? <Logout /> :
                        <div>
                            <a className="btn p-5" onClick={() => document.getElementById('my_modal_3').showModal()}>login</a>
                        </div>
                    }
                    <Login />
                </div>
            </div>
        </div>
    )
}

export default Navbar
