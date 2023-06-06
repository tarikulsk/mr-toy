// eslint-disable-next-line no-unused-vars
import React from 'react';

const Toy = ({ toy }) => {
    console.log(toy);
    const { id,
        photoUrl
        , toyName
        , sellerName
        , sellerEmail
        , price
        , rating
        , description,
        subcategory,
        availableQuantity
    } = toy;
    return (
        <div>
            <div className="card  h-6/12 bg-base-100 shadow-xl">
                <figure><img src={photoUrl} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{toyName}</h2>
                    <p><span className='font-bold text-sm'>Seller:</span> {sellerName}</p>
                    <p><span className='font-bold text-sm'>Sub Category:</span> {subcategory}</p>
                    <p><span className='font-bold text-sm'>Quantity:</span> {availableQuantity}</p>
                    <p><span className='font-bold text-sm'>Price: </span>$ {price}</p>
                    <button className="py-1 px-3 rounded bg-red-600 text-white border-none">View details</button>

                </div>
            </div>

        </div>
    );
};

export default Toy;