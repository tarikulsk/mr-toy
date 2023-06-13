/* eslint-disable no-unused-vars */
import React from 'react';

const AddAToy = () => {

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        // const form = event.target.form;n
        const photoUrl = form.photoUrl.value;
        const toyName = form.toyName.value;
        const sellerName = form.sellerName.value;
        const sellerEmail = form.sellerEmail.value;
        const subcategory = form.subcategory.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const availableQuantity = form.availableQuantity.value;
        const description = form.description.value;

        const toy = { photoUrl, toyName, sellerName, sellerEmail, subcategory, price, rating, availableQuantity, description }
        console.log(toy);

        fetch('http://localhost:5000/addtoy', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(toy)
        })

            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    alert('Hurry !Toy Added Successfully!')
                    form.reset();
                }
            })

    }




    return (
        <div className='w-9/12 m-auto mb-10 '>


            <h1 className='text-center text-3xl font-bold'>Add a Toy</h1>

            <form onSubmit={handleSubmit} >
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Toy's Photos Link</span>
                    </label>
                    <input type="text" name='photoUrl' required placeholder="https://www.diufsiuksyuidalkudhuiayd.pnj" className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Toy Name</span>
                    </label>
                    <input type="text" name='toyName' required placeholder="Iron Man" className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Seller Name</span>
                    </label>
                    <input type="text" name='sellerName' required placeholder="Devid " className="input input-bordered" />
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Seller Email</span>
                    </label>
                    <input type="email" name='sellerEmail' required placeholder="sell@email.com" className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Subcategory</span>
                    </label>
                    <input type="text" name='subcategory' required placeholder="Subcategory" className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Price</span>
                    </label>
                    <input type="number" name='price' required placeholder="Price" className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Rating</span>
                    </label>
                    <input type="number" name='rating' required placeholder="Out of 5" className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Available Quantity</span>
                    </label>
                    <input type="number" name='availableQuantity' required placeholder="Quantity" className="input input-bordered" />
                </div>
                <div className="form-control mb-5">
                    <label className="label">
                        <span className="label-text">Description</span>
                    </label>
                    <input type="text" name='description' required placeholder="This toy is .." className="input input-bordered" />
                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-primary">Press to Add </button>
                </div>

                {/* <input className='btn justify-center' type="submit" value="Submit" /> */}

            </form>


        </div>
    );
};

export default AddAToy; 