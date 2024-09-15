import React from 'react';

const AnimationCube = () => {
  return (
    <div className='w-full h-full overflow-hidden p-2 grid grid-cols-2 gap-1 flex-1'>
      <div className='cube cube-1'></div>
      <div className='cube cube-2'></div>
      <div className='cube cube-3'></div>
      <div className='cube cube-4'></div>
    </div>
  );
};

export default AnimationCube;