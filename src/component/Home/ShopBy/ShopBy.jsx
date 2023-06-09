// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';

const ShopBy = () => {

    // const [ironman, setIronman] = useState[""];
    // useEffect(() => {
    //     fetch('http://localhost:5000/ironman')
    //         .then(res => res.json())
    //         .then(data => console.log(data))
    // }, [])




    return (
        <div className='text-center mb-10 bg-white p-10'>
            <h1 className='text-3xl font-bold mb-8'>Shop By Category </h1>

            <div className='grid md:grid-cols-3 w-9/12 m-auto'>
                <div className="navbar w-9/12 bg-pink-50 text-center rounded">
                    {/* The button to open modal */}
                    <div className='grid grid-cols-1'>
                        <a href="#my_modal_8"> <img className='rounded' src="	https://m.media-amazon.com/images/I/71i9qpoBMeL._SX522_.jpg" alt="" /></a>
                        <h1>Spider Man</h1>
                    </div>

                    {/* Put this part before </body> tag */}
                    <div className="modal" id="my_modal_8">
                        <div className="modal-box">
                            <h3 className="font-bold text-lg">Hello!</h3>
                            <p className="py-4">This modal works with anchor links</p>
                            <div className="modal-action">
                                <a href="#" className="btn">Yay!</a>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="navbar w-9/12 bg-pink-50 text-center rounded">
                    {/* The button to open modal */}
                    <div className='grid grid-cols-1'>
                        <a href="#my_modal_8"> <img className='rounded' src="	https://m.media-amazon.com/images/I/71i9qpoBMeL._SX522_.jpg" alt="" /></a>
                        <h1>Spider Man</h1>
                    </div>

                    {/* Put this part before </body> tag */}
                    <div className="modal" id="my_modal_8">
                        <div className="modal-box">
                            <h3 className="font-bold text-lg">Hello!</h3>
                            <p className="py-4">This modal works with anchor links</p>
                            <div className="modal-action">
                                <a href="#" className="btn">Yay!</a>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="navbar w-9/12 bg-pink-50 text-center rounded">
                    {/* The button to open modal */}
                    <div className='grid grid-cols-1'>
                        <a href="#my_modal_8"> <img className='rounded' src="	https://m.media-amazon.com/images/I/71i9qpoBMeL._SX522_.jpg" alt="" /></a>
                        <h1>Spider Man</h1>
                    </div>

                    {/* Put this part before </body> tag */}
                    <div className="modal" id="my_modal_8">
                        <div className="modal-box">
                            <h3 className="font-bold text-lg">Hello!</h3>
                            <p className="py-4">This modal works with anchor links</p>
                            <div className="modal-action">
                                <a href="#" className="btn">Yay!</a>
                            </div>
                        </div>
                    </div>

                </div>

            </div>







        </div>
    );
};

export default ShopBy;
