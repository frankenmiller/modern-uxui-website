import React from 'react'
import './header.css';
import people from '../../assets/people.png';
import {ai} from '../../assets/ai.png';


const Header = () => {
  return (
    <div className='gtp3__header section__padding' id='home'>
      <div className='gpt__header-content'>
        <h1 className='gradient__text'>
          FRANKENMILLER's Modern UX-UI Website Build in ReactJS using GPT-3 OpenAI and Figma Software
        </h1>
        <div className='gpt3__header-content__input'>
          <input type="email" placeholder='Your Email Address' />
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <button type='button'>Get Started</button>
        </div>
        <div className='gpt3__header-content__people'>
          <img src={people} alt="bubble img's for ppl's faces" />
          <p>1600 people have visited in the last 24 hours</p>
        </div>
      </div>
    </div>
  )
}

export default Header