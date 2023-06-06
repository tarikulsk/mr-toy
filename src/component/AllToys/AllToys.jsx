// eslint-disable-next-line no-unused-vars
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Toy from '../Toy/Toy';

const AllToys = () => {

    const toys = useLoaderData()
    console.log(toys);

    return (
        <div className='grid md:grid-cols-4 gap-5 p-10'>

            {
                toys.map(toy => <Toy
                    key={toy.id}
                    toy={toy}
                ></Toy>)
            }
        </div>
    );
};

export default AllToys; <h1>This All Toys Pages.</h1>