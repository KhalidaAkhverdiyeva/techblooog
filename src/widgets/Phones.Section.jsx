import React from 'react'
import FooterCard from '../components/FooterCard.component'

const Phones = () => {
  return (
    <>
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
    </>
  )
}

export default Phones