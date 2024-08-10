import React from 'react'
import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';

const VrCard = () => {
    const progress = 85; 
  return (
    <div className=' w-full h-auto md:h-[445px] flex-col md:flex-row  flex rounded-[20px] overflow-hidden'>
        
        <div className='w-[100%] md:w-[50%] order-2 md:order-1 bg-[#0D0D25] p-[20px] md:p-9 flex flex-col justify-center '>
        <button className='bg-[#E40666] text-[12px] py-1 font-semibold text-white w-[80px] rounded-[5px]'>GAMING</button>
            
            <div className='text-white text-[20px] md:text-[27px] font-bold my-[20px] hover:text-[#3C3FDE] transition-colors duration-300'>Pico 4 Review: Should You Actually Buy One Instead Of Quest 2?</div>
            <div className='flex gap-3 items-center'>
                <img
                className='rounded-full w-[21px] h-[21px]'
                src="https://cheerup.theme-sphere.com/wp-content/uploads/2016/05/bella-doe.jpg"
                alt="Shane Doe"
                />
                <p className='text-white text-[12px]'>Shane Doe</p>
                <p className='text-[#ABABB3] text-[12px]'>Jan 19, 2021</p>
    
          </div>
             <p className='text-[#ABABB3] pt-[30px]'>To understand the new smart watched and other pro devices of recent focus, we should look to…</p>

        </div>
        <div className='w-[100%] md:w-[50%] order-1 md:order-2 relative'>
            <div className='h-full w-full'>
                <img className='h-full w-full' src="https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/woman-in-3d-virtual-reality-glasses_t20_WQVvL4-768x513.jpg" alt="" />
                <div className='absolute top-4 right-4 flex items-center justify-center'>
                    <CircularProgress
                    variant="determinate"
                    value={progress}
                    size={40} 
                    thickness={3} 
                    sx={{
                        color: '#3C3FDE'
                      }}
                    />
                    <div
                    className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white font-bold text-[12px] z-10'
                    >
                    {progress}%
                    </div>
                </div>
                </div>
            
        </div>
    </div>
  )
}

export default VrCard