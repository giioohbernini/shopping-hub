import React from 'react'
import cart from 'components/ShoppingCart/shopping-cart.svg'
import PropTypes from 'prop-types'

const SingleCard = ({ avatar, name, price, shoppingHandler }) => (
  <div className='card -item'>
    <div className='left'>
      <img width='100%' src={avatar} alt='' />
    </div>
    <div className='right'>
      <div className='top'>
        <h2>{name}</h2>
        <h3>R$: {price}</h3>
      </div>
      <div className='bottom'>
        <button className='btn' onClick={shoppingHandler(avatar, name, price)}>
          <img src={cart} alt='cart image' />
        </button>
      </div>
    </div>
  </div>
)

SingleCard.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  shoppingHandler: PropTypes.func.isRequired
}

export default SingleCard
