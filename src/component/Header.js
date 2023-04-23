import React from 'react'
import './header.css'
// import "./Header.css"
import { useState } from 'react';
import { Link } from 'react-router-dom';
function Header() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <header className="header max-width py-5">
        <div className="flex  items-center justify-between">
          <article className="flex items-center">
            <p className='logo'>LinkSnap</p>

            <nav className="hidden md:block md:ml-5">
              <ul className="flex items-start justify-start">
                <li className="my-5 md:my-0 md:mx-5" >
                  <Link to="/" className="text-slate-400">Home</Link>
                </li>
                <li className="my-5 md:my-0 md:mx-5">
                  <Link to="/about" className="text-slate-400">About us</Link>
                </li>
                <li className="my-5 md:my-0 md:mx-5">
                  <Link to="/pricing" className="text-slate-400">Pricing</Link>
                </li>
                <li>
                  <Link  className="text-slate-400">Resources</Link>
                </li>
              </ul>
            </nav>
          </article>

          {isOpen && (
            <div className="absolute left-5 right-5 top-20 rounded bg-slate-900 text-slate-200 text-center py-10 md:relative md:top-0 md:left-0 md:right-0 md:bg-transparent md:text-slate-700 md:text-left md:py-0 md:flex md:items-center">
              <nav className="md:hidden">
                <ul className="flex flex-col items-center justify-center">
                  <li>
                    <Link to="/home" >Home</Link>
                  </li>
                  <li>
                    <Link to="/about" >About us</Link>
                  </li>
                  <li className="my-5">
                    <Link to="/pricing" >Pricing</Link>
                  </li>
                  <li>
                    <Link  >Resources</Link>
                  </li>
                </ul>
              </nav>
              <ul className="flex flex-col items-center justify-center">
                <li className="my-5">
                  <button className="text-slate-400">Login</button>
                </li>
                <li>
                  <button className="btn-cta rounded-full">Sign Up</button>
                </li>
              </ul>
            </div>
          )}

          <div className="hidden md:block">
            <ul className="flex items-center ml-5">
              <li className="my-5 md:my-0 md:mr-5">
                <button className="text-slate-400">Login</button>
              </li>
              <li>
                <button className="btn-cta rounded-full">Sign Up</button>
              </li>
            </ul>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="uppercase text-sm tracking-wide md:hidden"
          >
            {isOpen ? "Close" : "Menu"}
          </button>
        </div>
      </header>
    </>
  );
}

export default Header