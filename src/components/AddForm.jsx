import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addrecord } from './Redux/action';

export default function AddForm() {
    const init={
        recid:"",
        name:"",
        stationnum:"",
        prtype:"",
    };

    //const data3=useSelector((state)=>state.currentData);
    const dispatch=useDispatch();
    const[input,setInput]=useState(init);

    const Inputfun=(event)=>{
        const{name,value}=event.target;
        setInput({...input,[name]:value});
    };

    const Addfun=()=>{
        const payload={
            data:input,
        };
        dispatch(addrecord(payload));
    };
  return (
    <div>
        <h1 className='tabcolor'>Add Form</h1><br></br>
        <div>
            <div className='form'>
            <input  className='input' name="recid" value={input.recid} placeholder="Printer #" onChange={Inputfun}/><br></br><br></br>
            <input  className='input' name="name" value={input.name} placeholder="Name #" onChange={Inputfun}/><br></br><br></br>
            <input  className='input' name="stationnum" value={input.stationnum} placeholder="Work Station #" onChange={Inputfun}/><br></br><br></br>
            <input  className='input' name="prtype" value={input.prtype} placeholder="Printer type #" onChange={Inputfun}/><br></br><br></br>

            <button className='btn' onClick={Addfun}>Add</button>
        </div>
    </div>
    </div>
  )
}
