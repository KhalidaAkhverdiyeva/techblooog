import React from 'react'

import { FaGripfire } from "react-icons/fa6";
import Subscribe from '../../components/Subscribe';
import Socials from '../../components/Socials.component';
import FooterCard from '../../components/FooterCard.component';





const Footer = () => {
  return (
    <footer >
      
      <div id='footer-top ' className='bg-[#0F0F11] py-[60px]'>

      <div className='w-full max-w-[1240px] mx-auto flex gap-[50px] px-4 md:px-0 flex-col md:flex-row'>

          <div className='flex-1'>
            <h2 className='text-white text-[15px] font-semibold mb-[10px]'>MOST POPULAR</h2>
            <div >

              <div id='cards'  className='flex text-white py-[15px] border-b-[1px] border-b-gray-800'>
                <div className='mr-[18px] w-[23%] '><img className='rounded-[10px] h-full' src="https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2021/01/kamil-s-SuPAbuuK7f4-unsplash-150x100.jpg" alt="" /></div>
                <div className='w-[77%]'>
                  <span className='text-[16px] font-semibold'>Popular New Xbox Game Pass Game Being Review Bombed With “0s”</span>
                  <div className='text-white flex gap-3'>
                    <span className='text-gray-500 text-[12px] font-semibold'>Jan 14, 2021</span>
                    <span className='text-[#FF0000] text-[12px] flex items-center gap-1'><FaGripfire /> 7,792 Views</span>
                    </div>
                </div>
              </div>
             
              <div id='cards'  className='flex text-white py-[15px] border-b-[1px] border-b-gray-800'>
                <div className='mr-[18px] w-[23%] '><img className='rounded-[10px] h-full ' src="https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2021/01/jonathan-kemper-poSms2EzfNY-unsplash-150x100.jpg" alt="" /></div>
                <div className='w-[77%]'>
                  <span className='text-[16px] font-semibold'>Samsung is Developing Bright MicroLED on Displays for AR Headsets</span>
                  <div className='text-white flex gap-3'>
                    <span className='text-gray-500 text-[12px] font-semibold'>Jan 14, 2021</span>
                    <span className='text-[#FF0000] text-[12px] flex items-center gap-1'><FaGripfire /> 7,792 Views</span>
                    </div>
                </div>
              </div>
             
              <div id='cards'  className='flex text-white py-[15px] '>
                <div className='mr-[18px] w-[23%]'><img className='rounded-[10px] h-full ' src="https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2021/01/0247d91565b69ed9ddba4ec59ac97963-1-150x86.jpg " alt="" /></div>
                <div className='w-[77%]'>
                  <span className='text-[16px] font-semibold'>Warner Bros. Games Announces Mortal Kombat: Onslaught</span>
                  <div className='text-white flex gap-3'>
                    <span className='text-gray-500 text-[12px] font-semibold'>Jan 14, 2021</span>
                    <span className='text-[#FF0000] text-[12px] flex items-center gap-1'><FaGripfire /> 7,792 Views</span>
                    </div>
                </div>
              </div>
             
              
            </div>
            

          </div>
          <div className='flex-1' >
          <h2 className='text-white text-[15px] font-semibold mb-[10px]'>OUR PICKS</h2>
            <div >
                <FooterCard
                imageUrl="https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/thisisengineering-raeng-a7A9O5htrKs-unsplash-450x300.jpg"
                title="Game Development This Week: Save On Essential Tools and More"
                date="Nov 19, 2022"
              />
              <FooterCard
                imageUrl="https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/Depositphotos_242235046_xl-2015-1-450x256.jpg"
                title="Is the Hyperloop Doomed? What Elon Musk’s Latest Setback Really Means"
                date="Jan 14, 2021"
              />
              <FooterCard
                imageUrl="https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/remy_loz-3vVzdb8KKIw-unsplash-450x300.jpg"
                title="The Best Early Black Friday Deals on Gaming Laptops and Accessories"
                date="Jan 14, 2021"
                hasBorder = {false}
              />
              
            </div>

          </div>
          <div className='flex-1'>
          <Subscribe/>
          </div>

        </div>

      </div>


      <div id='footer-bottom' className='bg-black mx-auto'>
        <div className='w-full max-w-[1240px] mx-auto flex flex-col justify- items-center py-[60px]'>
        <div className='flex mb-[24px] gap-2'>
          <Socials/>
        </div>
        <ul className='list-none flex text-[13px] font-bold text-white mb-[20px]'>
        <li className='mb-[11px] mr-[25px]'>HOME</li>
        <li className='mb-[11px] mr-[25px]'>PHONE</li>
        <li className='mb-[11px] mr-[25px]'>ABOUT</li>
        <li className='mb-[11px] mr-[25px]'>CONTACT</li>
        </ul>
        <div className='text-[#777777] text-[13px]'>© 2024 ThemeSphere. Designed by <span className='text-[#BBBBBB]'>ThemeSphere</span>.</div>
        </div>
      </div>




    </footer>
  )
}

export default Footer