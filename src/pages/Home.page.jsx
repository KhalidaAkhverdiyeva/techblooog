import React from 'react'
import HeroCard from '../components/HeroCard.component'
import HeroCardSmall from '../components/HeroCardSmall'
import RoundedCard from '../components/RoundedCard.component'

const Home = () => {
  return (
    <div className='flex gap-[40px] my-[40px]'>
      <div className='w-[70%]'>
        <HeroCard/>
        <div className='flex gap-9'>
          <HeroCardSmall 
          imageUrl="https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/daniel-korpai-seLBnDRB6_M-unsplash-1-1-450x563.jpg"
          title="Tablet PC Market to Witness Exponential Growth by 2028, Sources Say"/>
          <HeroCardSmall 
          imageUrl="https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/Depositphotos_245244020_xl-2015-2-450x332.jpg"
          title="Microsoft Co-Founder Bill Gates Visits EU, Steers Clean Energy Talks"/>
        </div>
        
      </div>
      <div className='w-[30%] overflow-hidden'>
        <h2 className='text-[19px] text-[#161616] font-bold mb-[10px]'>People's Favorite</h2>
        <div>
          <RoundedCard
          image = "https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/youssef-sarhan-tze1kKj7Lgg-unsplash-1-450x287.jpg"
          text = "TECHNOLOGY"
          textColor = "#3C3FDE"
          headline = "Schools, Parents Disagree over Bans on Student Mobile Phones"
          />
          <RoundedCard
          image = "https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/pexels-sound-on-3761262-1-450x267.jpg"
          text = "GADGETS"
          textColor = "#AB07AB"
          headline = "PC Game Deals: Stealth Classic to Grab, Fresh VR Bundle & More"
          />
          <RoundedCard
          image = "https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/Depositphotos_273724454_xl-2015-300x200.jpg"
          text = "TECHNOLOGY"
          textColor = "#3C3FDE"
          headline = "Electric Car Owners to Pay Road Tax from 2025, Hunt Announces"
          />
          <RoundedCard
          image = "https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/Depositphotos_378099058_xl-2015-1-450x270.jpg"
          text = "PHONES"
          textColor = "#009B9B"
          headline = "Tackling Smartphone Addiction: Village Bans Mobiles for Minors"
          />
          <RoundedCard
          image = "https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/Depositphotos_286775054_xl-2015-1-768x334.jpg"
          text = "TECHNOLOGY"
          textColor = "#3C3FDE"
          headline = "Epic Games Store Gives Away One of The Best VR Games"
          />
         
        </div>


      </div>
     
    </div>
  )
}

export default Home