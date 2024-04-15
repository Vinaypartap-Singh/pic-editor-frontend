"use client"

import React from "react";

 

const ImageInput = (props) => {






let flagVar="";


  function fileReader(e) {
    if(window.FileReader) {
      var file  = e.target.files[0];
      var reader = new FileReader();
      if (file && file.type.match('image.*')) {
        reader.readAsDataURL(file);
      } else {
        console.log('please add an image')
      }
      reader.onloadend = function (e) {

        flagVar=reader.result;
        console.log(flagVar);
        props.setUserImg(flagVar);
      }
    }
  }
  
  

  useEffect(() => {
    document.getElementById('imageUpload').addEventListener('change', fileReader, false);

  }, []);






/*

const imageInput = document.querySelector("#imageUpload");
let uploaded_image = "";

console.log(imageInput);

if (imageInput) {
imageInput.addEventListener('change', function(){
  console.log("yes2"); 
let reader = new FileReader(); 
reader.addEventListener("load", () => {
  uploaded_image = reader.reasult;
  document.querySelector(".userImageMain").style.backgroundImage = `url(${uploaded_image})`
});
reader.readAsDataURL(this.files[0]);
});
}
*/



  return (
    <>

    <label className="form-control w-full max-w-xs ">
        <div className="label">
        <span className="label-text">Pick a file</span>
        <span className="label-text-alt"></span>
        </div>
        <input type="file"  id="imageUpload" accept="image/jpeg, image/png, image/jpg"   className="file-input file-input-bordered w-full max-w-xs text-slate-400"/>
        <div className="label">
        <span className="label-text-alt"></span>
        <span className="label-text-alt"></span>
        </div>
    </label>
    
    </>
  )
}







export default ImageInput