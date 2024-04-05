import React from 'react'
import NameInput from './nameInput.jsx'
import ImageInput from './imageInput.jsx'
import DesigInput from './desigInput.jsx'

const inputs = (props) => {



  return (
    <>
      <div className="flex-col inputFldsWrapCstm">
        <div className="inputFieldsWrapCstm">

          <NameInput setName={props.setName} />
          <DesigInput setDesig={props.setDesig} />        
          <ImageInput userImg={props.userImg} setUserImg={props.setUserImg}/>

        </div>
      </div>
    </>
  )
}

export default inputs