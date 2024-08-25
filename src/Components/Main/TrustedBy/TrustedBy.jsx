import React from 'react';

function TrustedBy() {
  return (
    <section className="visit-one fix flex flex-col md:flex-row items-center bg-white ">
      <div className="visit-team md:w-1/2 w-full h-full">
        <img
          src="https://preview.colorlib.com/theme/universityedu/assets/img/gallery/visit2.jpg"
          alt="Student"
          className=" h-full "
        />
      </div>

      <div className="tailor-details md:w-1/2 w-full h-full p-10 md:p-20 bg-[#007A5C] text-white flex flex-col justify-center">
        <div className="section-tittle section-tittle2 mb-25">
          <h2 className="text-2xl md:text-4xl font-bold">
            TRUSTED BY OVER <br /> 6000+ STUDENTS
          </h2>
          <p className="mb-30 my-4 text-[#C9D6CB] text-xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas felis felis,
            vulputate sit amet mauris et, semper aliquam ligula. Integer efficitur tellus
            metus, sed feugiat leo posuere ac. Morbi vitae tincidunt malesuada massa.
          </p>
          <p className="mb-30 my-4 text-[#C9D6CB] text-xl">
            Maecenas felis felis, vulputate sit amet mauris et, semper aliquam ligula.
            Integer efficitur tellus metus, sed feugiat leo posuere ac. Morbi vitae tincidunt
            mi, et malesuada massa.
          </p>
          <a href="#" className="browse-btn browse-btn2 mt-20 text-white underline underline-offset-8   ">
            Join Now
          </a>
        </div>
      </div>
    </section>
  );
}

export default TrustedBy;
