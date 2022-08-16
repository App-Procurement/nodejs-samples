import React from 'react'
import '../css/ServiceDetalis.css';
import { Link } from "react-router-dom";
const ServiceDetalis = () => {
    return (
        <div className='bodyServiceDetalis'>
            <center>
                <hr size="3" noshade />
                <h2>
                    Service-Details
                </h2>
                <hr size="3" noshade />
            </center>
            <article class="leaderboard" />
            <main class="leaderboard__profiles">
                <article class="leaderboard__profile">
                   <Link  to="AddServiceDetails" class="leaderboard__name">Add Service_Details</Link> 
                </article>
                <article class="leaderboard__profile">
                    <Link to="AddMultiJsonServiceDetails" class="leaderboard__name">Add Multi Json Input</Link>
                </article>
                <article class="leaderboard__profile">
                    <Link to="UpdateServiceDetails" class="leaderboard__name">Update Service_Details</Link>
                </article>
                <article class="leaderboard__profile">
                    <Link to="SearchServiceDetails" class="leaderboard__name">Search Service_Details</Link>
                </article>
                <article class="leaderboard__profile">
                    <Link to="AppendKeyServiceDetails" class="leaderboard__name">Append Data</Link>
                </article>
                <article class="leaderboard__profile">
                    <Link to="DeleteServiceDetails" class="leaderboard__name">Delete Service Detalis</Link>
                </article>
            </main>
        </div>


    )
}

export default ServiceDetalis