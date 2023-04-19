import React from 'react';

const DesktopSideBar = ({ children }) => { 
  return (
    <div className="h-screen flex w-60 flex-col">
      <div className="flex grow flex-col gap-y-5 overflow-y-auto border-r border-gray-200 bg-white px-4 pb-4">
        <div className="flex h-16 shrink-0 items-center">
          <img
            className="h-8 w-auto"
            src="https://res.cloudinary.com/dhze7gimq/image/upload/v1627495979/alli_landing/alli-logo_gho3wu_1_mm0ius.png"
            alt="Alli Therapy"
          />
        </div>
        {children}
      </div>
    </div>
  )
}

export default DesktopSideBar;