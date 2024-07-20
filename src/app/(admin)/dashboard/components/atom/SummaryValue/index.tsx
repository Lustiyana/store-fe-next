import React from 'react'

interface SummaryValueProps {
    value: string
}

const SummaryValue: React.FC<SummaryValueProps> = ({value}) => {
  return (
    <h1 className='text-4xl'>{value}</h1>
  )
}

export default SummaryValue