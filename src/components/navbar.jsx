import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useLogoutUserMutation } from "../Redux/features/auth/authApi";
import { addToCart, decreaseQuantity } from "../Redux/features/cart/cartSlice";
import CartModal from "../pages/shop/CartModal";
import avatarImg from "../assets/avatar.png";

const Navbar = () => {
    // const products = useSelector((state) => state.cart.products);
    const products = useSelector((state) => {
        console.log("Updated Cart:", state.cart.products);
        return state.cart.products;
    });
    
    const cartCount = products.reduce((total, product) => total + product.quantity, 0);
    const [isCartOpen, setIsCartOpen] = useState(false);
    const dispatch = useDispatch();
    const { user } = useSelector((state) => state.auth);
    const [logoutUser] = useLogoutUserMutation();
    const navigate = useNavigate();

    const handleCartToggle = () => setIsCartOpen(!isCartOpen);
    const [isDropDownOpen, setIsDropDownOpen] = useState(false);
    const handleDropDownToggle = () => setIsDropDownOpen(!isDropDownOpen);

    const handleIncrease = (productId) => {
        dispatch(addToCart({ id: productId })); 
    };
    
    const handleDecrease = (productId) => {
        dispatch(decreaseQuantity(productId));
    };
    
    const handleLogout = async () => {
        try {
            await logoutUser().unwrap();
            dispatch(logoutUser());
            navigate("/");
        } catch (error) {
            console.error("Logout failed:", error);
        }
    };

    return (
        <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
            <nav className="max-w-screen-2xl mx-auto px-4 flex justify-between items-center py-3">
                <ul className="nav__links flex space-x-4">
                    <li className="link"><Link to="/">Home</Link></li>
                    <li className="link"><Link to="/shop">Shop</Link></li>
                    <li className="link"><Link to="/pages">Pages</Link></li>
                    <li className="link"><Link to="/contact">Contact</Link></li>
                </ul>

                <div className="nav__logo text-xl font-bold">
                    <Link to="/">Tiara's<span className="text-primary">.</span></Link>
                </div>

                <div className="nav__icons relative flex space-x-4">
                    <Link to="/search">
                        <i className="ri-search-line text-lg"></i>
                    </Link>
                    
                    
                    <button className="cart-icon" onClick={handleCartToggle}>
  <i className="ri-shopping-bag-line text-lg"></i>
  {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
</button>

                    {user ? (
                        <>
                            <img
                                onClick={handleDropDownToggle}
                                src={user?.profileImage || avatarImg}
                                alt=""
                                className="w-8 h-8 rounded-full cursor-pointer"
                            />
                            {isDropDownOpen && (
                                <div className="absolute right-0 mt-3 p-4 w-48 bg-white border rounded-lg shadow-lg z-50">
                                    <ul className="font-medium space-y-4 p-2">
                                        <li><Link to="/dashboard" className="dropdown-items">Dashboard</Link></li>
                                        <li><Link to="/logout" onClick={handleLogout} className="dropdown-items">Logout</Link></li>
                                    </ul>
                                </div>
                            )}
                        </>
                    ) : (
                        <Link to="/login">
                            <i className="ri-user-line text-lg"></i>
                        </Link>
                    )}
                </div>
            </nav>

            {isCartOpen && (
                <CartModal 
                    products={products} 
                    isOpen={isCartOpen} 
                    onClose={handleCartToggle} 
                    onIncrease={handleIncrease} 
                    onDecrease={handleDecrease}
                />
            )}
        </header>
    );
};

export default Navbar;
