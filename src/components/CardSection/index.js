import React from 'react'
import Card from 'components/Card'
import Loader from 'components/Loader'

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
          price={member.followers}
          shoppingHandler={shoppingHandler}
        />
      ))}
    </div>
  )
}

export default CardSection
