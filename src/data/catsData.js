import axios from 'axios';

const getCats = () => axios.get('https://random-dogs-api.herokuapp.com/cats/23');

export default { getCats };
