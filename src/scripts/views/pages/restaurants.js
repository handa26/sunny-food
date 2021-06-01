import RestaurantsSource from "../../data/restaurants-source";
import { listRestaurantsTemplate } from "../templates/template-creator";

const Restaurants = {
  async render() {
    return `
      <div id="restaurants"></div>
    `;
  },

  async afterRender() {
    const restaurants = await RestaurantsSource.listRestaurants();
    const restaurantsContainer = document.querySelector("#restaurants");
    restaurants.restaurants.forEach((restaurant) => {
      restaurantsContainer.innerHTML += listRestaurantsTemplate(restaurant);
    }); 
  }
}

export default Restaurants;
