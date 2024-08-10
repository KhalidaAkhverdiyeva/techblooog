import React from 'react'
import HeroCard from '../components/HeroCard.component'
import HeroCardSmall from '../components/HeroCardSmall'
import TrendingSmallCard from '../components/TrendingSmallCard.component'
import { GoChevronRight } from "react-icons/go";
import GadgetCard from '../components/GadgetCard.component'
import FooterCard from '../components/FooterCard.component'
import Subscribe from '../components/Subscribe'
import TwoLinesHeaderText from '../components/TwoLinesHeaderText'
import VrCard from '../components/VrCard.component'
import LoadMore from '../components/LoadMore'
import WerSocial from '../components/WerSocial'
import GamingZone from '../components/GamingZone'
import SponsoredbBanner from '../components/SponsoredbBanner'
import SocialsBottomSec from '../widgets/SocialsBottom.Section'
import Gadgets from '../widgets/Gadgets.Section'
import FirstGadgets from '../widgets/FirstGadgets.Section'
import VrBottom from '../widgets/VrBottom.Section'
import PopularText from '../widgets/PopularText.Section'
import Phones from '../widgets/Phones.Section'
import Tech from '../widgets/Tech.Section'
import Overlay from '../widgets/Overlay.Section'
import Picks from '../widgets/Picks.Section'
import Rounded from '../widgets/Rounded.Section'


