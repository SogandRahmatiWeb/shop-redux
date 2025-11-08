// action , reducer

import { createSlice } from "@reduxjs/toolkit"

const savedCart = JSON.parse(localStorage.getItem('cart')) || []

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: savedCart
    },
    reducers: {
        // action
        addToCart: (state, action) => {
            // reducer
            const exist = state.items.find(item => item.id === action.payload.id)
            if (exist) {
                exist.qty += 1
            } else {
                state.items.push({ ...action.payload, qty: 1 })
            }
            localStorage.setItem('cart', JSON.stringify(state.items))
        },
        removeFromCart: (state, action) => {
            state.items = state.items.filter(item => item.id !== action.payload.id)
            localStorage.setItem('cart', JSON.stringify(state.items))
        },
        increseQty: (state, action) => {
            const item = state.items.find(item => item.id == action.payload.id)
            if (item && item.qty < 10) item.qty++
            localStorage.setItem('cart', JSON.stringify(state.items))
        },
        decreaseQty: (state,action) => {
            const item = state.items.find(item => item.id == action.payload.id)
            if (item && item.qty > 1) item.qty--
            localStorage.setItem('cart', JSON.stringify(state.items))
        }
    }
})

export const {addToCart, removeFromCart, increseQty, decreaseQty} = cartSlice.actions
export default cartSlice.reducer