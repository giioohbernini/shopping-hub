import React from 'react'
import Card from 'components/Card'
import Loader from 'components/Loader'
import PropTypes from 'prop-types'

const CardSection = ({ isFetching, members, shoppingHandler }) => {
  if (isFetching) return <Loader />

  if (!members) return <h3>A Organização não existe ou o limite de requisição foi atingido</h3>

  return (
    <div className='card-content'>
      {members.map((member, index) => (
        <Card
          key={index}
          avatar={member.avatar}
          name={member.login}
          price={parseInt(member.followers)}
          shoppingHandler={shoppingHandler}
        />
      ))}
    </div>
  )
}

CardSection.propTypes = {
  isFetching: PropTypes.bool.isRequired,
  shoppingHandler: PropTypes.func.isRequired
}

export default CardSection
