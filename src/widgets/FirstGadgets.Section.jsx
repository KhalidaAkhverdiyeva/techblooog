import React from 'react'
import GadgetCard from '../components/GadgetCard.component'

const FirstGadgets = () => {
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
    </>
  )
}

export default FirstGadgets