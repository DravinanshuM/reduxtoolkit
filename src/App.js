import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home, Cart, PageNotFound } from './components/pages/index.js';
import Navbar from './components/Navbar.jsx';
import { Provider } from 'react-redux';
import store from './store/store.js';

function App() {
  return (
      <Provider store={store}>
          <BrowserRouter>
              <Navbar />
              <Routes>
                  <Route path='/' element={<Home/>}/>
                  <Route path='/cart' element={<Cart/>} />
                  <Route path='/*' element={<PageNotFound />}/>
              </Routes>
          </BrowserRouter>
      </Provider>
  );
}

export default App;
