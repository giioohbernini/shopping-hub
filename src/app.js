'use strict'

import React, { PureComponent } from 'react'
import CardSection from 'components/CardSection'
import Search from 'components/Search'
import ShoppingCart from 'components/ShoppingCart'
import Checkout from 'components/Checkout'

import './css/style.sass'

class App extends PureComponent {
  constructor () {
    super()
    this.state = {
      members: [],
      isFetching: false,
      cart: [],
      checkoutStatus: 'off'
    }

    this.handleCheckout = () => {
      this.setState({
        members: [],
        cart: [],
        checkoutStatus: 'off'
      })
    }

    this.handleStatusCheckout = status => () => {
      this.setState({ checkoutStatus: status })
      status === 'on'
        ? document.body.style.overflowY = 'hidden'
        : document.body.style.overflowY = 'auto'
    }

    this.shoppingHandler = (avatar, login, followers) => () => {
      this.setState({
        cart: [
          ...this.state.cart,
          {
            avatar,
            login,
            followers
          }
        ]
      })
    }

    this.handleSearch = (e) => {
      const value = e.target.value
      const keyCode = e.witch || e.keyCode
      const ENTER = 13

      if (keyCode === ENTER) {
        this.setState({ isFetching: true, members: false })

        fetch(this.getApiOrgMembers(value))
          .then(data => data.json())
          .then(res => {
            res.map(value => {
              fetch(value.url)
                .then(valueData => valueData.json())
                .then(valueRes => {
                  this.setState({
                    members: [
                      ...this.state.members,
                      {
                        login: valueRes.login,
                        avatar: valueRes.avatar_url,
                        followers: valueRes.followers
                      }
                    ],
                    isFetching: false
                  })
                })
            })
          })
          .catch(error => {
            this.setState({
              isFetching: false,
              error
            })
          })
      }
    }
  }

  getApiOrgMembers (org) {
    const internalOrg = org ? `/${org}` : ''
    return `https://api.github.com/orgs${internalOrg}/members`
  }

  render () {
    return (
      <section className='main'>
        <div className='card-content'>
          <Search
            handleSearch={this.handleSearch}
            isFetching={this.state.isFetching}
          />
          <CardSection
            isFetching={this.state.isFetching}
            members={this.state.members}
            shoppingHandler={this.shoppingHandler}
          />
        </div>
        <ShoppingCart
          qtdCart={this.state.cart.length}
          handleClick={this.handleStatusCheckout('on')}
        />
        <Checkout
          status={this.state.checkoutStatus}
          handleClick={this.handleStatusCheckout('off')}
          cart={this.state.cart}
          handleCheckout={this.handleCheckout}
        />
      </section>
    )
  }
}

export default App
