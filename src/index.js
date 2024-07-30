import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Provider } from 'react-redux';
import store from './store';
import { BrowserRouter, Routes, Route, Link , RouterProvider,Outlet, NavLink} from "react-router-dom";
import Calendar from './components/Calendar';
import Admin from './components/admin/Admin';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
<BrowserRouter>
<div>
<nav>
    <ul className='App_ul'>
      <li><Link to="/">🏠︎</Link></li>
      <li><Link to="admin">Admin</Link></li>
    
    </ul>
  </nav>
</div>


      <Routes>
          <Route path="/" element={<Calendar/> } />
          <Route path="admin" element={<Admin/> } />
      </Routes>

    </BrowserRouter>
    </Provider>
);
