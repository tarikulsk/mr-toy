// eslint-disable-next-line no-unused-vars
import React from 'react';

const Footer = () => {
    return (
        <div>
            <footer className="bg-gray-800 py-4">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row items-center justify-between">
                        <div className="text-white text-center md:text-left mb-4 md:mb-0">
                            &copy; 2023 My Website. All rights reserved.
                        </div>
                        <ul className="flex items-center space-x-4">
                            <li>
                                <a
                                    href="#"
                                    className="text-white hover:text-gray-300 transition duration-300"
                                >
                                    Home
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="text-white hover:text-gray-300 transition duration-300"
                                >
                                    About
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="text-white hover:text-gray-300 transition duration-300"
                                >
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </footer>

        </div>
    );
};

export default Footer;