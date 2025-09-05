import React from 'react'
import './Card.css'

const Card = ({username}) => {


  
  return (
    <div className='box'>
      Name: {username}
      <br />
      age: {age}
      <br />
      Gender: {gender}
    </div>
  )
}

export default Card
