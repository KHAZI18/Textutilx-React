import React from 'react'
import downloadImage from './download.png';

export default function Developer(props) {
  return (
    <div className='container my-3'>
        <center><div className="card " style={{width: '18rem' , backgroundColor: '#818FB4', borderColor: '#818FB4', color: 'white'}}>
            <img src={downloadImage} className="card-img-top" alt="imggg"/>

            <div className="card-body">
                <h5 className="card-title">FAIZAN KHAZI</h5>
                <p className="card-text">Passionate web developer based in Bengaluru, specializing in React.js. Dedicated to crafting elegant, user-centric websites that make an impact.</p>
                <a href="https://github.com/KHAZI18" className="btn " style={{ backgroundColor: '#4477CE', borderColor: '#4477CE', color: 'white' }}>GitHub</a>
            </div>
      </div>
      </center>
    </div>
  )
}

// 818FB4