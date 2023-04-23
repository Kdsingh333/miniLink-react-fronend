import React from 'react'
import "./Pricing.css";

import greenC from "../images/icon8.svg"

function Pricing() {
    return (
        <div>
            <div className='heading'>
                <h2 className='h2-heading'>Pricing Plans</h2>
                <p>..to help you grow, not your bill </p>
            </div>
            <div class='main-div'>
                <div className='price-box'>
                    <h3>
                        Free
                    </h3>
                    <p>
                        Getting started with Free
                    </p>
                    <p class='pr'>
                        0$
                    </p>
                    <p>
                        /mo
                    </p>

                    <p>0$ with annual payment</p>

                    <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded-full">Sign up</button>
                    <p>10 url per day</p>

                    <hr />
                    <div class="icon-access">
                        <img src={greenC} alt="" />
                        <p>Unlimited access</p>
                    </div>
                </div>
                <div className='price-box'>
                    <h3 style={{ color: "yellow" }}>
                        Lite
                    </h3>
                    <p>
                        Perfect for new marketers
                    </p>
                    <p class='pr'>
                        19$
                    </p>
                    <p>
                        /mo
                    </p>

                    <p>17.10$ with annual payment</p>

                    <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded-full">Sign up</button>
                    <p>1200 url per day</p>

                    <hr />

                    <div class="icon-access">
                        <img src={greenC} alt="" />
                        <p>Link redirects
                        </p>
                    </div>
                    <div class="icon-access">
                        <img src={greenC} alt="" />
                        <p>Click or scan

                        </p>
                    </div>
                    <div class="icon-access">
                        <img src={greenC} alt="" />
                        <p>UTM Builder
                        </p>
                    </div>

                </div>
                <div className='price-box'>
                    <h3 style={{ color: "green" }}>
                        Essential
                    </h3>
                    <p>
                        Ideal for growing bussinesses
                    </p>
                    <p class='pr'>
                        29$
                    </p>
                    <p>
                        /mo
                    </p>

                    <p>26.10$ with annual payment</p>

                    <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded-full">Sign up</button>
                    <p>Unlimited url per day</p>

                    <hr />
                    <div className='icon-div'>
                        <div class="icon-access" style={{marginRight:"35px"}}>
                            <img src={greenC} alt="" />
                            <p>Location and device type data</p>
                        </div>
                        <div class="icon-access">
                            <img src={greenC} alt="" />
                            <p>Advanced performance dashboard</p>
                        </div>
                        <div class="icon-access" >
                            <img src={greenC} alt="" />
                            <p>QR Code multiple download asses</p>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Pricing