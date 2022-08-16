import React from 'react'
import '../css/ServiceDetalis.css';
import { Link } from "react-router-dom";
const CatalogueDetails = () => {
    return (
        <div className='bodyServiceDetalis'>
            <center>
                <hr size="3" noshade />
                <h2>
                Catalogue_Details
                </h2>
                <hr size="3" noshade />
            </center>
            <article class="leaderboard" />
            <main class="leaderboard__profiles">
                <article class="leaderboard__profile">
                   <Link  to="AddCatalogueDetails" class="leaderboard__name">Add Catalogue_Details</Link> 
                </article>
                <article class="leaderboard__profile">
                    <Link to="GetAllCatalogueDetails" class="leaderboard__name">Get All Catalogue_Details</Link>
                </article>
                <article class="leaderboard__profile">
                    <Link to="SearchCatalogueDetails" class="leaderboard__name">Search Catalogue_Details</Link>
                </article>
                <article class="leaderboard__profile">
                    <Link to="AppendKeyCatalogueDetails" class="leaderboard__name">Append Key Catalogue_Details</Link>
                </article>
                <article class="leaderboard__profile">
                    <Link to="DeleteCatalogueDetails" class="leaderboard__name">Delete Catalogue_Details</Link>
                </article>
            </main>
        </div>


    )
}

export default CatalogueDetails;