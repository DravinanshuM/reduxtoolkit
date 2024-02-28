import React from 'react';
import Products from './Products.js';

const Home = () => {

  return (
      <div className='mt-5'>
          <h2 className='p-3'>Welcome to Redux toolkit store.</h2>
          <section>
            <h3>Products</h3>
              <Products/>
          </section>
      </div>
  )
}

export default Home;