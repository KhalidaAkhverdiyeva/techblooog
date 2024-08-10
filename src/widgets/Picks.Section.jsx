import React from 'react'
import PicksCard from '../components/PicksCard.component'

const Picks = () => {
  return (
    <>
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
    </>
  )
}

export default Picks