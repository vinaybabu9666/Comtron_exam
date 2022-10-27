import React from 'react'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { updaterecord } from './Redux/action';

export default function EditForm() {
    const data2=useSelector((state)=>state.currentData);
    const dispatch=useDispatch();
    const[input,setInput]=useState(data2);

    const Inputfun=(event)=>{
        const{name,value}=event.target;
        setInput({...input,[name]:value});
    };
    const Updatefun=()=>{
        const payload={ 
            // isEdit:true,
            data:input,
        };
        dispatch(updaterecord(payload));
    }

  return (
    <div>
        <h1 className='tabcolor'>Edit Form</h1><br></br>
        <div className='form'>
            <input className='input' name="recid" value={input.recid} placeholder="Printer #" onChange={Inputfun}/><br></br><br></br>
            <input  className='input' name="name" value={input.name} placeholder="Name #" onChange={Inputfun}/><br></br><br></br>
            <input  className='input' name="stationnum" value={input.stationnum} placeholder="Work Station #" onChange={Inputfun}/><br></br><br></br>
            <input  className='input' name="prtype" value={input.prtype} placeholder="Printer type #" onChange={Inputfun}/><br></br><br></br>

            <button className='btn' onClick={Updatefun}>Update</button>
        </div>
    </div>
  )
}
