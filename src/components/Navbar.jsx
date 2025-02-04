import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import logo_name from '../assets/logo_name.svg'
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars,faX } from '@fortawesome/free-solid-svg-icons'


export default function Navbar(){
    function classNames(...classes) {
        return classes.filter(Boolean).join(' ')
      }
    const [isMenuOpen,setMenuOpen] = useState(false) ;
    function onToggleMenu(){
        setMenuOpen(prev=> !prev);
    }
    function closeMenu(){
        setMenuOpen(prev => !prev)
    }
    return (
        // navbar: render all paths in the Router.jsx

        <div > 
            <nav className='flex space-between bg-white items-center  md:w-auto md:py-2 py-6' >
                <div className='md:ml-10 ml-4 lg:ml-24 flex min-w-fit mx-auto top-0'>
                    <Link to='/'>
                    <img  src={logo_name} alt='logo and name of NeverEverAlone'/>
                    </Link>
                    
                </div>
                
                <div className={`flex md:flex-row flex-col absolute items-start gap-3 lg:gap-5 md:relative bg-white w-full pl-2 font-montserrat mr-5 py-4 transition-all duration-500 ease-on ${isMenuOpen?'top-[8%] pl-8 z-10' : 'top-[-100%]'} md:items-start md:justify-end`} >
                    <div className=" justify-center gap-x-1.5  px-3 py-2 text-md  text-green-700 text-bold font-bold  ">
                            <Link  to="/">Home</Link>
                    </div>
                    <Menu as="div" className="relative inline-block text-left ">
                        <div>
                            <Menu.Button className="inline-flex w-full justify-center gap-x-1.5  px-3 py-2 text-md  text-gray-900  ">
                            <p >Domestic Violence</p>
                            <ChevronDownIcon className="-mr-1 h-5 w-5 text-gray-400" aria-hidden="true" />
                            </Menu.Button>
                        </div>

                        <Transition
                            as={Fragment}
                            enter="transition ease-out duration-100"
                            enterFrom="transform opacity-0 scale-95"
                            enterTo="transform opacity-100 scale-100"
                            leave="transition ease-in duration-75"
                            leaveFrom="transform opacity-100 scale-100"
                            leaveTo="transform opacity-0 scale-95"
                        >
                            <Menu.Items className="absolute left-0 z-10 mt-2 w-full origin-top-left rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                            <div className="py-1" onClick={closeMenu}>
                                <Menu.Item>
                                {({ active }) => (
                                    <Link
                                    to="types"
                                    className={classNames(
                                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                        'block px-4 py-2 text-md'
                                    )}
                                    >
                                    Types
                                    </Link>
                                )}
                                </Menu.Item>
                                <Menu.Item>
                                {({ active }) => (
                                    <Link
                                    to='causes'
                                    className={classNames(
                                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                        'block px-4 py-2 text-md'
                                    )}
                                    >
                                    Causes
                                    </Link>
                                )}
                                </Menu.Item>
                                <Menu.Item>
                                {({ active }) => (
                                    <Link
                                    to="solutions"
                                    className={classNames(
                                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                        'block px-4 py-2 text-md'
                                    )}
                                    >
                                    Solution
                                    </Link>
                                )}
                                </Menu.Item>
                                
                            
                            </div>
                            </Menu.Items>
                        </Transition>
                    </Menu>
                    
                    <Menu as="div" className="relative inline-block text-left ">
                        <div >
                            <Menu.Button className="inline-flex w-full justify-center gap-x-1.5  px-3 py-2 text-md  text-gray-900  ">
                            <p >About</p>
                            <ChevronDownIcon className="-mr-1 h-5 w-5 text-gray-400" aria-hidden="true" />
                            </Menu.Button>
                        </div>

                        <Transition
                            as={Fragment}
                            enter="transition ease-out duration-100"
                            enterFrom="transform opacity-0 scale-95"
                            enterTo="transform opacity-100 scale-100"
                            leave="transition ease-in duration-75"
                            leaveFrom="transform opacity-100 scale-100"
                            leaveTo="transform opacity-0 scale-95"
                        >
                            <Menu.Items className="absolute left-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                            <div className="py-1" onClick={closeMenu}>
                                <Menu.Item>
                                {({ active }) => (
                                    <Link
                                    to="founder"
                                    className={classNames(
                                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                        'block px-4 py-2 text-md'
                                    )}
                                    >
                                    Founder
                                    </Link>
                                )}
                                </Menu.Item>              
                                <Menu.Item>
                                {({ active }) => (
                                    <Link
                                    to="mission-vision"
                                    className={classNames(
                                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                        'block px-4 py-2 text-md'
                                    )}
                                    >
                                    Mision & Vision
                                    </Link>
                                )}
                                </Menu.Item>
                                <Menu.Item>
                                {({ active }) => (
                                    <Link
                                    to="teams"
                                    className={classNames(
                                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                        'block px-4 py-2 text-md'
                                    )}
                                    >
                                    Teams
                                    </Link>
                                )}
                                </Menu.Item>
                            </div>
                            </Menu.Items>
                        </Transition>
                    </Menu>
                    <Link className='justify-center gap-x-1.5  px-3 py-2 text-md text-gray-900 'to="contact" onClick={closeMenu}>Contact</Link>
                    <Link className='flex bg-green-600 rounded-full ml-3 px-5 py-2 text-md max-w-xs text-center' to='download' onClick={closeMenu}>Download App</Link>
                </div>
                <div className='mr-4 flex items-center text-2xl md:hidden cursor-pointer'>
                        <FontAwesomeIcon icon={isMenuOpen ? faX :faBars} onClick={onToggleMenu}/>
                </div>
            </nav>
        </div>    
    )
}