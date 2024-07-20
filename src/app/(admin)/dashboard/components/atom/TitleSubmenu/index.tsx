import React from 'react'

interface TitleSubmenuProps {
  name: string
}
const TitleSubmenu: React.FC<TitleSubmenuProps> = ({name}) => {
  return (
    <h3 className='text-2xl font-semibold'>{name}</h3>
  )
}

export default TitleSubmenu