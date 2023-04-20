import React, { useState } from "react"
import { navigate } from "gatsby"

import Layout from "../components/layout/layout"
import HeroBasic from "../components/hero/heroBasic"
import Feature from "../components/feature/feature"
import HowItWorks from "../components/landing/howItWorks"
import Therapists from "../components/landing/therapists"
import GetStarted from "../components/landing/getStarted"
import Tiers from "../components/landing/tiers"
import FAQ from "../components/landing/faq"
import Consult from "../components/consult/consult"

const hero = {
  title: [
    'Therapy when ',
    {
      text: 'you',
      type: 'b',
    },
    ' need it - not just when your finances allow it.',
  ],
  subtitle: 'High quality, virtual therapy at a price that fits your lifestyle.',
  buttonText: 'Match With A Therapist',
  handleClick: () => console.log('clicked'),
  img: 'https://res.cloudinary.com/dhze7gimq/image/upload/v1680216735/alli/landing_v1/hero_img_b2vckz.jpg',
};

const IndexPage = ({ location }) => {
  const cta = () => {
    navigate('/get-started/location');
  };

  return (
    <Layout location={location} footer={true}>
      <HeroBasic data={hero} onClick={cta} />
      <Feature />
      <HowItWorks />
      <Tiers />
      <GetStarted onClick={cta} />
      <Therapists />
      {/* <Consult /> */}
      <FAQ />
    </Layout>
  )
}

export default IndexPage
