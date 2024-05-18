import React from 'react';

const Title = ({title}:{title:string}) => {
  return (
    <h1 className=' text-[36px] font-bold'>
      {title}
    </h1>
  );
};

export default Title;