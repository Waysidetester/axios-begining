import $ from 'jquery';
import 'bootstrap';
import './index.scss';
import dogsData from './data/dogsData';
import catsData from './data/catsData';

$('#dogs').append('<p>I am linked</p>');

dogsData.getDogs()
  .then((data) => {
    console.log(data.data);
  })
  .catch((error) => {
    console.error(error);
  });

catsData.getCats()
  .then((data) => {
    console.log(data.data);
  })
  .catch((error) => {
    console.error(error);
  });
