import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Navbar from './Navbar/Navbar';
import HotSection from './Hot/Hot'
import Popular from './Popular/Popular'
import Cart from './Cart/Cart'

const client_id = 'f9uj36yrvep8lp82jxb769mn581ao6';
const client_secret = '3gva5ttpw3f7pemepchz04f1tpfwe2';
const acess_data = 
{
  "access_token": "t94a2403smdrdvttnyz5rqkfzfxrzm",
  "expires_in": 5491183,
  "token_type": "bearer"
}




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navbar />
    <HotSection />
    <Popular />
    <Cart />
  </React.StrictMode>
);

