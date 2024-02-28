import React from 'react';
import './Products.css';

// useSelector.
import { useSelector, useDispatch } from 'react-redux';

// import remove function from cartSlice.
import { remove } from '../../store/cartSlice.js';

const Cart = () => {

  const products = useSelector((state)=> state.cart);
  const dispatch = useDispatch();

  // for removing data.
  const handleRemove = (itemId) => {
    console.log('Removing item:', itemId);
    dispatch(remove(itemId));
  }
  

  return (
    <div className='productWrapper mt-5 p-5'>
         { products && products.length > 0 ? (
             products.map((items, index)=>(
              <div key={index}>
                  <img src={items.image} alt='error-images'className='img-fluid'/>
                  <h4>{items.title}</h4>
                  <h5>{items.price}</h5>
                  <button className='btn btn-sm btn-primary' type='button' onClick={() => handleRemove(items.id)}>Remove</button>
              </div>
            ))
         ) : (
           <h1 className='mt-5 fs-1'>There is no Data</h1>
         )}
       </div> 
  )
}

export default Cart;