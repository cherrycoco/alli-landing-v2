import React from 'react'
import Steps from '../progress/steps'
import DesktopSideBar from './desktop'
import { useWindowSize } from '@react-hook/window-size';
import MobileSideBar from './mobile';

const SideBar = ({ children }) => {
  const [width, height] = useWindowSize();


  return (
    <div>
      {
        width > 768 ? (
          <DesktopSideBar>
            <Steps />
            {children}
          </DesktopSideBar>
        ) : (
          <MobileSideBar>
            <Steps />
            {children}
          </MobileSideBar>
        )
      }
    </div>
  )
}

export default SideBar;