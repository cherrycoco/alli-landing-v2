import React from "react"
import { useWindowSize } from '@react-hook/window-size';
import DesktopSideBar from "../sideBar/desktop";
import MobileSideBar from "../sideBar/mobile";
import Steps from "../progress/steps";

const LayoutOnboarding = ({ children, pro }) => {
  const [width, height] = useWindowSize();
  const steps = [
    { name: 'Welcome', href: `?${pro.id}#welcome` },
    { name: 'Basic Information', href: `?${pro.id}#basic` },
    { name: 'Practice Information', href: `?${pro.id}#practice` },
    { name: 'Bio', href: `?${pro.id}#bio` },
    { name: 'Specialization', href: `?${pro.id}#specialization` },
    { name: 'Modality', href: `?${pro.id}#modality` },
    { name: 'Education', href: `?${pro.id}#education` },
    { name: 'Profile Photo', href: `?${pro.id}#photo` },
  ]

  return (
    <div className='w-screen'>
      {
        width > 768 ? (
          <div className='flex'>
            <DesktopSideBar>
              <Steps steps={steps}/>
            </DesktopSideBar>
            <div className='py-16 px-12 flex-1 space-y-10'>
              {children}
            </div>
          </div>
        ) : (
          <div>
            <MobileSideBar>
              <Steps steps={steps} />
            </MobileSideBar>
            <div className='p-10'>
              <h1 className='text-4xl font-bold text-gray-700 text-center'>{}</h1>
              {children}
            </div>  
          </div>
        )
      }
    </div>
  )
}

export default LayoutOnboarding
