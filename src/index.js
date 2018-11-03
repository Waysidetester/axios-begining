import $ from 'jquery';
import 'bootstrap';
import './index.scss';
import dogsData from './data/dogsData';
import catsData from './data/catsData';
import dogComponent from './components/dogComponent';
import catComponent from './components/catComponent';

$('#dogs').append('<p>I am linked</p>');

dogsData.getDogs()
  .then((data) => {
    dogComponent.createDogCards(data.data.dogs);
  })
  .catch((error) => {
    console.error(error);
  });

catsData.getCats()
  .then((data) => {
    catComponent.createCatCards(data.data.cats);
  })
  .catch((error) => {
    console.error(error);
  });
