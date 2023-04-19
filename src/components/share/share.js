import { DocumentDuplicateIcon } from '@heroicons/react/24/outline';
import React, { useState } from 'react';
import { 
  EmailIcon, 
  EmailShareButton, 
  FacebookIcon, 
  FacebookMessengerIcon, 
  FacebookMessengerShareButton, 
  FacebookShareButton, 
  LinkedinIcon, 
  LinkedinShareButton,
  WhatsappIcon,
  WhatsappShareButton,
  TwitterShareButton,
  TwitterIcon,
} from 'react-share';

const Share = ({ title, url, description }) => {
  const [isHover, setIsHover] = useState(false);
  const [text, setText] = useState('Copy');

  const handlePopoverOpen = () => {
    setText('Copy');
    setIsHover(true);
    console.log('here')
  };

  const handlePopoverClose = () => {
    setIsHover(false);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(`${url}?utm_source=share&utm_medium=copy_link`);
    setText('Copied!');
    setIsHover(true);
  };

  return (
    <div className="bg-gray-50 sm:rounded-lg max-w-xl mx-auto relative">
      <div className="px-4 py-5 sm:p-6">
        <h3 className="text-base font-semibold leading-6 text-gray-900">{title}</h3>
        <div className="mt-2 max-w-xl text-sm text-gray-500">
        {description && <p>{description}</p>}
        </div>
        <div className="mt-10 mb-6 space-x-1.5 flex flex-row justify-center">
          <FacebookShareButton style={{boxShadow: 'none'}} url={`${url}?utm_source=share&utm_medium=facebook`}>
            <FacebookIcon size={40} round={true} />
          </FacebookShareButton>
          <FacebookMessengerShareButton style={{boxShadow: 'none'}} url={`${url}?utm_source=share&utm_medium=facebook_messenger`}>
            <FacebookMessengerIcon size={40} round={true}/>
          </FacebookMessengerShareButton>
          <EmailShareButton style={{boxShadow: 'none'}} url={`${url}?utm_source=share&utm_medium=email`}>
            <EmailIcon size={40} round={true}/>
          </EmailShareButton>
          <LinkedinShareButton style={{boxShadow: 'none'}} url={`${url}?utm_source=share&utm_medium=linkedin`}>
            <LinkedinIcon size={40} round={true}/>
          </LinkedinShareButton>
          <WhatsappShareButton style={{boxShadow: 'none'}} url={`${url}?utm_source=share&utm_medium=whatsapp`}>
            <WhatsappIcon size={40} round={true}/>
          </WhatsappShareButton>
          <TwitterShareButton style={{boxShadow: 'none'}} url={`${url}?utm_source=share&utm_medium=twitter`}>
            <TwitterIcon size={40} round={true} />
          </TwitterShareButton>
        </div>
        <div className="rounded-md px-3 pb-1.5 pt-2.5 shadow-sm ring-1 ring-inset ring-gray-300 flex flex-row justify-between">
          <div className='flex-1'>
            <label htmlFor="name" className="block text-xs font-medium text-gray-700">
              Share URL
            </label>
            <input
              type="text"
              name="share-url"
              className="block w-full bg-transparent border-0 p-0 text-gray-600 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
              value={`${url}?utm_source=share&utm_medium=copy_link`}
            />
          </div>
          <button
            className="rounded-full bg-transparent py-1.5 px-2.5 text-gray-600 hover:bg-gray-200"
            onMouseEnter={handlePopoverOpen}
            onMouseLeave={handlePopoverClose}
            onClick={handleCopy}
          >
            <DocumentDuplicateIcon className="h-6 w-6" />
          </button>
        </div>
        <div className={isHover ? 'text-sm absolute right-10 p-2 bg-gray-800 text-white rounded-lg' : 'hidden'}>{text}</div>
      </div>
    </div>
  )
}

export default Share;