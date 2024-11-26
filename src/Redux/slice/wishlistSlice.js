import { createSlice } from "@reduxjs/toolkit";


const wishlistSlice=createSlice({
    name:"wishlist",
    initialState:{
        wishlist:[]
    },
    reducers:{
        //add action
        addToWishList:(state,action)=>{
            state.wishlist.push(action.payload)
        },
        removeFromewishlist:(state,action)=>{
            state.wishlist=state.wishlist.filter(item=>item.id!=action.payload)
        }

    }
})

export const{addToWishList,removeFromewishlist}= wishlistSlice.actions
export default wishlistSlice.reducer