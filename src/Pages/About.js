import React from 'react'
import './about.css'


const items = [
  {
    img: 'link_icon',
    heading: 'URL Shortener',
    para: "LinkSnap is a URL Shortener and Link Management Platform. It offers a lot of features that will help you handle all your links in an intuitive way and reveal the potential of your links."
  },
  {
    img: 'link_icon2',
    heading: 'Link analytics',
    para: "LinkSnap is an advanced Link Analytics platform that tracks clicks on short links and provides extensive statistics to help you measure the effectiveness of your short links."
  },
  {
    img: 'link_icon3',
    heading: 'Link in bio',
    para: "LinkSnap lets you create your own link-in-bio microsites so you can better reach your audience, measure click-through rates, and grow your audience with customizable link-in-bios."
  },
  {
    img: 'link_icon4',
    heading: 'QR Codes',
    para: "With LinkSnap, you can easily generate and customize QR codes to match your brand and track their performance. Use QR codes to grow your business and measure their impact on your marketing efforts."
  },
]

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
        <div className='all'>
          {items.map((item) => (
            <div className='about-card'>
              <div >
                <div className='figure'>
                  <img src={`/img/${item.img}.svg`} alt="link-icon-img" />

                </div>
                  <h4>{item.heading}</h4>
                  <p>{item.para}</p>
                </div>
              </div>))}
            </div>
        
      </div>
      </div>
      )
}

      export default About