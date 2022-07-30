import React from "react"

import Home from "./Home"
import Signup from "./Signup"
import Details from "./Details"
import {Routes, Route} from "react-router-dom"

export default (
  <Routes>
    <Route exact path="/" element={<Home />}/>
    <Route path="/signup" element={<Signup />}/>
    <Route path="/details" element={<Details />}/>
  </Routes>
);
