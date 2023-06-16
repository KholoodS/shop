import React from 'react'
import { Feature } from '../../components'
import './features.css';

const featuresData = [
    {
        title: 'Improving end results instantly',
        text:'From they fine john he give of rich. They age relation'
    },

    {
        title: 'Become the tended active',
        text:'From they fine john he give of rich. They age relation'
    },

    {
        title: 'Messaging service',
        text:'From they fine john he give of rich. They age relation'
    },

    {
        title: 'Laws by country',
        text:'From they fine john he give of rich. They age relation'
    }

]



const Features = () => {
    return (
    <div className="gpt3__features section__padding" id="features">
        <div className="gpt3__features-heading">
            <h1 className="gradient__text">The Future is Now and You Just Need To realize it. Step into Future Today & Make it Happen. </h1>
            <p>Request Early Access To Get Started.</p>
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