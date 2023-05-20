// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Link } from 'react-router-dom';


const Header = () => {
    return (
        <nav>
            <div className="navbar grid grid-cols-3 text-white bg-blue-900 px-10 shadow-lg mb-1">
                <div>
                    <Link to={'/'}><img className='h-11' src="https://www.mrtoy.com.my/front/images/logo_sticky.png" alt="" /></Link>
                </div>
                <div className='gap-6'>
                    <Link to={'/'}>Home</Link>
                    <Link to={'/alltoys'}>All Toys</Link>
                    <Link to={'/mytoys'}>My Toys</Link>
                    <Link to={'/addtoy'}>Add A Toy</Link>
                    <Link to={'/blogs'}>Blogs</Link>

                </div>
                <div className='justify-end'>
                    <Link to={'/login'} >Login</Link>
                </div>

            </div>
        </nav>
    );
};

export default Header;