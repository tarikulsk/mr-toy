import React from 'react';

const AddedToy = ({ toy }) => {
    console.log(toy);

    const { _id,
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
            <div className="card grid md:grid-cols-3 gap-4 w-9/12 h-72 m-auto bg-base-100 shadow-xl">
                <figure><img className='h-3/12 w-3/12' src={photoUrl} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{toyName}</h2>
                    <p><span className='font-bold text-sm'>Seller:</span> {sellerName}</p>
                    <p><span className='font-bold text-sm'>Sub Category:</span> {subcategory}</p>
                    <p><span className='font-bold text-sm'>Quantity:</span> {availableQuantity}</p>
                    <p><span className='font-bold text-sm'>Price: </span>$ {price}</p>
                    <button className="py-1 px-3 rounded bg-red-600 text-white border-none">View details</button>

                </div>
                <div className='grid grid-cols-1 gap-10 m-auto'>
                    <button className='btn'>Update</button>
                    <button className='btn'>Delete</button>
                </div>
            </div>

        </div>
    );
};

export default AddedToy;