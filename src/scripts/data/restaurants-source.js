import API_ENDPOINT from "../globals/api-endpoint";

class RestaurantsSource {
  static async listRestaurants() {
    const response = await fetch(API_ENDPOINT.RESTAURANTS);
    const responseJSON = await response.json();
    return responseJSON;
  }

  static async restaurantDetail(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    const responseJSON = await response.json();
    return responseJSON;
  }
}

export default RestaurantsSource;
