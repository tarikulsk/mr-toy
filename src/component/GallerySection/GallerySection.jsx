// eslint-disable-next-line no-unused-vars
import React from 'react';

const GallerySection = () => {
    return (
        <div className='w-9/12 m-auto mb-9 '>
            <h1 className='text-4xl text-center mb-5 font-bold text-purple-900 underline'>TOYS GALLERY</h1>
            <div className='grid md:grid-cols-4 gap-5'>
                <div className="card w-9/12 bg-base-100 shadow-xl">
                    <figure><img src="https://m.media-amazon.com/images/I/71Jxpqa0CvL._SX522_.jpg" alt="Shoes" /></figure>

                    <div className='px-3'>
                        <h2 >Captain Marvel!</h2>

                    </div>
                </div>
                <div className="card w-9/12 bg-base-100 shadow-xl">
                    <figure><img src="https://m.media-amazon.com/images/I/81yZWzLehdL._SX522_.jpg" alt="Shoes" /></figure>

                    <div className='px-3'>
                        <h2 >Captain America!</h2>

                    </div>
                </div>
                <div className="card w-9/12 bg-base-100 shadow-xl">
                    <figure><img src="https://m.media-amazon.com/images/I/81ynD++EycL._SX522_.jpg" alt="Shoes" /></figure>

                    <div className='px-3'>
                        <h2 >Hulk Action !</h2>

                    </div>
                </div>

                <div className="card w-9/12 bg-base-100 shadow-xl">
                    <figure><img src="https://m.media-amazon.com/images/I/615-toEy6LL._SX522_.jpg" alt="Shoes" /></figure>

                    <div className='px-3'>
                        <h2 >Iron man !</h2>

                    </div>
                </div>
                <div className="card w-9/12 bg-base-100 shadow-xl">
                    <figure><img src="https://m.media-amazon.com/images/I/71uhDcfs17L._SX522_.jpg" alt="Shoes" /></figure>

                    <div className='px-3'>
                        <h2 >Black Panther !</h2>

                    </div>
                </div>
                <div className="card w-9/12 bg-base-100 shadow-xl">
                    <figure><img src="https://m.media-amazon.com/images/I/71i9qpoBMeL._SX522_.jpg" alt="Shoes" /></figure>

                    <div className='px-3'>
                        <h2 >Spider man !</h2>

                    </div>
                </div>
                <div className="card w-9/12 bg-base-100 shadow-xl">
                    <figure><img src="https://m.media-amazon.com/images/I/41bBns-0s5L.jpg" alt="Shoes" /></figure>

                    <div className='px-3'>
                        <h2 >Thor Action !</h2>

                    </div>
                </div>
                <div className="card w-9/12 bg-base-100 shadow-xl">
                    <figure><img src="https://m.media-amazon.com/images/I/71z8+aptDsL._SX522_.jpg" alt="Shoes" /></figure>

                    <div className='px-3'>
                        <h2 >Thanos Figure !</h2>

                    </div>
                </div>


            </div>

        </div>
    );
};

export default GallerySection;