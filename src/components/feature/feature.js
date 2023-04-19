import React from 'react';

const logos = [
  { name: 'University of British Columbia', logo: 'https://res.cloudinary.com/dhze7gimq/image/upload/v1680233905/alli/landing_v1/6_oycswo.png' },
  { name: 'Ottawa University', logo: 'https://res.cloudinary.com/dhze7gimq/image/upload/v1680233905/alli/landing_v1/4_l2raha.png' },
  { name: 'University of Toronto', logo: 'https://res.cloudinary.com/dhze7gimq/image/upload/v1680233905/alli/landing_v1/2_imnk7s.png' },
  { name: 'Wilfred Laurier University', logo: 'https://res.cloudinary.com/dhze7gimq/image/upload/v1680233905/alli/landing_v1/5_qjfrb1.png' },
  { name: 'Yorkville', logo: 'https://res.cloudinary.com/dhze7gimq/image/upload/v1680233905/alli/landing_v1/1_s8m25m.png' },
  { name: 'Toronto Life', logo: 'https://res.cloudinary.com/dhze7gimq/image/upload/v1680233905/alli/landing_v1/3_bxaa1s.png' },
];

const Feature = () => {
  return (
    // <div className="bg-white max-w-7xl mx-auto py-6">
    //   <h3 className="py-6 font-semibold text-2xl text-center text-gray-900">
    //     Trusted by
    //   </h3>
    //   <div className='grid grid-cols-3 space-x-2 place-items-center md:grid-cols-6 lg:px-8'>
    //     {logos.map((item) => (
    //       <img className='col-span-1 w-28' src={item.logo} alt={item.name} />
    //     ))}
    //   </div>
    // </div>
    <div className="bg-white py-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-center text-lg font-semibold leading-8 text-gray-900">Trusted by major Canadian Universities</h2>
        <div className="mx-auto mt-10 grid max-w-lg grid-cols-6 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:gap-x-10 lg:mx-0 lg:max-w-none">
        {logos.map((item, idx) => (
          <img className='col-span-2 max-h-12 w-full object-contain lg:col-span-1' src={item.logo} alt={item.name} />
        ))}
          {/* <img className="col-span-2 max-h-12 w-full object-contain lg:col-span-1" src="https://tailwindui.com/img/logos/158x48/transistor-logo-gray-900.svg" alt="Transistor" width="158" height="48" />
          <img className="col-span-2 max-h-12 w-full object-contain lg:col-span-1" src="https://tailwindui.com/img/logos/158x48/reform-logo-gray-900.svg" alt="Reform" width="158" height="48">
          <img className="col-span-2 max-h-12 w-full object-contain lg:col-span-1" src="https://tailwindui.com/img/logos/158x48/tuple-logo-gray-900.svg" alt="Tuple" width="158" height="48">
          <img className="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1" src="https://tailwindui.com/img/logos/158x48/savvycal-logo-gray-900.svg" alt="SavvyCal" width="158" height="48">
          <img className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1" src="https://tailwindui.com/img/logos/158x48/statamic-logo-gray-900.svg" alt="Statamic" width="158" height="48"> */}
        </div>
      </div>
    </div>
  )
};

export default Feature;