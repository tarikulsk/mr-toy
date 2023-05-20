// eslint-disable-next-line no-unused-vars
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Route/AuthProvider/AuthProvider';


const Header = () => {


    const { user, logOut } = useContext(AuthContext);
    // console.log(user.displayName);
    // console.log(user.photoURL);

    const handleLogOut = () => {

        logOut()
            // eslint-disable-next-line no-unused-vars
            .then(result => {

            })
            .catch(error => {
                console.error(error)
            })

    }

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
                    {
                        user && <img className='h-8 w-8' title={user.displayName} src={user.photoURL} alt="" />
                    }
                    {user && <span className='text-pink-100'> <button onClick={handleLogOut}>Sign Out</button> </span>}
                </div>
                {/* <img src={user.photoURL} alt="" /> */}

            </div>
        </nav>
    );
};

export default Header;