import UrlParser from "../../routes/url-parser";
import { restaurantDetail } from "../templates/template-creator";
import RestaurantsSource from "../../data/restaurants-source";

const Detail = {
  async render() {
    return `
      <div id="restaurant"></div>
    `
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = RestaurantsSource.restaurantDetail(url.id);
    const restaurantContainer = document.querySelector("#restaurant");
    restaurantContainer.innerHTML = restaurantDetail(restaurant);
  },
}

export default Detail;
