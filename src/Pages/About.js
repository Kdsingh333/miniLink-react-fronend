import React from 'react'
import './about.css'
import linkicon from '../images/link_icon.svg'

function About() {
  return (
    <div>
      <div>
        <div className='intro'>
          <h2>
            What is LinkSnap <span>?</span>
          </h2>
          <p>
            LinkSnap is a powerful and user-friendly URL shortener that helps you to easily shorten and customize long links into short, easy-to-remember ones. Our mission is to simplify the process of sharing links, making it easy for businesses and individuals to share information, promote their content, and drive more traffic to their websites.

            At LinkSnap, we believe that every link should be memorable, shareable, and easy to track. That's why we've designed our platform to be intuitive and user-friendly, with a range of customization options and analytics tools to help you make the most of your links.
          </p>
        </div>
        <div className='about-card'>
          <div >
            <img src={linkicon} alt="link-icon-img"/>

              <h4>URL Shortener</h4>
              <p>Cuttly is a URL Shortener and Link Management Platform. It offers a lot of features that will help you handle all your links in an intuitive way and reveal the potential of your links.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About