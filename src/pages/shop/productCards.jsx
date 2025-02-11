import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import RatingStars from "../../components/RatingStars";
import { addToCart } from "../../Redux/features/cart/cartSlice";

const ProductCards = ({ products }) => {
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {products.map((product) => (
        <div key={product.id} className="product__card">
          <div className="relative w-full group">
            <Link to={`/shop/${product.id}`}>
              <img 
                src={product.image} 
                alt={product.name} 
                onError={(e) => {
                  if (e.target.src !== "/fallback-image.jpg") {
                    e.target.src = "/fallback-image.jpg";
                  }
                }} 
              />
            </Link>

            <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleAddToCart(product);
                }}
              >
                <i className="ri-shopping-cart-line bg-primary p-1.5 text-white hover:bg-primary-dark"></i>
              </button>
            </div>
          </div>

          <div className="text-center mt-3">
            <h4>{product.name}</h4>
            <p>
              ${product.price} {product.oldPrice ? <s>${product.oldPrice}</s> : null}
            </p>
            <RatingStars rating={product.rating} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductCards;
