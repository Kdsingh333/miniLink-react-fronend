import React from 'react';
import brand from "../images/icon-brand-recognition.svg";
import records from "../images/icon-detailed-records.svg";
import fully from "../images/icon-fully-customizable.svg"

export default function Advanced() {
    return (
        <>
            <section className="bg-gray-100 py-10 lg:py-20">
                <div className='max-width'>
                    <h2 className='text-4xl font-bold text-slate-800 mb-3 text-center'>Advanced Statistics</h2>
                    <p className='text-slate-400 text-center mb-10 lg:mb-20'>Track how your links are performing across the web with our
                        advanced statistics dashboard.
                    </p>
                    <div className='grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3'>
                        <article className='bg-white p-5 rounded'>
                            <img src={brand} className="p-3 -mt-12 bg-slate-800 rounded-full" alt="" />
                            <h3 className='text-slate-800 text-lg mt-5 mb-3 font-bold'>Brand Recognition</h3>
                            <p className='text-slate-400 text-sm'>Boost your brand recognition with each click. Generic links don't mean a thing.Branded links help instil confidence in you content.</p>
                        </article>
                        <article className='bg-white p-5 rounded'>
                            <img src={records} className="p-3 -mt-12 bg-slate-800 rounded-full" alt="" />
                            <h3 className='text-slate-800 text-lg mt-5 mb-3 font-bold'>Details Records</h3>
                            <p className='text-slate-400 text-sm'>Gain insight into who is clicking your links, knowing when and where people engage with your content helps inform better decisions.</p>
                        </article>
                        <article className='bg-white p-5 rounded'>
                            <img src={fully} className="p-3 -mt-12 bg-slate-800 rounded-full" alt="" />
                            <h3 className='text-slate-800 text-lg mt-5 mb-3 font-bold'>Fully Customizable</h3>
                            <p className='text-slate-400 text-sm'>Improve brand awareness and content discoverability through customizable links, supercharging audience engagment</p>
                        </article>
                    </div>
                </div>
            </section>
        </>
    )
}
