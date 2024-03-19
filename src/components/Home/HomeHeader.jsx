import React from 'react'
import '../Styles.css'

function HomeHeader() {
    return (
        <div style={{backgroundColor: "#ffe680"}}>
            <div className="container" >
                <header className="d-flex justify-content-center py-2" >
                    <ul className="nav nav-pills d-flex justify-content-evenly" style={{fontWeight: "bold"}}>
                        <li className="nav-item"><a href="#soa" className="nav-link">Happening at SOA</a></li>
                        <li className="nav-item"><a href="#community" className="nav-link">Community Bulletin Board</a></li>
                        <li className="nav-item"><a href="#calenderNews" className="nav-link">Calendars & Newsletter</a></li>
                    </ul>
                </header>
            </div>
        </div>
    )
}

export default HomeHeader
