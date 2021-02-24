import { useTheme } from 'next-themes';
import { Transition } from '@headlessui/react';
import React, { useState } from 'react';
import { ui } from './';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';

export default function NavBar() {
    const { theme, setTheme } = useTheme();
    const [accountMenuIsOpen, setAccountMenuIsOpen] = useState(false);
    const [mainMenuIsOpen, setMainMenuIsOpen] = useState(false);
    return (
        <nav className="bg-primary-main">
            <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                <div className="relative flex items-center justify-between h-16">
                    <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                        {/* Mobile menu button*/}
                        <button
                            type="button"
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                            aria-controls="mobile-menu"
                            aria-expanded="false"
                            onClick={() => setMainMenuIsOpen(!mainMenuIsOpen)}
                        >
                            <span className="sr-only">Open main menu</span>

                            {mainMenuIsOpen ? (
                                <svg
                                    className="block h-6 w-6"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            ) : (
                                <svg
                                    className="block h-6 w-6"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                </svg>
                            )}
                        </button>
                    </div>
                    <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                        {/* <div className="flex-shrink-0 flex items-center">
                            <img
                                className="block lg:hidden h-8 w-auto"
                                src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
                                alt="Workflow"
                            />
                            <img
                                className="hidden lg:block h-8 w-auto"
                                src="https://tailwindui.com/img/logos/workflow-logo-indigo-500-mark-white-text.svg"
                                alt="Workflow"
                            />
                        </div> */}
                        <div className="hidden sm:block sm:ml-6">
                            <div className="flex space-x-4">
                                {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
                                <a href="/" className="btn-nav-active">
                                    Dashboard
                                </a>
                                <a href="/" className="btn-nav">
                                    Reports
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                        {/* Profile dropdown */}
                        <div className="ml-3 relative">
                            <div>
                                <button
                                    className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                                    id="user-menu"
                                    aria-haspopup="true"
                                    onClick={() =>
                                        setAccountMenuIsOpen(!accountMenuIsOpen)
                                    }
                                >
                                    <span className="sr-only">
                                        Open user menu
                                    </span>
                                    <img
                                        className="h-8 w-8 rounded-full"
                                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixqx=SCfhMbnmcq&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                        alt=""
                                    />
                                </button>
                            </div>

                            <Transition
                                show={accountMenuIsOpen}
                                enter="transition ease-out duration-100"
                                enterFrom="transform opacity-0 scale-95"
                                enterTo="transform opacity-100 scale-100"
                                leave="transition ease-in duration-75"
                                leaveFrom="transform opacity-100 scale-100"
                                leaveTo="transform opacity-0 scale-95"
                            >
                                <ClickAwayListener
                                    onClickAway={() =>
                                        setAccountMenuIsOpen(false)
                                    }
                                >
                                    <div
                                        className="dark:bg-gray-900 origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5"
                                        role="menu"
                                        aria-orientation="vertical"
                                        aria-labelledby="user-menu"
                                    >
                                        <a
                                            href="/"
                                            className="menu-item"
                                            role="menuitem"
                                        >
                                            Your Profile
                                        </a>
                                        <a
                                            href="/"
                                            className="menu-item"
                                            role="menuitem"
                                        >
                                            Settings
                                        </a>
                                        <a
                                            href="/"
                                            className="menu-item"
                                            role="menuitem"
                                        >
                                            Sign out
                                        </a>
                                        <div
                                            className="menu-item cursor-pointer"
                                            onClick={() =>
                                                setTheme(
                                                    theme === 'dark'
                                                        ? 'light'
                                                        : 'dark'
                                                )
                                            }
                                        >
                                            <ui.Toggle
                                                text={
                                                    theme === 'dark'
                                                        ? 'Dark Mode'
                                                        : 'Light Mode'
                                                }
                                                active={theme === 'dark'}
                                            />
                                        </div>
                                    </div>
                                </ClickAwayListener>
                            </Transition>
                        </div>
                    </div>
                </div>
            </div>
            {/* Mobile menu, show/hide based on menu state. */}
            {mainMenuIsOpen && (
                <div className="sm:hidden" id="mobile-menu">
                    <div className="px-2 pt-2 pb-3 space-y-1">
                        {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
                        <a href="/" className="btn-nav-menu-active">
                            Dashboard
                        </a>
                        <a href="/" className="btn-nav-menu">
                            Reports
                        </a>
                    </div>
                </div>
            )}
        </nav>
    );
}
