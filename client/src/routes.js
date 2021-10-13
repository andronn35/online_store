import { ADMIN_ROUTE, BASKET_ROUTE, DEVICE_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE } from "./components/utils/consts";
import Admin from "./pages/Admin/Admin";
import Auth from "./pages/Auth/Auth";
import Basket from "./pages/Basket/Basket";
import DevicePage from "./pages/DevicePage/DevicePage";
import Shop from "./pages/Shop/Shop";


export const authRoutes = [
  {
    path: ADMIN_ROUTE,
    Component: Admin
  },
  {
    path: BASKET_ROUTE + '/:id',
    Component: Basket
  }
]

export const publicRoutes = [
  {
    path: SHOP_ROUTE,
    Component: Shop
  },
  {
    path: LOGIN_ROUTE,
    Component: Auth
  },
  {
    path: REGISTRATION_ROUTE,
    Component: Auth
  },
  {
    path: DEVICE_ROUTE + '/:id',
    Component: DevicePage
  }
]