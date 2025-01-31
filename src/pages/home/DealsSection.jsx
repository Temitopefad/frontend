import React from 'react'
import dealsImg from '../../assets/deals.png'


const DealsSection = () => {
  return (
    <section className='section__container deals__container'>
        
 <div className='deals__image'>
<img src={dealsImg} alt=''></img>
  </div>
  <div className='deals__content'>
    <h5> Get up To 20% Discount</h5>
    <h4>Deals Of The Month</h4>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat pariatur enim veniam veritatis, voluptate, voluptatem eveniet consequatur magnam vitae voluptatibus nulla quidem ipsum aut libero aperiam 
        fugiat ratione eius possimus!</p>
        <div className='deals__countdown flex-wrap'>
            <div className='deals__countdown__card'>
            <h4> 14 </h4>
            <p>Days</p>
            </div>
            <div className='deals__countdown__card'>
            <h4> 21 </h4>
            <p>hours</p>
            </div>
            <div className='deals__countdown__card'>
            <h4> 15 </h4>
            <p>mins</p>
            </div>
            <div className='deals__countdown__card'>
            <h4> 09</h4>
            <p>secs</p>
            </div>
</div>
        </div>
  
</section>
  )
}
 
export default DealsSection