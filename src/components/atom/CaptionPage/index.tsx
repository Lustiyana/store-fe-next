import React from 'react'

interface CaptionPageProps {
    caption: string;
  }

const CaptionPage: React.FC<CaptionPageProps> = ({caption}) => {
  return (
    <p className='text-gray-400 text-lg'>{caption}</p>
  )
}

export default CaptionPage