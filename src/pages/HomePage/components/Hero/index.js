import React from 'react'
import Button from '../../../../components/Button'
import HeroImage from '../../../../assets/HeroImage.png'
import './styles.scss'

const Hero = () => (
    <section className='hero-part'>
      <div className='hero-part-container'>
        <div className="hero-text-container">
          <h1 className="hero-heading text-heading nunito">
            Test assignment for front-end developer
          </h1>
          <h3 className="hero-text text-body nunito">
            What defines a good front-end developer is one that has 
            skilled knowledge of HTML, CSS, JS with a vast understanding 
            of User design thinking as they'll be building web interfaces 
            with accessibility in mind. They should also be excited to learn, 
            as the world of Front-End Development keeps evolving.
          </h3>
          <Button text="Sign up" path="/" width="standard" customClass="hero-btn" />
        </div>
        <img src={HeroImage} alt="" className='hero-image'/>
      </div>
    </section>
  )


export default Hero