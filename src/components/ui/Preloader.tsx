import React from 'react';

const Preloader = () => {
  return (
    <div className="my-8 mx-auto w-screen h-[calc(100vh-21.1rem)] flex flex-col items-center justify-center">
      <div className="grid grid-cols-2 gap-1 justify-center items-center">
        <div className="w-[100px] mdl:w-[200px] h-[100px] mdl:h-[200px] bg-[#3DB4FF] animate-fade opacity-100"></div>
        <div className="w-[100px] mdl:w-[200px] h-[100px] mdl:h-[200px] bg-[#3DB4FF] animate-fade opacity-100 delay-100"></div>
        <div className="w-[100px] mdl:w-[200px] h-[100px] mdl:h-[200px] bg-[#3DB4FF] animate-fade opacity-100 delay-200"></div>
        <div className="w-[100px] mdl:w-[200px] h-[100px] mdl:h-[200px] bg-[#3DB4FF] animate-fade opacity-100 delay-300"></div>
      </div>
    </div>
  );
};

export default Preloader;