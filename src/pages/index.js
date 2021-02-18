import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Hero from "../components/Hero"
import Trips from "../components/Trips"
import Stats from "../components/Stats"
import Email from "../components/Email"
import Sale from "../components/Sale"
import FutureTrips from "../components/FutureTrips";
import Instagram from "../components/Instagram"


const IndexPage = () => (
  <Layout>
    
    <SEO title="TravelWUs" />
   <Hero/>
  
    <Trips heading="POPULAR DESTINATIONS"/>
    <Sale/>
    <FutureTrips heading="EXPLORE EUROPE"/>
    <Stats/>
    <Instagram/>
    <Email/>
  </Layout>
)

export default IndexPage
