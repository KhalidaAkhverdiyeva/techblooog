import React from 'react'
import HeroCard from '../components/HeroCard.component'
import HeroCardSmall from '../components/HeroCardSmall'
import RoundedCard from '../components/RoundedCard.component'
import PicksCard from '../components/PicksCard.component'
import OverlayCard from '../components/OverlayCard.component'
import TrendingSmallCard from '../components/TrendingSmallCard.component'
import { GoChevronRight } from "react-icons/go";
import GadgetCard from '../components/GadgetCard.component'
import FooterCard from '../components/FooterCard.component'
import Subscribe from '../components/Subscribe'
import PopularPartText from '../components/PopularPartText'
import TwoLinesHeaderText from '../components/TwoLinesHeaderText'
import VrCard from '../components/VrCard.component'
import LoadMore from '../components/LoadMore'
import WerSocial from '../components/WerSocial'


const Home = () => {
  return (
    <>
    <div className='flex gap-[40px] my-[40px] w-full  max-w-[1240px] mx-auto'>
      <div id='hero part' className='w-[70%]'>
        <div className='h-[480px] mb-[36px]'>
        <HeroCard
        text= "Save $25 on Philips Wired Headphone For A Great Sounding Over-Ear Headphone"
        imageUrl= "https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/Depositphotos_29247013_xl-2015-2-768x512.jpg"/>
        </div>
       
        <div className='flex gap-9'>
          <HeroCardSmall
          imageUrl="https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/daniel-korpai-seLBnDRB6_M-unsplash-1-1-450x563.jpg"
          title="Tablet PC Market to Witness Exponential Growth by 2028, Sources Say"/>
          <HeroCardSmall 
          imageUrl="https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/Depositphotos_245244020_xl-2015-2-450x332.jpg"
          title="Microsoft Co-Founder Bill Gates Visits EU, Steers Clean Energy Talks"/>
        </div>
        
      </div>
      <div id="people's fav" className='w-[30%] overflow-hidden'>
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

    <div id='editors-pick' className='py-[40px] w-full max-w-[1240px] mx-auto'>

      <TwoLinesHeaderText
      text= "Editor's Picks"
      />

      <div id='pickscards' className='flex gap-[30px]'>
      <PicksCard 
        imageSrc='https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/akhil-yerabati-Q2uV5TkjNz8-unsplash-450x255.jpg'
        buttonText='GADGETS'
        number='1'
        title='Study: Earbuds Use, Youngsters at High Risk of Hearing Loss'
        buttonColor='#B400B4'
      />
      <PicksCard 
        imageSrc='https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/greg-rakozy-oMpAz-DN-9I-unsplash-450x300.jpg'
        buttonText='TECHNOLOGY'
        number='2'
        title='Telescope is Revealing the Galaxies of the Universe Like Never Before'
        buttonColor='#3C3FDE'
      />
      <PicksCard 
        imageSrc='https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/Depositphotos_429887216_XL-1-450x289.jpg'
        buttonText='PHONES'
        number='3'
        title='CarPlay Concept Shows Off a Modular UI Inspired by Next-Gen Design'
        buttonColor='#00A0A0'
      />
      <PicksCard 
        imageSrc='https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/sunrise-king-NK-cB-l1cv0-unsplash-1-450x271.jpg'
        buttonText='TECHNOLOGY'
        number='4'
        title='Latest Windows 11 Preview Build Finally Lets You Search for Copied Text'
        buttonColor='#3C3FDE'
      />

      </div>

      
      
    </div>
    <section className='bg-custom-gradient w-full py-[50px]'>
        <div className='flex items-center w-full max-w-[1240px] mx-auto mb-[36px] '>
          <div className='mr-4 text-center text-[24px] font-bold text-white'>Trending Videos</div>
            <div className='flex flex-col flex-1 items-center gap-[2px]'>
                <div className='bg-gray-700 h-[1px] w-full '></div>
                <div className='bg-gray-700 h-[1px] w-full'></div>
            </div>

            
            
        </div>
        <div className='flex w-full max-w-[1240px] mx-auto gap-[30px] h-[453px] my-[50px]'>
          <div className='w-[65%]'>
          <HeroCard
          text="Soundcore VR Gaming Earbuds Designed for Meta Quest 2 Launched"
          imageUrl="https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/sajad-nori-CeyE899Q73Y-unsplash-768x512.jpg"/>
          </div>
          <div className='w-[35%] text-white'> 

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
        <div className='flex w-full max-w-[1240px] mx-auto'>
          <div className='flex gap-[30px]'>

          <OverlayCard
          url = 'https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/billy-freeman-yk-jzxSIk90-unsplash-450x253.jpg'
          date = 'Sep 17, 2020'
          text = 'Leaf Headphones: Here are Some of The Best Devices..'

          
          />
          <OverlayCard
          url = 'https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/nasa-Zzc0vZE2JZI-unsplash-450x350.jpg'
          date = 'Sep 15, 2020'
          text = 'A Piece of The Wrecked 1986 Challenger Space..'
          />
          <OverlayCard
          url = 'https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/Depositphotos_314150492_xl-2015-1-768x361.jpg'
          date = 'Sep 14, 2020'
          text = 'Security Cameras Make Us Feel Safe, but Are They ..'
          
          />
          <OverlayCard
          url = 'https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/pragyan-goswami-GziKHv-3lVc-unsplash-450x315.jpg'
          date = 'Sep 13, 2020'
          text = 'This Bedside Table Lamp Will Light Up Your World..'
          
          />
          </div>
          

          
        </div>

      </section>

      <div id='newgadgets' className='w-full max-w-[1240px] mx-auto my-[50px] flex gap-[50px] '>
              <div className='flex flex-col  justify-center w-[70%]'>
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

                <div className='flex gap-[20px] py-[20px] '>
                <div className='w-[50%]'>
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
                <div className='w-[50%]'>
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
                  <div className='flex gap-[30px]'>
                    <div className='w-[50%] h-[305px]'>
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
                    <div className='w-[50%] h-[305px]'>
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
                  <div className='flex gap-[20px] py-[20px] '>
                <div id='footercards' className='w-[50%]'>
                <FooterCard
                      imageUrl="https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/omid-armin-fxJIHyWTRu4-unsplash-450x302.jpg"
                      title="The Pros of Buying a Used/Refurbished iPhone 11"
                      date="Nov 19, 2022"
                      hasBorder = {false}
                      titleColor = "#161616"
                      author= 'Shane Doe'
                      cardHeight = '96px'
                    />
                    <FooterCard
                      imageUrl="https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/omid-armin-2ZgdviaHOkc-unsplash-2-267x300.jpg"
                      title="These OnePlus Phones Are Getting Stable Android 13 Update"
                      date="Jan 14, 2021"
                      hasBorder = {false}
                      titleColor = "#161616"
                      author= 'Shane Doe'
                      cardHeight = '96px'
                    />
                    <FooterCard
                      imageUrl="https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/omid-armin-mP4sfCCoTrI-unsplash-1-181x300.jpg"
                      title="Huawei Phones are Moving Forward Without Google Mobile Services"
                      date="Jan 14, 2021"
                      hasBorder = {false}
                      titleColor = "#161616"
                      author= 'Shane Doe'
                      cardHeight = '96px'
                    />
                </div>
                <div id='footerscards2' className='w-[50%]'>
                <FooterCard
                      imageUrl="https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/vinit-vispute-enqYaZPSDjQ-unsplash-300x200.jpg"
                      title="OnePlus Will Focus on a Premium Build Over Camera Performance"
                      date="Nov 19, 2022"
                      hasBorder = {false}
                      titleColor = "#161616"
                      author= 'Shane Doe'
                    />
                    <FooterCard
                      imageUrl="https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/ivan-shilov-D24B2DiV0sY-unsplash-300x200.jpg"
                      title="The Best Wireless Earbuds for the Samsung Galaxy S22 in 2022"
                      date="Jan 14, 2021"
                      hasBorder = {false}
                      titleColor = "#161616"
                      author= 'Shane Doe'
                    />
                    <FooterCard
                      imageUrl="https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/mark-chan-489jbTi51sg-unsplash-300x169.jpg"
                      title="Redmi Series Launched With 200MP Camera and a Fast Charging"
                      date="Jan 14, 2021"
                      hasBorder = {false}
                      titleColor = "#161616"
                      author= 'Shane Doe'
                    />
                </div>
                </div>
                </div>


              
              </div>
              <div className='w-[30%]  flex flex-col relative  '>
            
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

                            <PopularPartText
                            text="Popular New Xbox Game Pass Game Being Review Bombed With “0s”"
                            number= "1"
                            viewCount="7,657"
                            />
                            <PopularPartText
                            text="Samsung is Developing Bright MicroLED on Displays for AR Headsets"
                            number= "2"
                            viewCount="1,552"
                            />
                            <PopularPartText
                            text="Warner Bros. Games Announces Mortal Kombat: Onslaught"
                            number= "3"
                            viewCount="4,554"
                            />
                            <PopularPartText
                            text="Super League Gaming now Publisher of Roblox Anime Battlegrounds"
                            number= "4"
                            viewCount="2,101"
                            />
                            <PopularPartText
                            text="Hologate Announces New Plans for First Large Format World VR Arcade"
                            number= "5"
                            viewCount="10,657"
                            />
                            
                          </div>
                      
                      </div>
                  </div>
                
              </div>
        </div>


        <div className='w-full max-w-[1240px] mx-auto'>

          <TwoLinesHeaderText
          text='Featured Reviews'
          />

          <div className='w-full max-w-[1240px] mx-auto my-[30px]' >
            <VrCard/>
            <div className='flex gap-[30px] my-[30px] h-[335px]'>
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
            </div>
           
          </div>
        </div>

        <div className='w-full flex max-w-[1240px] mx-auto gap-[30px]'>
          <div className='w-[70%]'>
            <div className='flex items-center mb-[30px]'>
              <div className='mr-4 text-center text-[24px] font-bold text-black'>Latest Article</div>
              <div className='flex flex-col flex-1 items-center gap-[2px]'>
                  <div className='bg-gray-200 h-[1px] w-full '></div>
                  <div className='bg-gray-200 h-[1px] w-full'></div>
              </div>
            </div>
            <div className='flex flex-col gap-[30px] my-[30px]'>
            <GadgetCard
            showButton = {false}
            imageWidth='35%'
            btnText ='GAMING'
            btnBg = '#F80061'
            textWidth='65%'
            cardHeight='235px'
            borderColor = '#EFEFEF'
            boxShadow = '0 2px 15px -1px rgba(0, 0, 0, .06)'
            url='https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/thisisengineering-raeng-a7A9O5htrKs-unsplash-450x300.jpg'
            text='Game Development This Week: Save On Essential Tools and More'
            cardText ='To understand the new smart watched and other pro devices of recent focus, we should…'
            />
            <GadgetCard
            imageWidth='35%'
            textWidth='65%'
            btnText ='TECHNOLOGY'
            btnBg = '#2E32F1'
            showButton = {false}
            cardHeight='235px'
            borderColor = '#EFEFEF'
            boxShadow = '0 2px 15px -1px rgba(0, 0, 0, .06)'
            url='https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/Depositphotos_242235046_xl-2015-1-450x256.jpg'
            text='Is the Hyperloop Doomed? What Elon Musk’s Latest Setback Really Means'
            cardText ='To understand the new smart watched and other pro devices of recent focus, we should…'
            
            />
            <GadgetCard
            imageWidth='35%'
            textWidth='65%'
            btnText ='TECHNOLOGY'
            btnBg = '#2E32F1'
            showButton = {false}
            cardHeight='235px'
            borderColor = '#EFEFEF'
            boxShadow = '0 2px 15px -1px rgba(0, 0, 0, .06)'
            url='https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/remy_loz-3vVzdb8KKIw-unsplash-450x300.jpg'
            text='The Best Early Black Friday Deals on Gaming Laptops and Accessories'
            cardText ='To understand the new smart watched and other pro devices of recent focus, we should…'
            />
            <HeroCard
            buttonText='GAMING'
            buttonBgColor='#E40666'
            text='Riot Games Acquires a Wargaming Studio to Help With Live Game Development'
            imageUrl='https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/matias-islas-Nw0j-2YAnfI-unsplash-1-1024x683.jpg'
            />
            <GadgetCard
            showButton = {false}
            imageWidth='35%'
            btnText ='GAMING'
            btnBg = '#F80061'
            textWidth='65%'
            cardHeight='235px'
            borderColor = '#EFEFEF'
            boxShadow = '0 2px 15px -1px rgba(0, 0, 0, .06)'
            url='https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/remy-gieling-bA5ZJ9JVrb8-unsplash-1-450x286.jpg'
            text='Keep Talking and Nobody Explodes: A Boomer Gaming in VR'
            cardText ='To understand the new smart watched and other pro devices of recent focus, we should…'
            />
            <GadgetCard
            imageWidth='35%'
            textWidth='65%'
            btnText ='TECHNOLOGY'
            btnBg = '#2E32F1'
            showButton = {false}
            cardHeight='235px'
            borderColor = '#EFEFEF'
            boxShadow = '0 2px 15px -1px rgba(0, 0, 0, .06)'
            url='https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/pexels-bogdan-glisik-1661469-1-450x390.jpg'
            text='Apple Watch’s ECG Can Help Diagnose Heart Problem: Research'
            cardText ='To understand the new smart watched and other pro devices of recent focus, we should…'
            
            />
            <GadgetCard
            imageWidth='35%'
            textWidth='65%'
            bbtnText ='TECHNOLOGy'
            btnBg = '#2E32F1'
            showButton = {false}
            cardHeight='235px'
            borderColor = '#EFEFEF'
            boxShadow = '0 2px 15px -1px rgba(0, 0, 0, .06)'
            url='https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/pexels-luis-quintero-1787236-450x300.jpg'
            text='Simple Tips and Tricks to Take Care of Your Expensive DSLR Camera'
            cardText ='To understand the new smart watched and other pro devices of recent focus, we should…'
            />
            <GadgetCard
            imageWidth='35%'
            textWidth='65%'
            btnText ='GADGETS'
            btnBg = '#F80061'
            showButton = {false}
            cardHeight='235px'
            borderColor = '#EFEFEF'
            boxShadow = '0 2px 15px -1px rgba(0, 0, 0, .06)'
            url='https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/pexels-bruno-bueno-3854821-450x300.jpg'
            text='Hologate Announces New Plans for First Large Format World VR Arcade'
            cardText ='To understand the new smart watched and other pro devices of recent focus, we should…'
            />
            </div>
            <LoadMore/>
            
          
            

          </div>
          <div className='w-[30%] pt-[18px] flex flex-col relative'>
            <div className='relative'>
              <div className='sticky top-[30px]  flex-shrink-0 '> 
              <WerSocial/>

              <div>Lorem quo voluptates porro voluptas repudiandae, distinctio, culpa aspernatur magnam.</div>
              </div>
            </div>
            
          
          </div>

        </div>
 
    
    </>
    
  )
}

export default Home