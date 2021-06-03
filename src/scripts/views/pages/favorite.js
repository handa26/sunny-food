import favoriteRestaurant from "../../data/database";
import { listRestaurantsTemplate } from "../templates/template-creator";

const Favorite = {
  async render() {
    return `
      <div class="favorites-content">
        <h2>Your Liked Restaurants</h2>
        <div id="favorites"></div>
      </div>
    `;
  },

  async afterRender() {
    const restaurants = await favoriteRestaurant.getAllRestaurants();
    const favoritesContainer = document.querySelector("#favorites");
    
    restaurants.forEach((restaurant) => {
      favoritesContainer.innerHTML += listRestaurantsTemplate(restaurant);
    });
  },
}

export default Favorite;
