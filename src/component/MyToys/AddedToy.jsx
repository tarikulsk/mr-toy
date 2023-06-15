import React from 'react';
import { Link } from 'react-router-dom';

const AddedToy = ({ toy }) => {
    console.log(toy);

    const handleDelete = _id => {

        console.log("deleting", _id);

        fetch(`http://localhost:5000/addtoy/${_id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.deletedCount > 0) {
                    alert('Delete Successfully')
                }

            })


    }

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
    // console.log(toy._id);
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
                    <Link to={`/update/${_id}`} className='btn'>Update</Link>
                    {/* <button onClick={() => handleUpdate(_id)} className='btn'>Update</button> */}
                    <button onClick={() => handleDelete(_id)} className='btn'>Delete</button>
                </div>
            </div>

        </div>
    );
};

export default AddedToy;