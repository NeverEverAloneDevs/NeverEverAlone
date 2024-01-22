import { Link } from 'react-router-dom';
import logo_name from '../assets/logo_name.svg'
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

export default function Navbar(){
    return (
        // navbar: render all paths in the Router.jsx

        <div > 
            <nav className='flex flex-row items-startn justify-between bg-white w-full top-0 left-0 py-5' >
                <div className='ml-10 flex items-center'>
                    <img  src={logo_name} alt='logo and name of NeverEverAlone'/>
                </div>
                
                <div className='flex font-montserrat '>
                    <Menu as="div" className="relative inline-block text-left ">
                        <div>
                            <Menu.Button className="inline-flex  w-full justify-center gap-x-1.5  px-3 py-2 text-md  text-green-700 text-bold font-bold  ">
                            <Link  to="/">Home</Link>
                            <ChevronDownIcon className="-mr-1 h-5 w-5 text-gray-400 " aria-hidden="true" />
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
                            <Menu.Items className="absolute left-0 z-10 mt-2 w-50 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                            <div className="py-1">
                                <Menu.Item>
                                {({ active }) => (
                                    <a
                                    href="#"
                                    className={classNames(
                                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                        'block px-4 py-2 text-md'
                                    )}
                                    >
                                    Who We are
                                    </a>
                                )}
                                </Menu.Item>
                                <Menu.Item>
                                {({ active }) => (
                                    <a
                                    href="#"
                                    className={classNames(
                                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                        'block px-4 py-2 text-md'
                                    )}
                                    >
                                    What we are
                                    </a>
                                )}
                                </Menu.Item>
                                <Menu.Item>
                                {({ active }) => (
                                    <a
                                    href="#"
                                    className={classNames(
                                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                        'block px-4 py-2 text-md'
                                    )}
                                    >
                                    Understanding DV
                                    </a>
                                )}
                                </Menu.Item>
                                <Menu.Item>
                                {({ active }) => (
                                    <a
                                    href="#"
                                    className={classNames(
                                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                        'block px-4 py-2 text-md'
                                    )}
                                    >
                                    Comprehensive care club
                                    </a>
                                )}
                                </Menu.Item>
                                <Menu.Item>
                                {({ active }) => (
                                    <a
                                    href="#"
                                    className={classNames(
                                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                        'block px-4 py-2 text-md'
                                    )}
                                    >
                                    Introduce app with Appstore/playstore
                                    </a>
                                )}
                                </Menu.Item>
                            
                            </div>
                            </Menu.Items>
                        </Transition>
                    </Menu>
                    
                    <Menu as="div" className="relative inline-block text-left ">
                        <div>
                            <Menu.Button className="inline-flex w-full justify-center gap-x-1.5  px-3 py-2 text-md  text-gray-900  ">
                            <Link to="/domestic-violence">Domestic Violence</Link>
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
                            <div className="py-1">
                                <Menu.Item>
                                {({ active }) => (
                                    <a
                                    href="#"
                                    className={classNames(
                                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                        'block px-4 py-2 text-md'
                                    )}
                                    >
                                    Types
                                    </a>
                                )}
                                </Menu.Item>
                                <Menu.Item>
                                {({ active }) => (
                                    <a
                                    href="#"
                                    className={classNames(
                                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                        'block px-4 py-2 text-md'
                                    )}
                                    >
                                    Causes
                                    </a>
                                )}
                                </Menu.Item>
                                <Menu.Item>
                                {({ active }) => (
                                    <a
                                    href="#"
                                    className={classNames(
                                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                        'block px-4 py-2 text-md'
                                    )}
                                    >
                                    Solution
                                    </a>
                                )}
                                </Menu.Item>
                                
                            
                            </div>
                            </Menu.Items>
                        </Transition>
                    </Menu>
                    
                    <Menu as="div" className="relative inline-block text-left ">
                        <div>
                            <Menu.Button className="inline-flex w-full justify-center gap-x-1.5  px-3 py-2 text-md  text-gray-900  ">
                            <Link to="/about">About</Link>
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
                            <Menu.Items className="absolute left-0 z-10 mt-2 w-full origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                            <div className="py-1">
                                <Menu.Item>
                                {({ active }) => (
                                    <a
                                    href="#"
                                    className={classNames(
                                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                        'block px-4 py-2 text-md'
                                    )}
                                    >
                                    Founder
                                    </a>
                                )}
                                </Menu.Item>
                                <Menu.Item>
                                {({ active }) => (
                                    <a
                                    href="#"
                                    className={classNames(
                                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                        'block px-4 py-2 text-md'
                                    )}
                                    >
                                    Vision
                                    </a>
                                )}
                                </Menu.Item>
                                <Menu.Item>
                                {({ active }) => (
                                    <a
                                    href="#"
                                    className={classNames(
                                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                        'block px-4 py-2 text-md'
                                    )}
                                    >
                                    Mision
                                    </a>
                                )}
                                </Menu.Item>
                                <Menu.Item>
                                {({ active }) => (
                                    <a
                                    href="#"
                                    className={classNames(
                                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                        'block px-4 py-2 text-md'
                                    )}
                                    >
                                    Teams
                                    </a>
                                )}
                                </Menu.Item>
                            </div>
                            </Menu.Items>
                        </Transition>
                    </Menu>
                    <Link className='justify-center gap-x-1.5  px-3 py-2 text-md text-gray-900 'to="/contact">Contact</Link>
                    <Link className='justify-center gap-x-1.5  px-3 py-2 text-md text-gray-900 'to="/donate-now">Donate now</Link>
                    <a className='flex bg-green-600 rounded-full px-5 py-2 text-md max-w-xs text-center'>Download App</a>
                </div>
            </nav>
        </div>    
    )
}