import React from 'react';

const TierCard = ({ card }) => {
  const { title, subtitle, range, description } = card;
  return (
    <div className="pt-16 md:px-8 md:pt-0 xl:px-14">
      <h3 id="tier-basic" className="text-base font-semibold leading-7 text-gray-900">{title}</h3>
      <p className="mt-6 flex flex-wrap items-baseline gap-x-1">
        <span className="text-4xl lg:text-5xl font-bold tracking-tight text-gray-900">{range}</span>
        <span className="text-sm font-semibold leading-6 text-gray-600">/session</span>
      </p>
      <p className="mt-3 text-sm leading-6 text-gray-500">*Sessions are 50 minutes</p>
      <a href="/get-started/age" aria-describedby="tier-basic" className="mt-10 block no-underline rounded-md bg-cyan-800 px-3 py-2 text-center text-sm font-semibold leading-6 text-white shadow-sm hover:bg-cyan-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-700">{`Find Your ${title}`}</a>
      <p className="mt-10 text-sm font-semibold leading-6 text-gray-900">{subtitle}</p>
      <ul role="list" className="mt-6 space-y-3 text-sm leading-6 text-gray-600">
        {description.map((item, index) => (
          <li key={index} className="flex gap-x-3">
            <svg className="h-6 w-5 flex-none text-cyan-700" viewBox="0 0 20 20" fill="currentColor" ariaHidden="true">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clip-rule="evenodd" />
            </svg>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TierCard;