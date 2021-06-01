import CONFIG from "../../globals/config";

const listRestaurantsTemplate = (restaurant) => `
  <div class="box-items" tabindex="0">
    <img src="${CONFIG.BASE_IMAGE}${restaurant.pictureId}" alt="${restaurant.name}-restaurant" />
    <div class="box-content">
      <h3><a href="${`/#/detail/${restaurant.id}`}">${restaurant.name}</a></h3>
      <span class="city">${restaurant.city}</span>
      <br/>
      <span class="rating">Rating: ${restaurant.rating}</span>
      <p class="description">${restaurant.description}</p>
    </div>
  </div>
`;

const restaurantDetail = (restaurant) => `
  <div>
    <h1>${restaurant.name}</h1>
  </div>
`;

export { listRestaurantsTemplate, restaurantDetail };
