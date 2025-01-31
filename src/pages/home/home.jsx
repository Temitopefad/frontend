import React from 'react'
import Banner from '../banner'
import Categories from './categories'
import HeroSection from './heroSection'
import TrendingProducts from '../shop/TrendingProducts'
import DealsSection from './DealsSection'
import PromoBanner from './PromoBanner'
import Blogs from '../blogs/Blogs'
const Home = () => {
  return (
    <>
    <Banner/>
    <Categories/>
    <HeroSection/>
    <TrendingProducts/>
    <DealsSection/>
    <PromoBanner/>
    <Blogs/>
    
    </>
  )
}
export default Home