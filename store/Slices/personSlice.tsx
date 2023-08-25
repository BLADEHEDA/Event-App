import { createSlice } from "@reduxjs/toolkit"

 const personSlice=createSlice( {
    name:'person',
    initialState:{
        isSelected:false  // give the initial staet 
    },
 reducers:{
// define toggle state function 
    checkboxToggle:(state,action)=>{
    state.isSelected=action.payload
    }

}
})
export const {checkboxToggle} = personSlice.actions
export default personSlice.reducer