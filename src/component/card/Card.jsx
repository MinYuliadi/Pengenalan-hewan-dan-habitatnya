import React from 'react';
import { useNavigate } from 'react-router-dom';

const Card = ({ content }) => {
  const navigate = useNavigate();
console.log(content)
  return (
    <div className='grid gap-10 p-5 max-w-screen grid-cols-1 md:grid-cols-4 justify-center items-center'>
      {content.map((item) => (
        <div
          key={item.name}
          className="max-h-44 max-w-[11rem] md:h-full md:w-full cursor-pointer p-5 flex justify-center items-center hover:opacity-80 bg-white rounded-md"
          onClick={() =>
            navigate(item.name, {
              state: item,
            })
          }
        >
          <img className=" w-full aspect-square" src={item.image} alt={item.name} />
        </div>
      ))}
    </div>
  );
};

export default Card;
