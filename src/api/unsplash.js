import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com/',
    headers:{
        Authorization: 'Client-ID 2e6c1d33029d9fd7b2c7f96c9f87b20c8e3279b5619c9ec9728cf26cb892d014'
    }
});