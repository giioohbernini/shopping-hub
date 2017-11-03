import React from 'react'

import './checkout.sass'

const Checkout = ({ status = 'off', handleClick, cart, handleCheckout }) => {
  let total = 0

  cart.map((item) => {
    total += item.followers
  })

  return (
    <div className={`overlay -${status}`}>
      <section className='main'>
        <div className='card-content'>
          <div className='card -noshadow'>
            <div className='table-content'>
              <table className='table'>
                <thead>
                  <tr>
                    <td />
                    <td>Produto</td>
                    <td>Preço</td>
                  </tr>
                </thead>
                <tbody id='tabela'>
                  {cart.map((member, index) => (
                    <tr key={index}>
                      <td>
                        <img width='50px' src={member.avatar} />
                      </td>
                      <td>{member.login}</td>
                      <td>{member.followers}</td>
                    </tr>
                  ))}
                  <tr>
                    <td>Total</td>
                    <td />
                    <td>R$: {total}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className='card -noshadow'>
            <button className='btn -left' onClick={handleClick}>Voltar</button>
            <button className='btn -right' onClick={handleCheckout}>Finalizar Compra</button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Checkout
