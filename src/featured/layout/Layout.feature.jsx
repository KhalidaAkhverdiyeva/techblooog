import Container from '../../components/Container.component'
import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../header/Header'
import Footer from '../footer/Footer'

const Layout = () => {
  return (

    <div>
      <Header/>

      <Container>

      <main>
        <Outlet/>
      </main>

      </Container>

      <Footer/>
    

   
    </div>
   
  )
}

export default Layout