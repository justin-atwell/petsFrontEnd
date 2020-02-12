import React, { useState } from 'react';
import DogBreedService from '../api/dog.breed.service';





const DogBreeds = (props) => {

    //const [breeds, setBreeds] = useState({});
    const [breeds, setBreeds] = useState([]);

    const getDogBreeds = () => {
        
        DogBreedService.getAllBreeds()
        .then(res => {
            //console.log(res);
            console.log(Object.keys(res.data.message));
            //console.log(Object.values(res.data.message));
            //const start = Object.keys(res.data.message);
            setBreeds(Object.keys(res.data.message));
            console.log(breeds);
        })
        .catch((error => {
            console.log(error);
        }));
    }
    return <div>
        <button onClick={getDogBreeds}>Get Dog Breeds</button>
        
        {/* <p type="text" value={breeds}></p>  */}
        <div>

        </div>
    </div>
}

export default DogBreeds;