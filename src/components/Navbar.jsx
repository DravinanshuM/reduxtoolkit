import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

// import useSelector form react-redux.
import  { useSelector } from 'react-redux';

const Navbar = () => {

    const items = useSelector((state)=> state.cart);

  return (
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-lg-12 col-md-12 col-12 position-fixed' style={{backgroundColor: "#f0f0f0"}}>
                    <div className='Main'>
                        <span className='logo fw-bold'>Redux Toolkit Store</span>
                        <div>
                            <Link to="/" className='navLink'>Home</Link>
                            <Link to="/cart" className='navLink'>Cart</Link>
                            <button type="button" className="btn btn-primary position-relative">
                                Cart items
                                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"> {items.length}
                                    <span className="visually-hidden">unread messages</span>
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Navbar;