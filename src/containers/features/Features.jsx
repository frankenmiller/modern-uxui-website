import React from 'react'
import './features.css';
import Feature from '../../components/feature/Feature';

const featuresData = [
  {
    title: 'A coming convergenece like we\'ve never seen',
    text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo'
  },
  {
    title: 'Blockchain is the future',
    text: 'Omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo sed ut perspiciatis unde o'
  },
  {
    title: 'Trustless and self executing',
    text: 'Accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo sed ut perspiciatis unde omnis iste natus error sit voluptatem a'
  },
  {
    title: 'Logic based disinflationary ultrasound money',
    text: 'Totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium'
  }
]


const Features = () => {
  return (
    <div className='gpt3__features section__padding' id='features'>
      <div className="gpt3__features-heading">
        <h1 className='gradient__text'>The Future is Now, you just need to realize it. Step into the future today and make it happen</h1>
        <p>REQUEST EARLY ACCESS TO GET STARTED</p>
      </div>
      <div className="gpt3__features-container">
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
    </div>
  )
}

export default Features