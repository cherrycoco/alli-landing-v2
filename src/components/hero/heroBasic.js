import React from 'react';
import Button from '../button/button';

const HeroBasic = ({ data,  onClick }) => {
  const { title, subtitle, buttonText, img } = data ? data : {};

  return (
    <div className="relative bg-white">
      <div className="mx-auto sm:grid sm:grid-cols-12 sm:gap-x-6">
        <div className="sm:hidden">
          <img className="w-full aspect-[3/2] max-h-96 object-center object-cover" src={img} alt="" />
        </div>
        <div className="px-6 pb-6 pt-8 sm:pl-6 sm:pb-16 sm:col-span-7 sm:px-0 sm:pt-32">
          <h1 className="mb-4 text-4xl font-semibold tracking-tight text-gray-700 lg:mt-6 lg:text-5xl">{
            title.map((item, index) => {
              if (typeof item === 'object' && item.type === 'b') {
                return (
                  <b className="text-5xl text-gray-700 font-bold lg:mt-10 lg:text-6xl">{item.text}</b>
                )
              }

              return (
                <span key={index}>{item}</span>
              )
            })
          }</h1>
          <p className="mt-2 text-xl leading-8 text-gray-600">{subtitle}</p>
          <div className="mt-10 flex items-center justify-center sm:justify-start">
            <Button onClick={onClick}>{buttonText}</Button>
          </div>
        </div>
        <div className="hidden sm:max-h-[650px] sm:inset-0 lg:w-auto sm:mr-0 sm:flex sm:col-span-5">
          <img className="aspect-[3/2] w-full bg-gray-50 object-cover sm:inset-0 sm:aspect-auto sm:h-full" src="https://res.cloudinary.com/dhze7gimq/image/upload/v1680216735/alli/landing_v1/hero_img_b2vckz.jpg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default HeroBasic;