import React from 'react'
import possibilityImage from '../../assets/possibilityImage.png'
import './possibility.css'

const Possibility = () => {
  return (
    <div className="gpt3__possibility section__padding" id= "possibility">
      <div className="gpt3__possibility-image">
        <img src={possibilityImage} alt="possibility"/>
      </div>
      <div className="gpt3__possibility-content">
          <h4>Register Today To Get Early Access & Get Started</h4>
          <h1 className="gradient__text">The Possibilities Are Endless. </h1>
          <p>Yet bed any traveling assistance indulgence unpleasing not the thoughts all exercise blessing. Indulgence for joy in everything. Party orders to help achieve what you need. </p>
          <h4>Request Early Access To Get Started</h4>
      </div>
    </div>
  )
}

export default Possibility