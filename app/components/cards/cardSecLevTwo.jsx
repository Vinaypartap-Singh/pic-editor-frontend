'use client'

import React from 'react'
import { useState } from 'react';




import Inputs from '../inputs/inputs.jsx'
import Cards from './cards.jsx';

const CardSecLevTwo = (props) => {

    const [name, setName] = useState("Your Name Here");
    const [desig, setDesig] = useState("Sub Heading");    
    let [userImg, setUserImg] = useState("https://t3.ftcdn.net/jpg/06/36/69/86/360_F_636698674_DroChEj5eWmZiaZOSDMnj8hcDqqw74Fp.jpg");

    function handleUserImgState(flagVar) {
      //setUserImg(flagVar);
      console.log(flagVar);
      setUserImg(flagVar);

   }

    const datas = props.data;
    console.log(datas);  

  return (
    <>
    

    <h1>{userImg}</h1>
    <div className='cstmContainer flex-row flex gap-10'>

    <Inputs setName={setName} setDesig={setDesig} userImg={userImg} setUserImg={handleUserImgState}/>

    <div className="gap-10 flex cardsWrapCstm">
    {datas.map((post, idx) => (
    <div key={idx}>
        
        <Cards image={post.imageUrl} name={post.name} designation={post.designation} newname={name} newdesig={desig}  userImg={userImg}/> 


    </div> 
    ))}



    </div> 

    </div>
    
    </>
  )
}

export default CardSecLevTwo