import React from 'react'
import Footer from '../Footer'
import Navbar from '../Navbar'
import NewsList from './NewsList'

function MainNews() {
  return (
    <div style={{ backgroundColor: `#f5f5f5`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', opacity: "0.9", marginBottom: '50px' }}>
            
            <Navbar />
            
            <div className='container d-flex flex-column align-items-center justify-content-center' >
            <h1 className='p-2 m-4 rounded-3' style={{ fontStyle: "oblique", color: "#660000" }}>NEWS FROM YALE SCHOOL OF ART</h1>
                <NewsList/>
            </div>
            
            <Footer/>
        
        </div>
  )
}

export default MainNews
