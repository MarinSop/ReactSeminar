import React, { Component } from 'react'
import './Hot.css'
import backgroundImg from './deathstranding.jpg'
import winLogo from './windows.png'
import xbLogo from './xbox.png'
import psLogo from './playstation.png'
import {GetGames} from '../GetGames'

const client_id = 'f9uj36yrvep8lp82jxb769mn581ao6';
const client_secret = '3gva5ttpw3f7pemepchz04f1tpfwe2';
const acess_data = 
{
  "access_token": "t94a2403smdrdvttnyz5rqkfzfxrzm",
  "expires_in": 5491183,
  "token_type": "bearer"
}
export default class Hot extends Component {
  render() {
    return (
      <div className="hot-section">
          <img src={backgroundImg}></img>
          <div className="fade">
                <div className="content">
                <h1>Death<br></br> Stranding</h1>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum officia nihil quod beatae ducimus tempora sint,
                   in maxime ea molestiae iste sunt repudiandae dolore! Animi numquam laboriosam minus nulla quaerat!
                </p>
                <div className="genres"> GENRES:
                    <button>Adventure</button>
                    <button>Action</button>
                    <button>Open world</button>
                </div>
                <div className="platforms"> PLATFORMS:
                    <img src={winLogo}></img>
                    <img src={xbLogo}></img>
                    <img src={psLogo}></img>
                </div>
                <button>Add to cart</button>
              </div>
          </div>
      </div>
    )
  }
}

