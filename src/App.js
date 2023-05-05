import React from 'react'
import './App.css';
import {Footer, Features, Possibility, Header, WhatGPT3, Blog} from './containers';
import Article from './components/article/Article';
import Brand from './components/brand/Brand';
import Feature from './components/feature/Feature';
import CTA from './components/cta/CTA';
import Navbar from './components/navbar/Navbar';

const App = () => {
  return (
    <div className='App'>
      <div className='gradient__bg'>
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
  )
}

export default App