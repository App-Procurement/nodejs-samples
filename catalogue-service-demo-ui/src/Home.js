import React from 'react'
import "./css/Home.css";
import { Link } from "react-router-dom";
// import ServiceDetalis from "./Service_Detalis/ServiceDetalis"
const Home = () => {
  return (
    <>
      <div className='mybox tagRow'>
        <Link to="ServiceDetalis" className="tag">
          Service Details
        </Link>
        <Link to="CatalogueDetails" className="tag">
          Catalogue Details
        </Link>
      </div>
    </>
  )
}

export default Home