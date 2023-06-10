// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';

// import { Link } from 'react-router-dom';

const ShopBy = () => {

    const [ironman, setIronman] = useState("");
    const [spiderman, setSpiderman] = useState("");
    const [galaxy, setGalaxy] = useState("");
    useEffect(() => {
        fetch('http://localhost:5000/ironman')
            .then(res => res.json())
            // .then(data => console.log(data))
            .then(data => setIronman(data))
    }, [])
    useEffect(() => {
        fetch('http://localhost:5000/spiderman')
            .then(res => res.json())
            // .then(data => console.log(data))
            .then(data => setSpiderman(data))
    }, [])
    useEffect(() => {
        fetch('http://localhost:5000/galaxy')
            .then(res => res.json())
            // .then(data => console.log(data))
            .then(data => setGalaxy(data))
    }, [])




    return (



        <div className='text-center mb-10 bg-white p-10'>
            <h1 className='text-3xl font-bold mb-8'>Shop By Category </h1>



            <div className='grid md:grid-cols-3 w-9/12 m-auto'>
                <div className="navbar w-9/12 bg-pink-50 text-center rounded">
                    {/* The button to open modal */}
                    <div className='grid grid-cols-1'>
                        <a href="#my_modal_8"> <img className='rounded' src="	https://m.media-amazon.com/images/I/71i9qpoBMeL._SX522_.jpg" alt="" /></a>
                        <h1>Iron Man</h1>
                    </div>
                    {/* Put this part before </body> tag */}
                    <div className="modal" id="my_modal_8">
                        <div className="modal-box grid md:grid-cols-2 gap-4 ">
                            <div className='border border-purple-400 rounded p-3'>
                                <figure><img src={ironman[0].photoUrl} alt="" /></figure>

                                <h3 className="font-bold text-lg">{ironman[0].toyName}</h3>
                                <p><span >Price: {ironman[0].price}</span></p>
                                <p><span >Price: {ironman[0].rating}</span></p>
                                <button className="py-1 px-3 rounded bg-red-600 text-white border-none">View details</button>
                            </div>
                            <div className='border border-purple-400 rounded p-3'>
                                <figure><img src={ironman[1].photoUrl} alt="" /></figure>

                                <h3 className="font-bold text-lg">{ironman[1].toyName}</h3>
                                <p><span >Price: {ironman[1].price}</span></p>
                                <p><span >Price: {ironman[1].rating}</span></p>
                                <button className="py-1 px-3 rounded bg-red-600 text-white border-none">View details</button>

                            </div>
                            <div className="modal-action">
                                <a href="#" className="btn">Yay!</a>
                            </div>
                        </div>

                    </div>





                </div>
                <div className="navbar w-9/12 bg-pink-50 text-center rounded">
                    {/* The button to open modal */}
                    <div className='grid grid-cols-1'>
                        <a href="#my_modal_9"> <img className='rounded' src="	https://m.media-amazon.com/images/I/71i9qpoBMeL._SX522_.jpg" alt="" /></a>
                        <h1>Spider Man</h1>
                    </div>


                    <div className="modal" id="my_modal_9">
                        <div className="modal-box grid md:grid-cols-2 gap-4 ">
                            <div className='border border-purple-400 rounded p-3'>
                                <figure><img src={spiderman[0].photoUrl} alt="" /></figure>

                                <h3 className="font-bold text-lg">{spiderman[0].toyName}</h3>
                                <p><span >Price: {spiderman[0].price}</span></p>
                                <p><span >Price: {spiderman[0].rating}</span></p>
                                <button className="py-1 px-3 rounded bg-red-600 text-white border-none">View details</button>
                            </div>
                            <div className='border border-purple-400 rounded p-3'>
                                <figure><img src={spiderman[1].photoUrl} alt="" /></figure>

                                <h3 className="font-bold text-lg">{spiderman[1].toyName}</h3>
                                <p><span >Price: {spiderman[1].price}</span></p>
                                <p><span >Price: {spiderman[1].rating}</span></p>
                                <button className="py-1 px-3 rounded bg-red-600 text-white border-none">View details</button>

                            </div>
                            <div className="modal-action">
                                <a href="#" className="btn">Yay!</a>
                            </div>
                        </div>

                    </div>



                </div>
                <div className="navbar w-9/12 bg-pink-50 text-center rounded">
                    {/* The button to open modal */}
                    <div className='grid grid-cols-1'>
                        <a href="#my_modal_10"> <img className='rounded' src="	https://m.media-amazon.com/images/I/71i9qpoBMeL._SX522_.jpg" alt="" /></a>
                        <h1>Galaxy</h1>
                    </div>


                    <div className="modal" id="my_modal_10">
                        <div className="modal-box grid md:grid-cols-2 gap-4 ">
                            <div className='border border-purple-400 rounded p-3'>
                                <figure><img src={galaxy[0].photoUrl} alt="" /></figure>

                                <h3 className="font-bold text-lg">{galaxy[0].toyName}</h3>
                                <p><span >Price: {galaxy[0].price}</span></p>
                                <p><span >Price: {galaxy[0].rating}</span></p>
                                <button className="py-1 px-3 rounded bg-red-600 text-white border-none">View details</button>
                            </div>
                            <div className='border border-purple-400 rounded p-3'>
                                <figure><img src={galaxy[1].photoUrl} alt="" /></figure>

                                <h3 className="font-bold text-lg">{galaxy[1].toyName}</h3>
                                <p><span >Price: {galaxy[1].price}</span></p>
                                <p><span >Price: {galaxy[1].rating}</span></p>
                                <button className="py-1 px-3 rounded bg-red-600 text-white border-none">View details</button>

                            </div>
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
