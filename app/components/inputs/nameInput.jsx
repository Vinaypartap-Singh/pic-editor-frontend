'use client'

import React from 'react'

const nameInput = (props) => {




  return (
    <>
    
    <label className="form-control w-full max-w-xs">
        <div className="label">
        <span className="label-text">What is your name?</span>
        <span className="label-text-alt"></span>
        </div>


        <input onChange={e => props.setName(e.target.value)} type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs text-slate-800" />


        <div className="label">
        <span className="label-text-alt"></span>
        <span className="label-text-alt"></span>
        </div>
    </label>
    
    </>
  )
}

export default nameInput