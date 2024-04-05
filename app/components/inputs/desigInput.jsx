'use client'

import React from 'react'

const desigInput = (props) => {




  return (
    <>
    
    <label className="form-control w-full max-w-xs">
        <div className="label">
        <span className="label-text">Subheading</span>
        <span className="label-text-alt"></span>
        </div>


        <input onChange={e => props.setDesig(e.target.value)} type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs text-slate-800" />


        <div className="label">
        <span className="label-text-alt"></span>
        <span className="label-text-alt"></span>
        </div>
    </label>
    
    </>
  )
}

export default desigInput