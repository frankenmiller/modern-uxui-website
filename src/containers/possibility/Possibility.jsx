import React from 'react';
import './possibility.css';
import possibility from '../../assets/possibility.png';


const Possibility = () => {
  return (
    <div className='gpt3__possibility section__padding' id='possibility'>
      <div className='gpt3__possibility-image'>
        <img src={possibility} alt="img of possibilities" />
      </div>

      <div className="gpt3__possibility-content">
        <h4>REQUEST EARLY ACCESS TO GET STARTED</h4>
        <h1 className='gradient__text'>The Possibilities are beyond your imagination</h1>
        <p>Architecto beatae vitae dicta sunt explicabo. sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi.</p>
        <h4>REQUEST EARLY ACCESS TO GET STARTED</h4>
      </div>
    </div>
  )
}

export default Possibility