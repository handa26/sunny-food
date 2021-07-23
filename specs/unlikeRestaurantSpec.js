/* eslint-disable no-undef */
import favoriteRestaurant from "../src/scripts/data/database";

import * as TestFactories from "./helpers/testFactories";

const addLikeButtonContainer = () => {
  document.body.innerHTML = '<div id="likeButtonContainer"></div>';
};

describe('Unliking a restaurant', () => {
  beforeEach(async () => {
    addLikeButtonContainer();
    await favoriteRestaurant.putRestaurant({ id: 1 });
  });

  afterEach(async () => {
    await favoriteRestaurant.deleteRestaurant(1);
  });

  it('should display unlike widget when the restaurant has been liked', async () => {
    await TestFactories.createButtonLikePresenterWithRestaurant({ id: 1 });

    expect(document.querySelector('[aria-label="unlike this restaurant"]'))
      .toBeTruthy();
  });

  it('should not display like widget when the restaurant has been liked', async () => {
    await TestFactories.createButtonLikePresenterWithRestaurant({ id: 1 });

    expect(document.querySelector('[aria-label="like this restaurant"]'))
      .toBeFalsy();
  });

  it('should be able to remove liked restaurant from the list', async () => {
    await TestFactories.createButtonLikePresenterWithRestaurant({ id: 1 });

    document.querySelector('[aria-label="unlike this restaurant"]').dispatchEvent(new Event('click'));

    expect(await favoriteRestaurant.getAllRestaurants()).toEqual([]);
  });

  it('should not throw error if the restaurant is not in the list', async () => {
    await TestFactories.createButtonLikePresenterWithRestaurant({ id: 1 });

    await favoriteRestaurant.deleteRestaurant(1);

    document.querySelector('[aria-label="unlike this restaurant"]').dispatchEvent(new Event('click'));

    expect(await favoriteRestaurant.getAllRestaurants()).toEqual([]);
  })
})
