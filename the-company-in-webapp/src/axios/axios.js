import Axios from  'axios-observable';

const instance = Axios.create({
    baseURL: 'http://localhost:3003/api'
})

export default instance;
