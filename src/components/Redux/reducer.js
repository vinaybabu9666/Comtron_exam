const init={
    isEdit:false,
    //isadd:false,
    currentData:{},
    data:[{
        recid : "20",
        name : "COIN",
        stationnum : "99",
        prtype: "zebra",
},
{
        recid : "30",
        name : "Vinay",
        stationnum : "88",
        prtype: "zebraa",
},
],
};

const reducer=(state=init,action)=>{
    const{type,payload}=action;
    switch(type){
        case "Delete_Record":
            const filteredData=state.data.filter((el)=>el.recid!==payload.recid);
            return{
                ...state,
                data:filteredData,
            };
            case "Edit_Record":
                return{
                    ...state,
                    isEdit:payload.isEdit,
                    currentData:payload.data,
                };
                case "Update_Record":
                    // const update = state.data.findIndex(item => item.id !==payload.data.recid);
                    const update=state.data.findIndex(item=>item.recid===payload.data.recid);
                    console.log(update);
                    const newData=[...state.data];
                    newData[update]=payload.data;
                    return{
                        
                        ...state,
                        isEdit:false,
                        data:newData,
                    };
                    case "Add_Record":
                        return{
                            isAdd:false,
                            data:[...state.data,payload.data],
                        };
                    case "Main_Add_Record":
                        return{
                            ...state,
                            //isAdd:payload.isAdd,
                            isAdd:true,
                        };

            default:
                return{
                    ...state,
                }
    }
   

}
export {reducer};