import React from 'react'
import cart from './shopping-cart.svg'
import PropTypes from 'prop-types'

import './shoppingcart.sass'

const ShoppingCart = ({ qtdCart = 0, handleClick }) => (
  <div className='cart' onClick={handleClick} >
    <img width='20px' height='20px' src={cart} />
    <span>{qtdCart}</span>
  </div>
)

ShoppingCart.propTypes = {
  qtdCart: PropTypes.number,
  handleClick: PropTypes.func.isRequired
}

export default ShoppingCart
