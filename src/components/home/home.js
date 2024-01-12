import React from 'react'
import "./home.css"

const Home = () => {
  return (
    <div className="container">
    
    <h1>Items we like to sell</h1>
    <ol>
        <li>Carrots</li>
        <li>beatroots</li>
        <li>brinjal</li>
    </ol>
    <ul>
        <li>onions</li>
        <li>tomatos</li>
        <li>beans</li>
    </ul>
    <dl>
        <dt>Fresh arrival</dt>
        <dd>all veggis we sell are fresh and healthy</dd>
    </dl>
    </div>
  )
}

export default Home