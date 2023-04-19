import React from 'react';
import { Link } from "gatsby";
import Button from '../button/button';


const Header = () => {
  return (
    <header className="bg-white sticky top-0 z-10 drop-shadow-md">
      <nav className="mx-auto flex items-center justify-between p-6 lg:px-8" aria-label="Global">
        <Link to='/'>
          <img className='mb-0' src='https://res.cloudinary.com/dhze7gimq/image/upload/v1627495979/alli_landing/alli-logo_gho3wu_1_mm0ius.png' alt='alli logo'/>
        </Link>
        <div className="items-center flex gap-x-6">
          <Link to='/therapists'>
            <span className="text-sm leading-6 text-gray-900">Our Therapists</span>
          </Link>
          <Link to='/get-started/location'>
            <Button>Get Matched</Button>
          </Link>
        </div>
      </nav>
    </header>
  )
}

export default Header;