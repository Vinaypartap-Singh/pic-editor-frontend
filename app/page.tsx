


import Header from './components/globals/header';
import CardsSec from './components/cards/cardSec.jsx';
import Footer from './components/globals/footer';
import Faqs from './components/info/faqs.jsx'

import './global.js'


import React from 'react'

export default function Home({}) {



 
  return (
    <>

    <Header />

    




<div className="heroCstm hero py-20 bg-slate-200">
  <div className="hero-content text-center">
    <div className="max-w-md">
      <h1 className="text-5xl font-bold text-white">शब्दांकुर App</h1>
      <p className="py-6 text-lg text-white">स्वागत है आपका शब्दांकुर एप्प में। डाउनलोड करें कस्टमाइज्ड सोशल मीडिया पोस्ट और अपनी ब्रांडिंग की यात्रा शुरू करें।</p>



    </div>
  </div>
</div>


<CardsSec />


















<Faqs />


<Footer />




    </>
  );
}

