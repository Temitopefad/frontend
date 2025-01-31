import { createBrowserRouter} from 'react-router-dom';
import App from '../App'; // Import App component
import Home from '../pages/home/home';
import CategoryPage from '../pages/category/CategoryPage';
import Search from '../pages/search/Search';
import ShopPage from '../pages/shop/ShopPage';
import SingleProduct from '../pages/shop/productDetails/SingleProduct';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />, // App component serves as the main wrapper
    children: [
      { path: '/', element: <Home/> }, 
      { path: '/categories/:categoryName', element: <CategoryPage/> },
      { path: '/search', element: <Search/> },
      { path:  '/shop', element: <ShopPage/> },
      {  path:  'shop',  element: <SingleProduct/>},
    ],
  },
]);

export default router;
