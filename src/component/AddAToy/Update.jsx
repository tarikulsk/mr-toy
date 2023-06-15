import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Update = () => {

    const update = useLoaderData();

    const handleUpdate = event => {
        event.preventDefault();
        const form = event.target;
        // const form = event.target.form;n
        const photoUrl = form.photoUrl.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const availableQuantity = form.availableQuantity.value;


        const toy = { photoUrl, price, rating, availableQuantity }
        console.log(toy);

        fetch(`http://localhost:5000/addtoy/${update._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(toy)
        })

            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    alert('Hurry !Toy Update Successfully!')
                    form.reset();
                }
            })

    }


    return (
        <div className='w-9/12 m-auto'>
            <h3 className='text-center text-3xl font-bold'>Update Toy Details for : {update.toyName} {update._id}</h3>

            <form onSubmit={handleUpdate} >
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Toy's Photos Link</span>
                    </label>
                    <input type="text" name='photoUrl' required placeholder="https://www.diufsiuksyuidalkudhuiayd.pnj" defaultValue={update?.photoUrl} className="input input-bordered" />
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Price</span>
                    </label>
                    <input type="number" name='price' required placeholder="Price" defaultValue={update?.price} className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Rating</span>
                    </label>
                    <input type="number" name='rating' required placeholder="Out of 5" defaultValue={update?.rating} className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Available Quantity</span>
                    </label>
                    <input type="number" name='availableQuantity' required placeholder="Quantity" defaultValue={update?.availableQuantity} className="input input-bordered" />
                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-primary">Update</button>
                </div>

                {/* <input className='btn justify-center' type="submit" value="Submit" /> */}

            </form>


        </div>
    );
};

export default Update;