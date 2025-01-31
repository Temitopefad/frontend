import React, { useState, useEffect } from 'react';
import productsData from '../../data/products.json';
import ProductCards from './productCards';
import ShopFiltering from './ShopFiltering';

const filters = {
  categories: ['all', 'accessories', 'dress', 'jewellry', 'cosmetics'],
  colors: ['all', 'black', 'red', 'gold', 'blue', 'silver', 'biege', 'green'],
  priceRanges: [
    { label: 'under $50', min: 0, max: 50 },
    { label: '$50 - $100', min: 50, max: 100 },
    { label: '$100 - $200', min: 100, max: 200 },
    { label: '$200 and above', min: 200, max: Infinity },
  ],
};

const ShopPage = () => {
  const [products, setProducts] = useState(productsData);
  const [filtersState, setFiltersState] = useState({
    category: 'all',
    color: 'all',
    priceRange: '',
  });

  const applyFilters = () => {
    let filteredProducts = productsData;

    if (filtersState.category !== 'all') {
      filteredProducts = filteredProducts.filter(
        (product) => product.category === filtersState.category
      );
    }

    if (filtersState.color !== 'all') {
      filteredProducts = filteredProducts.filter(
        (product) => product.color === filtersState.color
      );
    }

    if (filtersState.priceRange) {
      const [minPrice, maxPrice] = filtersState.priceRange
        .split('-')
        .map(Number);
      filteredProducts = filteredProducts.filter(
        (product) => product.price >= minPrice && product.price <= maxPrice
      );
    }

    setProducts(filteredProducts);
  };

  useEffect(() => {
    applyFilters();
  }, [filtersState]);

  const clearFilters = () => {
    setFiltersState({
      category: 'all',
      color: 'all',
      priceRange: '',
    });
  };

  return (
    <>
      <section className="section__container bg-primary-light">
        <h2 className="section__header capitalize">Shop Page</h2>
        <p className="section__subheader">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum corrupti repellendus
          consequatur! Laboriosam, commodi magnam?
        </p>
      </section>

      <section className="section__container">
        <div className="flex flex-col md:flex-row md:gap-12 gap-8">
          {/* Left side */}
                  <ShopFiltering 
                  filters= {filters}
                   filtersState={filtersState} 
                  setFiltersState={setFiltersState}
                  clearFilters={clearFilters} 
                  />

          {/* Right side */}
          <div>
            <h3 className="text-xl font-medium mb-4">Products Available{products.length}</h3>
            <ProductCards products={products} />
          </div>
        </div>
      </section>
    </>
  );
};

export default ShopPage;
