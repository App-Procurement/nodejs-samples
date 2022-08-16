import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import 'alertifyjs/build/css/alertify.css';
import Home from "./Home";
import ServiceDetalis from "./Service_Detalis/ServiceDetalis";
import AddServiceDetails from "./Services/AddServiceDetails.js";
import AddMultiJsonServiceDetails from "./Services/AddMultiJsonServiceDetails";
import UpdateServiceDetails from "./Services/UpdateServiceDetails";
import SearchServiceDetails from "./Services/SearchServiceDetails";
import AppendKeyServiceDetails from "./Services/AppendKeyServiceDetails";
import DeleteServiceDetails from "./Services/DeleteServiceDetails";
import CatalogueDetails from "./Catalogue_Details/CatalogueDetails";
import AddCatalogueDetails from "./Catalogue/AddCatalogueDetails";
import GetAllCatalogueDetails from "./Catalogue/GetAllCatalogueDetails";
import SearchCatalogueDetails from "./Catalogue/SearchCatalogueDetails";
import AppendKeyCatalogueDetails from "./Catalogue/AppendKeyCatalogueDetails";
import DeleteCatalogueDetails from "./Catalogue/DeleteCatalogueDetails";
function App() {
    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/ServiceDetalis" element={<ServiceDetalis />} />
                <Route path="/ServiceDetalis/AddServiceDetails" element={<AddServiceDetails />} />
                <Route path="/ServiceDetalis/UpdateServiceDetails" element={<UpdateServiceDetails />} />
                <Route path="/ServiceDetalis/AddMultiJsonServiceDetails" element={<AddMultiJsonServiceDetails />} />
                <Route path="/ServiceDetalis/SearchServiceDetails" element={<SearchServiceDetails />} />
                <Route path="/ServiceDetalis/AppendKeyServiceDetails" element={<AppendKeyServiceDetails />} />
                <Route path="/ServiceDetalis/DeleteServiceDetails" element={<DeleteServiceDetails />} />

                <Route path="/CatalogueDetails" element={<CatalogueDetails />} />
                <Route path="/CatalogueDetails/AddCatalogueDetails" element={<AddCatalogueDetails />} />
                <Route path="/CatalogueDetails/GetAllCatalogueDetails" element={<GetAllCatalogueDetails />} />
                <Route path="/CatalogueDetails/SearchCatalogueDetails" element={<SearchCatalogueDetails />} />
                <Route path="/CatalogueDetails/AppendKeyCatalogueDetails" element={<AppendKeyCatalogueDetails />} />
                <Route path="/CatalogueDetails/DeleteCatalogueDetails" element={<DeleteCatalogueDetails />} />
            </Routes>
        </Router>

    );
}

export default App;