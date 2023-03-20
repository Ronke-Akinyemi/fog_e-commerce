import React from 'react'
import { HeroSection } from '../components/HeroSection'
import { History } from '../components/History'
import { HomeIntro } from '../components/HomeIntro'
import { OurProducts } from '../components/OurProducts'
import { Reviews } from '../components/Reviews'


export const Home = () => {
  return (
    <>
    <div>
      <HeroSection/>
    </div>
    <div>
      <HomeIntro/>
    </div>
    <div>
      <History/>
    </div>
    <div>
      <OurProducts/>
    </div>
    <div>
      <div className="text-center">
        <h3 className='oA mt-5 cR'>CLIENTS REVIEWS</h3>
      </div>
      <Reviews/>
    </div>
    </>
  )
}
