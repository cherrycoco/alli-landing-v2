import React from 'react';

const SimpleSelect = ({ isActive, onSelect, title, className, subTitle }) => {
  return (
    <div onClick={onSelect} className={isActive ? `cursor-pointer min-w-[200px] bg-primary-100 grid grid-cols-10 justify-around items-center space-x-4 flex-1 border border-primary-100 py-4 px-6 rounded-full m-2 text-cyan-800 text-base font-semibold hover:bg-primary-100 hover:text-cyan-800 hover:border-primary-100 ${className}` : `flex flex-1 justify-center items-center cursor-pointer min-w-[200px] border border-gray-400 py-3 px-6 rounded-full m-2 text-gray-700 text-base font-light hover:bg-primary-100 hover:text-cyan-800 hover:border-primary-100 ${className}`}>
      {isActive && 
      <svg className='col-span-1 w-[20px] h-[20px] shrink-0' viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20 4.05939L8.59 15.4794L4.35 11.2394L5.76 9.82939L8.59 12.6594L18.59 2.65939L20 4.05939ZM17.79 9.09939C17.92 9.66939 18 10.2694 18 10.8794C18 15.2994 14.42 18.8794 10 18.8794C5.58 18.8794 2 15.2994 2 10.8794C2 6.45939 5.58 2.87939 10 2.87939C11.58 2.87939 13.04 3.33939 14.28 4.12939L15.72 2.68939C14.1 1.54939 12.13 0.879395 10 0.879395C4.48 0.879395 0 5.35939 0 10.8794C0 16.3994 4.48 20.8794 10 20.8794C15.52 20.8794 20 16.3994 20 10.8794C20 9.68939 19.78 8.54939 19.4 7.48939L17.79 9.09939Z" fill="#156073"/>
      </svg>}
      <div className='col-span-9'>
        {subTitle && <p className='text-gray-700 text-lg font-semibold mb-1 text-center'>{subTitle}</p>}
        <p className='text-gray-600 font-light text-center'>{title}</p>
      </div>
    </div>
  )
}

export default SimpleSelect;