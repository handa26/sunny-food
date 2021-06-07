import CONFIG from "../../globals/config";

const listRestaurantsTemplate = (restaurant) => `
  <div class="box-items" tabindex="0">
    <a href="${`/#/detail/${restaurant.id}`}">
      <img src="${CONFIG.BASE_IMAGE}${restaurant.pictureId}" alt="${restaurant.name}-restaurant" />
      <div class="box-content">
        <h3>${restaurant.name}</h3>
        <span class="city">${restaurant.city}</span>
        <br/>
        <span class="rating">Rating: ${restaurant.rating}</span>
        <p class="description">${restaurant.description}</p>
      </div>
    </a>
  </div>
`;

const restaurantDetail = (restaurant) => `
  <div class="restaurant-detail">
    <div class="restaurant-img__wrapper">
      <img 
        src="${CONFIG.BASE_IMAGE}${restaurant.pictureId}" 
        alt="${restaurant.name}-restaurant"
        class="restaurant-img"
      />
      <div class="restaurant-rating__wrapper">
        <p>⭐️<span>${restaurant.rating}</span></p>
      </div>
    </div>
    <h3 class="restaurant-detail__name" tabindex="0">${restaurant.name}</h3>
    <span class="restaurant-detail__location">
      ${restaurant.city} | ${restaurant.address}
    </span>
    <div class="restaurant-detail__wrapper">
      <div class="restaurant-detail__desc" tabindex="0">
        <h4>Description</h4>
        <p>${restaurant.description}</p>
      </div>
      
      <div class="restaurant-detail__details" tabindex="0">
        <h4>Details</h4>
        <div class="detail-wrapper">
          <div class="cuisines">
            <h5>Cuisines</h5>
            ${restaurant.categories.map(
              (category) => `
              <span>${category.name}</span>
            `
            )}
          </div>
          <div class="features">
            <h5>Features</h5>
            <p>Reservations, Private Dining, Seating, Parking Available, Wheelchair Accessible</p>
          </div>
          <div class="prices">
            <h5>Price ranges</h5>
            <p>IDR 2,438,000 - IDR 2,787,000<p>
          </div>
        </div>
      </div>
      <div class="restaurant-detail__menu" tabindex="0">
        <h4>Menu</h4>
        <div class="menu-wrapper">
          <div class="foods">
            <h5>Foods</h5>
            ${restaurant.menus.foods.map(
              (food) => `
              <span>${food.name}</span>
            `
            )}
          </div>
          <div class="drinks">
            <h5>Drinks</h5>
            ${restaurant.menus.drinks.map(
              (drink) => `
              <span>${drink.name}</span>
            `
            )}
          </div>
        </div>
      </div>
    </div>
		<div class="restaurant-detail__reviews">
        <h4>Reviews</h4>
        <div class="reviews-wrapper">
					${restaurant.customerReviews.map((review) => `
						<div class="user-card">
							<div class="user-profile">
								<div class="user-avatar"></div>
								<p>${review.name}</p>
								<span>13 reviews</span>
							</div>
							<div class="review-content">
								<span>Reviewed ${review.date}</span>
								<p>${review.review}</p>
							</div>
						</div>
						<hr>
					`).join("")}
        </div>
      </div>
  </div>
`;

const likeButtonTemplate = () => `
  <button aria-label="like this movie" id="likeButton" class="like">
    <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const likedButtonTemplate = () => `
  <button aria-label="unlike this movie" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  listRestaurantsTemplate,
  restaurantDetail,
  likeButtonTemplate,
  likedButtonTemplate,
};
