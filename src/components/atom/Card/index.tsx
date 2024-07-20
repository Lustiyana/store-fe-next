import React from 'react'

interface CardProps {
    children: any
}

const Card:React.FC<CardProps> = ({children}) => {
  return (
    <div className='rounded-lg px-12 py-8 bg-white'>{children}</div>
  )
}

export default Card