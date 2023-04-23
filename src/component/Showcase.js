import React from 'react'
import showcase from "../images/illustration-working.svg"
import './showcase.css'

export default function Showcase() {
  return (
   <>
   <section className='py-10 lg:py-20'>
    <div className="max-width grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-10 md:place-items-center">
      <article className='text-center md:text-left'>
        <h1 className='info'>More than just shorter links</h1>
        <p className='lg:text-lg text-slate-400 mb-10'>
          Build your brand's recogition and get detailed insidghts on how your links are performing.

        </p>
        <button className='btn-cta rounded-full'>Get Started</button>
      </article>
      <article>
        <img src={showcase} alt="shortly" />
      </article>
    </div>
   </section>
   </>
  )
}
