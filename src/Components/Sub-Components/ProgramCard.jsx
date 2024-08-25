import React from 'react'

const ProgramCard = (props) => {
    return (
      <div className="max-w-xl h-[400px] m-3 p-4 bg-white border border-gray-300 shadow-md g overflow-hidden hover:border-2 hover:border-green-800">
        <img
          src={props.imageSrc}
          alt="Faculty"
          className="w-full h-48 object-cover transition-transform duration-300 ease-in-out hover:scale-110"
        />
        <div className="p-6">
          <h2 className="text-2xl font-semibold text-gray-800">{props.name}</h2>
          <p className="text-gray-600 mt-2">
            Integer efficitur tellus metus, sed feugiat leo posuere ac. Morbi vitae tincidunt mi, et malesuada massa. Sed blandit placerat elit sit amet condimentum.
          </p>
          <a href="#" className="text-green-600 hover:text-green-800 mt-4 block underline underline-offset-8">
            Learn More
          </a>
        </div>
      </div>
    );
};

export default ProgramCard