const Home = () => {
  return (
    <>
    <div id='hero' className='block md:flex gap-[40px] my-[40px] w-full max-w-[1240px] mx-auto px-[18px] md:px-0'>
      <div id='hero part' className='w-[100%] md:w-[70%]'>
        <div className='h-[400px] md:h-[480px] mb-[36px] overflow-hidden'>
        <HeroCard
        textSize='24px'
        text= "Save $25 on Philips Wired Headphone For A Great Sounding Over-Ear Headphone"
        imageUrl= "https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/Depositphotos_29247013_xl-2015-2-768x512.jpg"/>
        </div>
       
        <div className='md:flex gap-9 block'>
          <HeroCardSmall
          imageUrl="https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/daniel-korpai-seLBnDRB6_M-unsplash-1-1-450x563.jpg"
          title="Tablet PC Market to Witness Exponential Growth by 2028, Sources Say"/>
          <HeroCardSmall 
          imageUrl="https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/Depositphotos_245244020_xl-2015-2-450x332.jpg"
          title="Microsoft Co-Founder Bill Gates Visits EU, Steers Clean Energy Talks"/>
        </div>
      </div>
      <div id="people's fav" className='w-[100%] md:w-[30%] overflow-hidden'>
        <h2 className='text-[19px] text-[#161616] font-bold mb-[10px]'>People's Favorite</h2>
        <div>
         <Rounded/>
        </div>
      </div>

     
    </div>

    <div id='banner' className='w-[385px] h-[50px]  md:w-[970px] md:h-[125px] mb-[30px] max-w-[1240px] mx-auto'>
      <SponsoredbBanner/>
    </div>

    <div id='editors-pick' className='px-[18px] md:px-0  py-[40px] w-full max-w-[1240px] mx-auto'>
      <TwoLinesHeaderText text= "Editor's Picks" />
      <div id='pickscards' className='block md:flex gap-[30px]'>
        <Picks/>
      </div>
    </div>

    <section id='darksection' className='px-[18px] md:px-0 bg-custom-gradient w-full py-[50px]'>
        <div className='flex items-center w-full max-w-[1240px] mx-auto mb-[36px] '>
          <div className='mr-4 text-center text-[24px] font-bold text-white'>Trending Videos</div>
            <div className='flex flex-col flex-1 items-center gap-[2px]'>
                <div className='bg-gray-700 h-[1px] w-full '></div>
                <div className='bg-gray-700 h-[1px] w-full'></div>
            </div>
        </div>
        <div className='block md:flex w-full max-w-[1240px] mx-auto gap-[30px] h-auto md:h-[453px] my-[50px]'>
          <div className='w-[100%] md:w-[65%]'>
          <HeroCard
          text="Soundcore VR Gaming Earbuds Designed for Meta Quest 2 Launched"
          imageUrl="https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/sajad-nori-CeyE899Q73Y-unsplash-768x512.jpg"/>
          </div>
          <div className='block w-[100%] md:w-[35%] text-white'> 

          <TrendingSmallCard
          url = "https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/pexels-leon-3636001-2-300x200.jpg"
          text = "Photography: Save $800 on a Fujifilm Camera Before Black..."
          />
          <TrendingSmallCard
          url = "https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/jerin-john-Smbz6GQt_CI-unsplash-2-300x176.jpg"
          text = "Wireless Earbuds May Help Amplify Sound for People with..."
          />
          <TrendingSmallCard
          url = "https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/freestocks-hRVrvH9-dG0-unsplash-1-300x200.jpg"
          text = "Google Play Store Will Ask You to Update Apps if they Crash"/>
          <TrendingSmallCard
          url = "https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/light-fun-technology-neon-woman-enjoy-headset-happy-virtual-vr_t20_zWNmJX-1-300x201.jpg"
          text = "Does The Budget-Friendly PICO 4 VR Headset Live Up To The..."/>
          </div>
      
        </div>
        <div id='overlay' className='block md:flex md:mb-[80px] w-full max-w-[1240px] mx-auto'>
          <div className='block md:flex gap-[30px]'>
            <Overlay/>
          </div>
        </div>
    </section>

    <div id='newgadgets' className='block w-full max-w-[1240px] mx-auto my-[50px] md:flex gap-[50px] md:px-0 px-[18px] '>
        <div className='flex flex-col  justify-center w-[100%] md:w-[70%]'>
          <div className='flex items-center mb-[20px]'>
              <div className='mr-4 text-center text-[22px] font-bold'>New Gadgets</div>
              <div className='flex flex-col flex-1 items-center gap-[4px]'>
                <div className='bg-gray-300 h-[1px] w-full'></div>
                <div className='bg-gray-300 h-[1px] w-full'></div>
              </div>
              <button className='flex items-center border-[1px] border-[#999] rounded-[10px] px-2 py-[2px] ml-[10px] text-[12px] font-[700] text-[#999]'>See All <GoChevronRight /></button>
          </div>
          <GadgetCard
          url='https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/Depositphotos_286775054_xl-2015-1-768x334.jpg'
          text='Oculus Founder Makes a VR Headset That Can Literally Kill You'
          cardText ='To understand the new smart watched and other pro devices of recent focus, we should…'
          />
          <div className='block md:flex gap-[20px] py-[20px] '>
          <div className='w-[100%] md:w-[50%]'>
          <FooterCard
                imageUrl="https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/Depositphotos_422797426_xl-2015-1-300x199.jpg"
                title="Braun Series 7 Electric Shaver Review: Quality at a Good Price"
                date="Jan 13, 2021"
                hasBorder = {false}
                titleColor = "#161616"
                author= 'Shane Doe'
                cardHeight = '100px'
              />
              <FooterCard
                imageUrl="https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/laurens-derks-h0tMHMyfr9A-unsplash-300x199.jpg"
                title="Why Apple Should Skip The MacBook Pro Launch"
                date="Jan 14, 2021"
                hasBorder = {false}
                titleColor = "#161616"
                author= 'Shane Doe'
                cardHeight = '100px'
              />
              <FooterCard
                imageUrl="https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/youssef-sarhan-tze1kKj7Lgg-unsplash-1-300x191.jpg"
                title="The Famous Dyson Bladeless Fan is On Sale at Walmart"
                date="Jan 14, 2021"
                hasBorder = {false}
                titleColor = "#161616"
                author= 'Shane Doe'
                cardHeight = '100px'
              />
          </div>
          <div className='w-[100%] md:w-[50%]'>
          <FooterCard
                imageUrl="https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/Depositphotos_443469058_xl-2015-1-300x203.jpg"
                title="Google Pixel 7, iPhone 14 Compared: Check Out 5 Major Differences"
                date="Nov 19, 2022"
                hasBorder = {false}
                titleColor = "#161616"
                author= 'Shane Doe'
                cardHeight = '100px'
              />
              <FooterCard
                imageUrl="https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/Depositphotos_430988634_xl-2015-4-300x208.jpg"
                title="Apollo G2J Showcases Electric Sports Car"
                date="Jan 14, 2021"
                hasBorder = {false}
                titleColor = "#161616"
                author= 'Shane Doe'
                cardHeight = '100px'
              />
              <FooterCard
                imageUrl="https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/light-fun-technology-neon-woman-enjoy-headset-happy-virtual-vr_t20_zWNmJX-1-300x201.jpg"
                title="Best Luxury Hotels In Bogotá 2022"
                date="Jan 14, 2021"
                hasBorder = {false}
                titleColor = "#161616"
                author= 'Shane Doe'
                cardHeight = '100px'
              />
          </div>
          </div>
          <div className='flex flex-col  justify-center'>
            <div className='flex items-center mb-[20px]'>
                <div className='mr-4 text-center text-[22px] font-bold'>Phones & Tech</div>
                <div className='flex flex-col flex-1 items-center gap-[4px]'>
                  <div className='bg-gray-300 h-[1px] w-full'></div>
                  <div className='bg-gray-300 h-[1px] w-full'></div>
                </div>
                <button className='flex items-center border-[1px] border-[#999] rounded-[10px] px-2 py-[2px] ml-[10px] text-[12px] font-[700] text-[#999]'>See All <GoChevronRight /></button>
            </div>
            <div className='block md:flex gap-[30px]'>
              <div className='w-[100%] md:w-[50%] mb-[30px] md:mb-0 h-[305px]'>
                <HeroCard
                buttonWidth="340px"
                bottom='15px'
                left='15px'
                buttonText="Phones"
                buttonBgColor="#009B9B"
                textSize= "20px"
                text="Google Says Surveillance Vendor Targeted Samsung Phones"
                imageUrl="https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/Depositphotos_352742574_xl-2015-1-450x300.jpg"
                />
              </div>
              <div className='w-[100%] md:w-[50%]  h-[305px]'>
                <HeroCard
                buttonWidth="340px"
                bottom='15px'
                left='15px'
                buttonText="Phones"
                buttonBgColor="#009B9B"
                textSize= "20px"
                text="Why Are iPhones More Expensive Than Android Phones?"
                imageUrl="https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/sahej-brar-6Pg2e3W1KDY-unsplash-450x450.jpg"
                />
              </div>
            </div>
            <div className='block md:flex gap-[20px] py-[20px] '>
              <div id='footercards' className='w-[100%] md:w-[50%]'>
                <Phones/>
              </div>
              <div id='footerscards2' className='w-[100%] md:w-[50%]'>
                <Tech/>
              </div>
            </div>
          </div>
        </div>
        <div className='w-[100%] md:w-[30%]  flex flex-col relative  '>
      
              <div className="sticky top-0 flex-shrink-0 ">

                <div className='mb-[30px] pt-[50px]'>
                <Subscribe
                  borderColor='solid 4px #F7F7F7'
                  radius='20px'
                  bgColor='white' 
                  textColor='black' 
                  inputBgColor='white' 
                  inputBorderColor='#DDDDDD' 
                  buttonBgColor='blue'
                  showEnvelope='true'
                />
                </div>
                <div className=' flex-grow '>
          
                    <h3 className='text-[19px] text-[#191919] font-bold'>Popular Now </h3>
                    <div className='space-y-4 py-[30px]'>

                     <PopularText/>
                      
                    </div>
                
                </div>
            </div>
          
        </div>
    </div>

    <div className='w-full max-w-[1240px] mx-auto  px-[18px] md:px-0'>
      <TwoLinesHeaderText text='Featured Reviews'/>
      <div className='w-full max-w-[1240px] mx-auto my-[30px]' >
        <VrCard/>
        <div className='block md:flex gap-[30px] my-[30px] h-auto md:h-[335px]'>
        <VrBottom/>
        </div>
      </div>
    </div>

    <div className='w-full block md:flex max-w-[1240px] mx-auto gap-[50px] px-[18px] md:px-0'>
      <div className='w-[100%] md:w-[70%]'>
          <div className='flex items-center mb-[30px]'>
            <div className='mr-4 text-center text-[24px] font-bold text-black'>Latest Article</div>
            <div className='flex flex-col flex-1 items-center gap-[2px]'>
                <div className='bg-gray-200 h-[1px] w-full '></div>
                <div className='bg-gray-200 h-[1px] w-full'></div>
            </div>
          </div>
          <div className='flex flex-col gap-[30px] my-[30px]'>
          <FirstGadgets/>
          <HeroCard
          buttonText='GAMING'
          buttonBgColor='#E40666'
          text='Riot Games Acquires a Wargaming Studio to Help With Live Game Development'
          imageUrl='https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/matias-islas-Nw0j-2YAnfI-unsplash-1-1024x683.jpg'
          />
          <Gadgets/>
          <LoadMore/>
          </div>
      </div>
      <div id='socialsbottom' className='w-[100%] md:w-[30%] pt-[18px] flex flex-col relative'>
      
          <div className='sticky top-[30px]  flex-shrink-0  mb-[20px]'> 
              <WerSocial/>

              <div className='relative my-[20px]'>
              <div className='text-[19px] font-semibold my-[10px]'>Gaming Zone</div>
              <GamingZone/>

              <SocialsBottomSec/>
              
              </div>
        
          </div>
      </div>
    </div>

    </>
  )
}
export default Home