export const addItemToCart=(item)=>({
    type:createSlice.actions.addItemToCart.type,
    payload:{
        id:item.id,
        Device:item.Device,
        quantity:1
    }
});

export const removeItem=(id)=>({
    type:createSlice.actions.removeItem.type,
    payload:{
        id,
    }
})

export const updateQuantity=(id,newQuantity)=>({
    type:createSlice.actions.updateQuantity.type,
    payload:{
id,
quantity:newQuantity,
    }
})

// Dispatching Actions in Components:

// JavaScript
// import { useDispatch } from 'react-redux';

// // In a component:
// const dispatch = useDispatch();

// const handleAddToCart = (item) => {
//   dispatch(addItemToCart(item));
// };

// const handleRemoveItem = (id) => {
//   dispatch(removeItem(id));
// };

// const handleUpdateQuantity = (id, newQuantity) => {
//   dispatch(updateQuantity(id, newQuantity));
// };