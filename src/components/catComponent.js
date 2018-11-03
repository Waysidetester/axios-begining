import $ from 'jquery';


const createCatCards = (cats) => {
  let newString = '';
  cats.forEach((cat) => {
    newString += `
      <div class="card u-clearfix">
        <div class="card-body">
          <span class="card-number card-circle subtle">$${cat['add-on-price'].toFixed(0)}</span>
          <span class="card-author subtle"></span>
          <h2 class="card-title">${cat.name}</h2>
          <span class="card-description subtle">${cat.specialSkill}</span>
          <div class="card-read"><span class="subtle">Color</span>${cat.color}</div>
        </div>
        <img src="${cat.gif}" alt="${cat.name}" class="card-media" />
      </div>`;
  });
  $('#cats').html(newString);
};

export default { createCatCards };
