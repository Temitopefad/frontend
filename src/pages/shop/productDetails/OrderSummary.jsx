import React from 'react'
import {useSelector} from 'react-redux'

const OrderSummary = () => {
    
    const products = useSelector((store) => store.cart.products);
    const {tax, taxRate, totalPrice, grandTotal, selectedItems} = useSelector((store) => store.cart)
  return (
    <div className='bg-primary-light mt-5 rounded text-base'>
        <div className='px-6 py-4 space-y-5'>
            <h2 className='text-x1 text-text-dark' >Order Summary</h2>
            <p>
                Selected Items: {selectedItems}
            </p>
        </div>
        
         </div>
  )
}

export default OrderSummary