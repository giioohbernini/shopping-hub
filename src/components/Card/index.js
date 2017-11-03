import React from 'react'
import cart from 'components/ShoppingCart/shopping-cart.svg'

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
          <img width='20px' height='20px' src={cart} alt='cart image' />
        </button>
      </div>
    </div>
  </div>
)

export default SingleCard
