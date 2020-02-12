import axios from 'axios';

export default class DogBreedService {

    static DogBreedAxios = axios.create({
        baseURL: 'https://dog.ceo/api'
    })

    static getAllBreeds() {
        return this.DogBreedAxios.get('/breeds/list/all');
    }
}