// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div >


            <div className="hero min-h-screen bg-base-200" style={{ backgroundImage: "url('https://freepngimg.com/thumb/hero/150767-toy-superhero-marvel-hq-image-free.png')" }}>
                <div className="hero-content flex-col ">

                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <h1 className="text-3xl text-center mt-3 text-blue-00 font-bold"> Login now!</h1>
                        <form className="card-body">
                            {/* onSubmit={handleLogin} */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' required placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input name='password' placeholder="password" className="input input-bordered" />


                                {/* type={show ? 'text' : 'password'}
                                <p onClick={() => { setShow(!show) }}> <small>
                                    {
                                        show ? <span>Hide Password</span> : <span>Show Password</span>
                                    }
                                </small> </p> */}

                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                        </form>

                        {/* <p className='text-center'>{error}</p> */}
                        <br />
                        <p className='text-center'>If You are a New User ? <Link to={'/register'} className='btn-link'>Register</Link> </p>
                        <hr />
                        <div className='mt-5 p-5 text-center '>
                            <h4 className='text-2xl'>Login With </h4>

                            <div className='flex mt-3 justify-around'>
                                <div >

                                    <button><img className='h-12 w-12' src="https://cdn.freebiesupply.com/logos/large/2x/google-icon-logo-png-transparent.png" alt="" /></button>

                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    );
};

export default Login;