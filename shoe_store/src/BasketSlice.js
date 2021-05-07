import { createSlice } from "@reduxjs/toolkit";
import {shoes} from './Products'

export const basketSlice = createSlice({
    name: "Basket",
    initialState : {
        shoes:[],
        totalvalue: [],
        total:0
    },
    reducers: {
        add:(state,action)=>{
              state.shoes.push(action.payload)
              state.totalvalue.push(shoes[action.payload].price)
              state.total=state.totalvalue.reduce((total,num)=>{
                    return total+num
              })
        },
        remove:(state,action)=>{
            state.shoes = state.shoes.filter(function(value, index, arr){ 
                return value !== action.payload;
            });
            state.totalvalue=[]
            state.shoes.map((shoe)=>{
                state.totalvalue.push(shoes[shoe].price)
            })
            if(state.totalvalue.length>0){
            state.total=state.totalvalue.reduce((total,num)=>{
                return total+num
            })}else state.total=0
      },
        empty:(state)=>{
            state.shoes=[]
            state.total = 0
      }

    }
});

export const { add, empty, remove } = basketSlice.actions;
export default basketSlice.reducer;