// eslint-disable-next-line no-unused-vars
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import AddedToy from './AddedToy';
// import AddAToy from '../AddAToy/AddAToy';

const MyToys = () => {
    const addedToy = useLoaderData()
    return (
        <div className=' gap-5'>
            {/* <h1>My Toys Pages {addedToy.length}</h1> */}
            {


                addedToy.map(toy => <AddedToy
                    key={toy._id}
                    toy={toy}
                >

                </AddedToy>)
            }

        </div>
    );
};

export default MyToys;
<h1>My Toys Pages</h1>