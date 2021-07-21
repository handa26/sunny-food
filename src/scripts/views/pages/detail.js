import UrlParser from "../../routes/url-parser";
import { restaurantDetail } from "../templates/template-creator";
import RestaurantsSource from "../../data/restaurants-source";
import LikeButtonPresenter from "../../utils/like-button-initiator";

const Detail = {
  async render() {
    return `
      <div id="restaurant"></div>
      <div id="likeButtonContainer"></div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await RestaurantsSource.restaurantDetail(url.id);
    const restaurantContainer = document.querySelector("#restaurant");
    restaurantContainer.innerHTML = restaurantDetail(restaurant.restaurant);

    LikeButtonPresenter.init({
      likeButtonContainer: document.querySelector("#likeButtonContainer"),
      restaurant: {
        id: restaurant.restaurant.id,
        name: restaurant.restaurant.name,
        city: restaurant.restaurant.city,
        rating: restaurant.restaurant.rating,
        description: restaurant.restaurant.description,
        pictureId: restaurant.restaurant.pictureId,
      },
    });
  },
};

export default Detail;
