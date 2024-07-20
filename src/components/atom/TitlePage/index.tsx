import React from 'react';

interface TitlePageProps {
  name: string;
}

const TitlePage: React.FC<TitlePageProps> = ({ name }) => {
  return (
    <h1 className='font-bold text-4xl text-gray-900'>{name}</h1>
  );
}

export default TitlePage;
