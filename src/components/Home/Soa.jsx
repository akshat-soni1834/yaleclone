import React from 'react'
import { Link } from 'react-router-dom'
import SoaList from './SoaList'
import '../Styles.css'

function Soa() {
  return (
    // <div id='soa' style={{ backgroundImage: `url(${soa_bg})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', borderBottom: "1px solid black" }}>
      // <div id='soa' style={{ background: 'linear-gradient(to right, #5E844B, #ffffff)', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', borderBottom: "1px solid black" }}>
      <div id='soa' style={{ background: '#f5f5f5', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', borderBottom: "1px solid black" }}>
      <h1 className='p-4 text-center' style={{  color: "#751919" }}>Happening at SOA</h1>
      <div className='container d-flex flex-wrap flex-row align-items-center justify-content-center'>
        <div className="p-2 mb-3 rounded-3 flex-wrap shadow mx-2" style={{ backgroundColor: "#FFE680" }}>
          <div className="container-fluid py-3">
            <b className='text-danger'>LATEST</b>
            <p>Fall 2022 exhibitions are ongoing :</p>
            <Link to="/exhibition">Full info here</Link>          
          </div>
        </div>
      </div>
      <SoaList/>
    </div>
  )
}

export default Soa
