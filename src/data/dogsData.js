// import $ from 'jquery';
import axios from 'axios';

const getDogs = () => axios.get('https://random-dogs-api.herokuapp.com/dogs/23');

export default { getDogs };
