import React from 'react'
import HeroCardSmall from '../components/HeroCardSmall'
import { FaGripfire } from 'react-icons/fa6'
import WerSocial from '../components/WerSocial'
import PicksCard from '../components/PicksCard.component'

const Gadget = () => {
  return (
   <>
   <div className='w-full max-w-[1240px] mx-auto my-[30px] flex gap-[40px] '>

    <div className='w-[70%] '>
      <p className='text-[20px]  font-[600] px-[20px] border-l-[3px] border-l-[#3C3FDE]'>BROWSING: GADGETS</p>
      <div className='flex gap-[40px] my-[30px]'>
        <div className='w-[50%]'>
            <HeroCardSmall
            progress='92'
            imageHeight='176px'
            title='A Review of the Venus Optics Argus 18mm f/0.95 MFT APO Lens'
            imageUrl='https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/pexels-leon-3636001-2-450x300.jpg'
            />
          <HeroCardSmall
            progress='92'
            imageHeight='176px'
            title='A Review of the Venus Optics Argus 18mm f/0.95 MFT APO Lens'
            imageUrl='https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/pexels-leon-3636001-2-450x300.jpg'
            />
          <HeroCardSmall
            progress='92'
            imageHeight='176px'
            title='A Review of the Venus Optics Argus 18mm f/0.95 MFT APO Lens'
            imageUrl='https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/pexels-leon-3636001-2-450x300.jpg'
            />
          <HeroCardSmall
            progress='92'
            imageHeight='176px'
            title='A Review of the Venus Optics Argus 18mm f/0.95 MFT APO Lens'
            imageUrl='https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/pexels-leon-3636001-2-450x300.jpg'
            />
        </div>
        <div className='w-[50%]'>
            <HeroCardSmall
            progress='92'
            imageHeight='176px'
            title='A Review of the Venus Optics Argus 18mm f/0.95 MFT APO Lens'
            imageUrl='https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/pexels-leon-3636001-2-450x300.jpg'
            />
          <HeroCardSmall
            progress='92'
            imageHeight='176px'
            title='A Review of the Venus Optics Argus 18mm f/0.95 MFT APO Lens'
            imageUrl='https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/pexels-leon-3636001-2-450x300.jpg'
            />
          <HeroCardSmall
            progress='92'
            imageHeight='176px'
            title='A Review of the Venus Optics Argus 18mm f/0.95 MFT APO Lens'
            imageUrl='https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/pexels-leon-3636001-2-450x300.jpg'
            />
          <HeroCardSmall
            progress='92'
            imageHeight='176px'
            title='A Review of the Venus Optics Argus 18mm f/0.95 MFT APO Lens'
            imageUrl='https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/pexels-leon-3636001-2-450x300.jpg'
            />
        </div>
      
      </div>
      
      </div>
    <div className='w-[30%]'>

      <div className='mt-[10px]'><img src="https://smartmag.theme-sphere.com/news-bulletin/wp-content/uploads/sites/26/2021/11/Smart-Woman.jpg" alt="" /></div>
      <div className='text-[20px] font-semibold mt-[30px]'>Top Posts</div>
      <div>
          <div id='cards'  className='flex text-black py-[15px] border-b-[1px] '>
                    <div className='mr-[18px] w-[27%] h-[70px] self-center '><img className='rounded-[10px] h-full' src="https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2021/01/kamil-s-SuPAbuuK7f4-unsplash-150x100.jpg" alt="" /></div>
                    <div className='w-[73%]'>
                      <span className='text-[16px] font-semibold'>Popular New Xbox Game Pass Game Being Review Bombed With “0s”</span>
                      <div className='text-black flex gap-3'>
                        <span className='text-gray-500 text-[12px] font-semibold'>Jan 14, 2021</span>
                        <span className='text-[#FF0000] text-[12px] flex items-center gap-1'><FaGripfire /> 7,792 Views</span>
                        </div>
                    </div>
          </div>
                
          <div id='cards'  className='flex text-black py-[15px] border-b-[1px] '>
            <div className='mr-[18px] w-[27%] h-[70px] self-center '><img className='rounded-[10px] h-full ' src="https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2021/01/jonathan-kemper-poSms2EzfNY-unsplash-150x100.jpg" alt="" /></div>
            <div className='w-[73%]'>
              <span className='text-[16px] font-semibold'>Samsung is Developing Bright MicroLED on Displays for AR Headsets</span>
              <div className='text-black flex gap-3'>
                <span className='text-gray-500 text-[12px] font-semibold'>Jan 14, 2021</span>
                <span className='text-[#FF0000] text-[12px] flex items-center gap-1'><FaGripfire /> 7,792 Views</span>
                </div>
            </div>
          </div>
          
          <div id='cards'  className='flex text-black py-[15px] '>
            <div className='mr-[18px] w-[27%] h-[70px] self-center'><img className='rounded-[10px] h-full ' src="https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2021/01/0247d91565b69ed9ddba4ec59ac97963-1-150x86.jpg " alt="" /></div>
            <div className='w-[73%]'>
              <span className='text-[16px] font-semibold'>Warner Bros. Games Announces Mortal Kombat: Onslaught</span>
              <div className='text-black flex gap-3'>
                <span className='text-gray-500 text-[12px] font-semibold'>Jan 14, 2021</span>
                <span className='text-[#FF0000] text-[12px] flex items-center gap-1'><FaGripfire /> 7,792 Views</span>
                </div>
            </div>
          </div>
      </div>
      <div className='my-[30px]'><WerSocial/></div>
      <div className='text-[20px] font-semibold mt-[30px]'>Latest Reviews</div>
      <div className='my-[20px] flex flex-col gap-[30px]'>
        
       <div className=' w-[100%] relative max-w-sm mx-auto rounded-lg overflow-hidden '>
        <div className='relative'>
          <img 
            src='https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/akhil-yerabati-Q2uV5TkjNz8-unsplash-450x255.jpg'
            alt='Card' 
            className='w-full h-[190px] object-cover rounded-[10px]'
          />
          <button 
            className='absolute bg-[green] top-0 left-0 font-semibold text-white text-[12px] px-2 py-1 rounded'
           
          >
            GADGETS
          </button>
        </div>
  
        <div className='flex py-4'>
          <div className='text-[#CCCCCC] text-4xl font-[600] mr-4'>1</div>
          <div>
            <p className='text-[#161616] mb-2 text-[18px] font-bold hover:text-[#3C3FDE] transition-colors duration-300'>
            Study: Earbuds Use, Youngsters at High Risk of Hearing Loss
            </p>
            <div className='flex gap-3 items-center'>
              <p className='text-[#191919] font-[600] text-[12px]'>Shane Doe</p>
              <div className='text-gray-400 font-[600] text-[12px]'>Mar 15, 2020</div>
            </div>
          </div>
        </div>
      </div>
       <div className=' w-[100%] relative max-w-sm mx-auto rounded-lg overflow-hidden '>
        <div className='relative'>
          <img 
            src='https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/akhil-yerabati-Q2uV5TkjNz8-unsplash-450x255.jpg'
            alt='Card' 
            className='w-full h-[190px] object-cover rounded-[10px]'
          />
          <button 
            className='absolute bg-[green] top-0 left-0 font-semibold text-white text-[12px] px-2 py-1 rounded'
           
          >
            GADGETS
          </button>
        </div>
  
        <div className='flex py-4'>
          <div className='text-[#CCCCCC] text-4xl font-[600] mr-4'>1</div>
          <div>
            <p className='text-[#161616] mb-2 text-[18px] font-bold hover:text-[#3C3FDE] transition-colors duration-300'>
            Study: Earbuds Use, Youngsters at High Risk of Hearing Loss
            </p>
            <div className='flex gap-3 items-center'>
              <p className='text-[#191919] font-[600] text-[12px]'>Shane Doe</p>
              <div className='text-gray-400 font-[600] text-[12px]'>Mar 15, 2020</div>
            </div>
          </div>
        </div>
      </div>
       <div className=' w-[100%] relative max-w-sm mx-auto rounded-lg overflow-hidden '>
        <div className='relative'>
          <img 
            src='https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/akhil-yerabati-Q2uV5TkjNz8-unsplash-450x255.jpg'
            alt='Card' 
            className='w-full h-[190px] object-cover rounded-[10px]'
          />
          <button 
            className='absolute bg-[green] top-0 left-0 font-semibold text-white text-[12px] px-2 py-1 rounded'
           
          >
            GADGETS
          </button>
        </div>
  
        <div className='flex py-4'>
          <div className='text-[#CCCCCC] text-4xl font-[600] mr-4'>1</div>
          <div>
            <p className='text-[#161616] mb-2 text-[18px] font-bold hover:text-[#3C3FDE] transition-colors duration-300'>
            Study: Earbuds Use, Youngsters at High Risk of Hearing Loss
            </p>
            <div className='flex gap-3 items-center'>
              <p className='text-[#191919] font-[600] text-[12px]'>Shane Doe</p>
              <div className='text-gray-400 font-[600] text-[12px]'>Mar 15, 2020</div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
   </div>

   </>
  )
}

export default Gadget