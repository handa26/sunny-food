import Restaurants from "../views/pages/restaurants";
import Detail from "../views/pages/detail";

const routes = {
  "/": Restaurants,
  "/restaurants": Restaurants,
  "/detail/:id": Detail,
};

export default routes;
