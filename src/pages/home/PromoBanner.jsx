import React from 'react'

const PromoBanner = () => {
  return (
    <section className='section__banner__container'>
        <div className='banner__card'>
            <span><i className="ri-truck-line"></i>  
            </span>
            <h4>Free Delivery</h4>
            <p>Offers conveniece and the ability to shop from anywhere anytim
            </p>
        </div>
    
        <div className='banner__card'>
            <span><i className="ri-money-dollar-circle-line"></i> 
            </span>
            <h4>100% guarantee</h4>
            <p>Have a review system where customers can share feedbacks
            </p>
        </div>
        
        <div className='banner__card'>
            <span><i className="ri-user-voice-line"></i>  
            </span>
            <h4>strong support</h4>
            <p> offers customers support
            </p>
        </div>
    </section>
  )
}

export default PromoBanner