import React, { Component,useState } from 'react'
import { GetGames } from '../GetGames'
import './Popular.css'
import axios from 'axios'

export default class Popular extends Component {
    
  render() {


    return (
      <div className="popular-section">
          <div className="popular-top">
            <h1>Popular games</h1>
          </div>
          <div className="grid-games">
              <GetGames />

          </div>
      </div>
      
    )
  }
}
