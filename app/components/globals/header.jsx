import React from 'react'
import Link from 'next/link'


const header = () => {
  return (
    <>
    

  <div className="navbar bg-slate-800">
  <div className="flex-1">
    <Link href="/" className="btn btn-ghost text-xl">ShabdankurAPP</Link>
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal px-1">
      <li><Link href="/">Home</Link></li>
      <li><Link href="/about">About</Link></li>
    </ul>
  </div>









</div>
    
    </>
  )
}

export default header