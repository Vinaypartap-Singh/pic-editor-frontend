'use client'

import React from 'react'
import Link from 'next/link'
import  { useState } from 'react'; // <--- import the hook


const aboutUs = () => {


  return (
    <>


<div className="hero min-h-screen" style={{backgroundImage: 'url(https://cdn.pixabay.com/photo/2016/11/29/06/37/lines-1867838_1280.jpg)'}}>
  <div className="hero-overlay bg-opacity-75"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-2xl">
      <h1 className="mb-5 text-5xl text-slate-200 font-bold">Branding at ease!</h1>
      <p className="mb-5 text-slate-200">"Welcome to Shabdankur App – your go-to destination for creating captivating social media posts effortlessly. Embrace the spirit of festivals like Holi, Diwali, New Year, and more with our free web app. Simply add your name and choose an image, and watch as Shabdankur crafts stunning mockups tailored for your celebrations. Start spreading joy and festivity with personalized posts today!"





</p>
      <Link href="https://shabdankurprakashan.com"><button className="btn btn-primary text-slate-200">shabdankurprakashan.com</button></Link>
    </div>
  </div>
</div>








    
    </>
  )
}

export default aboutUs