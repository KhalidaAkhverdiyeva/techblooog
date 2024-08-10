import React from 'react'
import HeroCardSmall from '../components/HeroCardSmall'

const VrBottom = () => {
  return (
    <>
    <HeroCardSmall
        progress='92'
        imageHeight='176px'
        title='A Review of the Venus Optics Argus 18mm f/0.95 MFT APO Lens'
        imageUrl='https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/pexels-leon-3636001-2-450x300.jpg'
        />
        <HeroCardSmall
        btnText='GADGETS'
        progress='50'
        buttonBgColor= '#AB07AB'
        imageHeight='176px'
        title='DJI Avata Review: Immersive FPV Flying For Drone Enthusiasts'
        imageUrl='https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/surya-devarakonda-lnEM5jOu-mc-unsplash-450x300.jpg'
        />
        <HeroCardSmall
        imageHeight='176px'
        progress='78'
        buttonBgColor= '#AB07AB'
        btnText='GADGETS'
        title='Bose QuietComfort Earbuds II: Noise-Cancellation Kings Reviewed'
        imageUrl='https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/omid-armin-gSZCLsE7ysc-unsplash-450x300.jpg'
        />
        <HeroCardSmall
        progress='61'
        imageHeight='176px'
        title='AMD Ryzen 9 7900X Review: Zen 4 Has a Pricing Problem'
        imageUrl='https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/42996726655_0df7830ab6_b-1-450x253.jpg'
        />
    </>
  )
}

export default VrBottom