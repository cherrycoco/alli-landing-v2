import React, { useState } from "react"
import { useWindowWidth } from '@react-hook/window-size';


const HowItWorks = () => {
  return (
    <div className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-base font-semibold leading-7 text-cyan-900">welcome to Alli</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Therapy on your terms</p>
          <p className="px-4 max-w-none mt-6 mb-0 text-xl text-center text-gray-600">We believe everyone deserves access to affordable therapy, without compromising on quality.</p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            <div className="flex flex-col">
            <dt className="gap-x-3 text-base font-semibold leading-7 text-gray-900">
                <img className="w-12 h-12" src='https://res.cloudinary.com/dhze7gimq/image/upload/v1662487542/alli/landing/icon/Group_32_tvc6eb.png' />
                You choose your session rate
              </dt>
              <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                <p className="flex-auto">Whether you work with our Residents, Advanced, or Advanced Therapists, you get to choose a session rate that suits your budget within the given therapist's given range.</p>
                <p className="mt-6">
                  <a href="#tiers" className="text-sm font-semibold leading-6 text-primary-600">See therapist ranges <span aria-hidden="true">→</span></a>
                </p>
              </dd>
            </div>

            <div className="flex flex-col">
              <dt className="gap-x-3 text-base font-semibold leading-7 text-gray-900">
                <img className="w-12 h-12" src='https://res.cloudinary.com/dhze7gimq/image/upload/v1662488129/alli/landing/icon/Group_35_iozhbs.png' />
                Your confidentiality is our priority
              </dt>
              <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                <p className="flex-auto">The rate you choose is confidential and never shared with your therapist. We believe the quality of your sessions should never be determined by what you can currently afford.</p>
              </dd>
            </div>

            <div className="flex flex-col">
                <dt className="gap-x-3 text-base font-semibold leading-7 text-gray-900">
                <img className="w-12 h-12" src='https://res.cloudinary.com/dhze7gimq/image/upload/v1662487542/alli/landing/icon/Group_33_rpcjsu.png' />
                You are an Alli
              </dt>
              <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                <p className="flex-auto">When people are in a position to select a higher rate, we use those dollars to supplement sessions for those who need to pay a bit less. This pay-it-forward model has taken on a life of its own and proven that alliship has a tangible impact on each-other's lives.</p>
                {/* <p className="mt-6">
                  <a href="#" className="text-sm font-semibold leading-6 text-indigo-600">More on this sentiment here <span aria-hidden="true">→</span></a>
                </p> */}
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  )
}

export default HowItWorks;