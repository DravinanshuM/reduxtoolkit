import React, { useState, useEffect } from 'react';
import './Products.css';

// import useDispatch.
import { useDispatch, useSelector } from 'react-redux';

// import add function.
import { add } from '../../store/cartSlice';

// import fetchProduct
import { STATUSES, fetchProduct } from '../../store/productSlice';

const Products = () => {
  // const [products, setProducts] = useState([]);
  const dispatch = useDispatch();
  const {data: products, status} = useSelector((status)=> status.product);

  // // useEffcet Call.
  useEffect(()=>{
        dispatch(fetchProduct());

    // const fetchProducts = async () => {
    //     try {
    //       const res = await fetch(`https://fakestoreapi.com/products`);
    //       const data = await res.json();
    //       // console.log(res);
    //       // console.log(data);
    //       setProducts(data);
    //     } catch (error) {
    //       console.log("ERROR :: ", error.message);
    //     }
    // }
    // fetchProducts();

  },[]);




  // for add product function.
  const handleAdd = (product) => {
    dispatch(add(product));
  }


  // check status.
  if(status === STATUSES.LOADING) {
    return <h1>Loading...</h1>
  }
  
  if( status === STATUSES.ERROR) {
    return <h2>Somthing went wrong...</h2>
  }

  return (
       <div className='productWrapper'>
         {
            products.map((items)=>(
              <div key={items.id}>
                  <img src={items.image} alt='error-images'className='img-fluid'/>
                  <h4>🔥🔥🚀 :: {items.title}</h4>
                  <h5>🔥🔥🚀 :: {items.price}</h5>
                  <button className='btn btn-sm btn-primary' type='button' onClick={()=>handleAdd(items)}>Add To Cart</button>
              </div>
            ))
         }
       </div>
  )
}

export default Products;