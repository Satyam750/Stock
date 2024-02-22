import React from 'react'
import Navbar from './components/Navbar'
import Main from './components/Main'
import About from './components/About'
import Choose from './components/Choose'
import Expertise from './components/Expertise'
import Product from './components/Product'
import Blogs from './components/Blogs'
import Refer from './components/Refer'
import Footer from './components/Footer'




const App = () => {
  return (
    <>
      <div>

        <Navbar />
        <Main />
        <About />
        <Choose />
        <Expertise />
        <Product />
        <Blogs/>
        <Refer/>
       <Footer/>
      </div>
    </>
  )
}

export default App