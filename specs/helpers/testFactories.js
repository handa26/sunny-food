/* eslint-disable no-undef */
import LikeButtonInitiator from "../../src/scripts/utils/like-button-initiator";

const createButtonLikePresenterWithRestaurant = async (restaurant) => {
  await LikeButtonInitiator.init({
    likeButtonContainer: document.querySelector("#likeButtonContainer"),
    restaurant,
  })
};

export { createButtonLikePresenterWithRestaurant };
