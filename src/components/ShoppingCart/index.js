import React from 'react'
import cart from './shopping-cart.svg'

import './shoppingcart.sass'

const ShoppingCart = ({ qtdCart = '', handleClick }) => (
  <div className='cart' onClick={handleClick} >
    <img width='20px' height='20px' src={cart} />
    <span>{qtdCart}</span>
  </div>
)

export default ShoppingCart
