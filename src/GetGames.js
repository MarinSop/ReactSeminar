import React, { useEffect, useState } from 'react'
import axios from 'axios'

const client_id = 'f9uj36yrvep8lp82jxb769mn581ao6';
const client_secret = '3gva5ttpw3f7pemepchz04f1tpfwe2';
const acess_data = 
{
  "access_token": "t94a2403smdrdvttnyz5rqkfzfxrzm",
  "expires_in": 5491183,
  "token_type": "bearer"
}


export const GetGames = () => {
  const [gameLst, setGameLst] = useState([]);

  useEffect(()=>{fetchData();},[]);

  const fetchData = () =>{
          axios({
         url: "https://cors-anywhere.herokuapp.com/https://api.igdb.com/v4/games",
         method: 'POST',
         headers: {
             'Accept': 'application/json',
             'Client-ID': 'f9uj36yrvep8lp82jxb769mn581ao6',
             'Authorization': 'Bearer t94a2403smdrdvttnyz5rqkfzfxrzm'
         },
         data: "fields name,cover.url; where total_rating_count != null; sort total_rating_count desc; limit 12;"
       })
         .then(response => {
             setGameLst(response.data);
             console.log(response.data);
         })
         .catch(err => {
             console.error(err);
         });
        };
            
        
         let elements = [];
         let id = 0;
         for(let g of gameLst)
         {
           let url = g.cover.url.replace('t_thumb','t_cover_big');
           elements.push(
             <div key={id} className="card">
               <img src={url}></img>
               <div className="card-container">
                 <div className="name-price">
                   <h4>{g.name}</h4>
                   <h4>60$</h4>
                 </div>
                 <button>Buy</button>
               </div>
             </div>
           );
           id++;
         }

  return (

    <>
      {elements}
    </>
  )
}

