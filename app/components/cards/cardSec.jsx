

import React from 'react'

import CardSecLevTwo from './cardSecLevTwo.jsx'

// import './cards.css'
// import './cards.js'




import {client} from '../../lib/sanity.ts'


export async function getData(context) {
  const query = `*[_type == "testimonial"] {
    name, 
    designation, 
    "imageUrl": poster.asset->url
  }`;
  const data = await client.fetch(query, { cache: 'no-store' });
  return data; 
}



const cardSec = async() => {


  const data = await getData();

  return (
    <div className='cardsOtrBxCstm bg-slate-100 py-20 px-16'>
      <CardSecLevTwo data={data}/>
    </div>
  )
}

export const dynamic = "force-dynamic";


export default cardSec