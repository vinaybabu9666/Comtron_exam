import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { deleterecord, editrecord, mainaddrecord } from './Redux/action';
import "./Tablemodule.css"

export default function Table() {

    const data1=useSelector((state)=>state.data);
    const dispatch=useDispatch(data1);
    const Deletefun=(recid)=>{
        const payload={
            recid,
        };
        dispatch(deleterecord(payload));
    };
    const Editfun=(item)=>{
        const payload={
            isEdit:true,
            data:item,
        };
        dispatch(editrecord(payload));
        console.log(item);
    
    };
    const MainAddfun=()=>{
        const payload={
            isAdd:true,
        };
        dispatch(mainaddrecord(payload));
    };

  return (
    <div>
        <h1 className='tabcolor'>Table</h1>
        <div className='div' >
        <table className='tab' >
            <tr className="head">
                <th >Printer #</th>
                <th>Name</th>
                <th>Workstation</th>
                <th>Type</th>
                <th>Actions</th>
            </tr>
            {data1.map((el)=>
            <tr className='tdata'>
                <td >{el.recid}</td>
                <td>{el.name}</td>
                <td>{el.stationnum}</td>
                <td>{el.prtype}</td>
                <td>
                    <button className='btn' onClick={()=>Editfun(el)}>Edit</button>
                    <button className='btn' onClick={()=>Deletefun(el.recid)} >Delete</button>
                </td>
            </tr>
            )}
        </table>
        <button className='btn' onClick={MainAddfun}>Add</button>
    </div>
    </div>
  );
}
