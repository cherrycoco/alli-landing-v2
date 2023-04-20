import { navigate } from 'gatsby';
import React from 'react';
import Button from '../button/button';

const Therapists = () => {
  const onClick = () => {
    navigate('/therapists');
  };

  return (
    <div className="overflow-hidden bg-white py-24">
      <div className="mx-auto max-w-7xl px-6 lg:flex lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-12 gap-y-16 lg:mx-0 lg:min-w-full lg:max-w-none lg:flex-none lg:gap-y-8">
          <div className="lg:col-end-1 lg:w-full lg:max-w-lg lg:pb-8">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Meet our therapists</h2>
            <p className="mt-6 text-xl leading-8 text-gray-600">Meet our highly qualified therapists, a diverse team of Residents, Intermediate, and Advanced professionals, all holding master's degrees in psychotherapy or social work.</p>
            <p className="mt-6 text-base leading-7 text-gray-600">Dedicated to helping guide you through life's challenges and achieve emotional well-being, they provide expert guidance tailored to your unique needs. Discover our amazing team and take the first step towards a healthier, happier you.</p>
            <div className="mt-10 flex">
              <Button onClick={onClick} >Explore Our Therapists <span aria-hidden="true">&rarr;</span></Button>
            </div>
          </div>
          <div className="flex flex-wrap items-start justify-end gap-6 sm:gap-8 lg:contents">
            <div className="w-0 flex-auto lg:ml-auto lg:w-auto lg:flex-none lg:self-end">
              <img src="https://res.cloudinary.com/dhze7gimq/image/upload/v1662520903/alli/landing/mom-group_nt6omq.jpg" alt="" className="aspect-[7/5] w-[37rem] max-w-none rounded-2xl bg-gray-50 object-cover" />
            </div>
            {/* <div className="contents lg:col-span-2 lg:col-end-2 lg:ml-auto lg:flex lg:w-[37rem] lg:items-start lg:justify-end lg:gap-x-8">
              <div className="order-first flex w-64 flex-none justify-end self-end lg:w-auto">
                <img src="https://res.cloudinary.com/dhze7gimq/image/upload/v1662478722/alli/landing/Jansu_headshot_vwdgfz.jpg" alt="" className="aspect-[3/4] object-top w-[24rem] max-w-none flex-none rounded-2xl bg-gray-50 object-cover" />
              </div>
              <div className="flex w-96 flex-auto justify-end lg:w-auto lg:flex-none">
                <img src="https://res.cloudinary.com/dhze7gimq/image/upload/v1672175497/alli/landing/kemelle_w1lmac.jpg" alt="" className="aspect-[5/7] object-top w-[32rem] max-w-none flex-none rounded-2xl bg-gray-50 object-cover" />
              </div>
              <div className="hidden sm:block sm:w-0 sm:flex-auto lg:w-auto lg:flex-none">
                <img src="https://res.cloudinary.com/dhze7gimq/image/upload/v1663181643/alli/landing/Anthony_lo7mr8.jpg" alt="" className="aspect-[3/4] object-top w-[24rem] max-w-none rounded-2xl bg-gray-50 object-cover" />
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>

  )
};

export default Therapists;