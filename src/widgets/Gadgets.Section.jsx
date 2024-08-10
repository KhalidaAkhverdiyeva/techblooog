import React from 'react'
import GadgetCard from '../components/GadgetCard.component'

const Gadgets = () => {
  return (
    <>
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
       
    </>
  )
}

export default Gadgets