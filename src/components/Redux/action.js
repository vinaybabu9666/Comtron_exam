export const deleterecord=(payload)=>{
    return{
        type:"Delete_Record",
        payload,
    };
};
export const editrecord=(payload)=>{
    return{
        type:"Edit_Record",
        payload,
    };
};
export const updaterecord=(payload)=>{
    return{
        type:"Update_Record",
        payload,
    };
};
export const addrecord=(payload)=>{
    return{
        type:"Add_Record",
        payload,
    };
};
export const mainaddrecord=(payload)=>{
    return{
        type:"Main_Add_Record",
        payload,
    };
};