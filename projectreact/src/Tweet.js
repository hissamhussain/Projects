import React from 'react';
import './App.css';
//import hissam from './images/Hissam.jpeg'

function Tweet(prop)
{

    return(
        <div className='tweet' >

            
            <img src={require(''+prop.image)} alt="a" width="200px" height="200px" className='b'/>
            <h1>{prop.name}</h1>
            
        </div>

    );


}

export default Tweet;