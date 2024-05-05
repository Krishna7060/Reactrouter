import React from 'react'
import {Link, NavLink} from 'react-router-dom'

export default function Header() {
    return (
        <header className="shadow sticky z-50 top-0">
            <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    <Link to="/" className="flex items-center">
                        <img
                            src="data:image/png;base64,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"
                            className="mr-3 h-12"
                            alt="Logo"
                        />
                    </Link>
                    <div className="flex items-center lg:order-2">
                        <Link
                            to="#"
                            className="text-gray-800 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                        >
                            Log in
                        </Link>
                        <Link
                            to="#"
                            className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                        >
                            Get started
                        </Link>
                    </div>
                    <div
                        className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
                        id="mobile-menu-2"
                    >
                        <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                            <li>
                                <NavLink
                                to="/"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                to="/about"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    About
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                to="/contact"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    Contact
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                to="/github"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    Github
                                </NavLink>
                            </li>
                            
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}

