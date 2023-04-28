 import React from 'react'
 import { useState, useEffect } from 'react'
 import { useSelector } from "react-redux";
import './PopMessages.css';
import { useDispatch } from "react-redux";
import { passAlert } from "../features/PopAlert";




const PopMessages = ()=>{

  const dispatch = useDispatch();
  const alertMessage = useSelector((state) => state.content.value);
  const color = alertMessage.color;
  const message = alertMessage.message;
  const thisclassname =alertMessage.classname;
//   const test = dispatch(passAlert({message:" ",
//   color:" ", classname:"popmessage ", icon:""}));
 
//   const [name, setName] = useState("popmessageoff ");
// const nameOfClass =() =>{ setName(thisclassname); dispatch(passAlert({message:" ",
// color:" ", classname:"popmessage ", icon:""})); setTimeout(() => {
//   setName("popmessageoff");
// }, 1000);   }
// useEffect(()=>{nameOfClass()}, [thisclassname])

 
  return(
    <div className={thisclassname} >
        <div className='container' >
          <p style={{ color: color}}>{message}</p>

        </div>
        {/* {test} */}
      
        
    </div>
  );

}
export default PopMessages;