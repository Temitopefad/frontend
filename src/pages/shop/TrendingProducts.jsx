import React, { useState } from 'react';
import ProductCards from './productCards';
import Products from '../../data/products.json'




const TrendingProducts = () => {
    const [visibleProducts, setVisibleProducts] = useState(8);

    const loadMoreProducts = () => {
        setVisibleProducts(prevCount => prevCount + 4)
    }

  return (
    <section className='section__container product__container'>
        <h2 className='section__header'> Trending Products</h2>
            <p className='section__subheader mb-12' > Discover the Hottest picks: Elevate your
                 style with our curated colection of Trending women's fashion Products.</p>


            {/* products card */}
            <div className='mt-12'>

            
            <ProductCards products={Products.slice(0, visibleProducts)} />
           </div>

{/*load more products bntn */}
<div className='product__btn'>
  {
    visibleProducts  < Products.length && (
      <button className='btn' onClick={loadMoreProducts}>load More</button>
    )
  }
</div>


    </section>
  )
}

export default TrendingProducts