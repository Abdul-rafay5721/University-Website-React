import React from 'react';
import ProgramCard from '../../Sub-Components/ProgramCard';

function Program({ programs }) {
  return (
    <>
      <div className='py-20 h-full'>
        <div className="mx-auto text-center w-full sm:w-3/4 md:w-2/3 lg:w-1/2 mb-10 px-4 sm:px-0">
          <h1 className="text-2xl sm:text-3xl md:text-4xl text-[#32404D] font-extrabold mb-6">PROGRAMS WE OFFER</h1>
          <p className="text-base sm:text-lg text-[#777777]">
            Maecenas felis felis, vulputate sit amet mauris et, semper aliquam ligula. Integer efficitur tellus metus, sed feugiat leo posuere ac. Morbi vitae tincidunt mi, et malesuada massa.
          </p>
        </div>

        <div className='flex flex-wrap justify-center  gap-10 lg:px-28'>
          {programs.map((program, index) => (
            <ProgramCard key={index} name={program.name} imageSrc={program.imageSrc} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Program;
