import React, { useEffect, useRef } from "react";
import Image from "next/image";
import * as htmlToImage from 'html-to-image';
import { saveAs } from 'file-saver';

const Cards = (props) => {


  const nodeRef = useRef(null);

  const handleScreenshot = async () => {
    const image = await htmlToImage.toPng(nodeRef.current);
    // you can use this image in any way you want
    console.log(image)
    let file = convertBase64ToFile(image, "image.png");
    saveAs(file, "image.png");
  };
  
  const convertBase64ToFile = (base64String, fileName) => {
    let arr = base64String.split(',');
    let mime = arr[0].match(/:(.*?);/)[1];
    let bstr = atob(arr[1]);
    let n = bstr.length;
    let uint8Array = new Uint8Array(n);
    while (n--) {
       uint8Array[n] = bstr.charCodeAt(n);
    }
    let file = new File([uint8Array], fileName, { type: mime });
    return file;
  }







  return (

    <>
      <div className="card w-96 bg-base-100 shadow-xl content-center	flex" ref={nodeRef}>

      <figure><Image src={props.image} width="100%" alt="poster image" /></figure>
      <div className="card-body">
      <div className=" h-28 w-28 rounded-full">
        <Image id="UserUploadImageID" src={props.userImg} className="rounded-full userImageMain" alt="poster image main" />
      </div>
      <h2 className="card-title">{props.newname}</h2>
          <p>{props.newdesig}</p>
      </div>
      </div>
      
      <button onClick={handleScreenshot} className="btn btn-secondary bg-transparent btn-block text-slate-400 rounded-none border-0">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
        Download
      </button>
      </>

  )
}

export default Cards