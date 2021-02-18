import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from 'styled-components'
const NotFoundPage = () => (
  <FalsePage >
  <Layout>
    <SEO title="404: Not found" />
    <FalseContent>
       <FalseH1>404</FalseH1>
    <FalseH1>Ooops!</FalseH1>
    <FalseP >It seems that this is an example site...how sad</FalseP>
    
 
    </FalseContent>
   


   
  </Layout>
  </FalsePage>
)

export default NotFoundPage

const FalsePage = styled.div`
background-color: black;


position: relative;
`
const FalseH1 = styled.h1`
color: white;
font-size: clamp(1.5rem, 6vw, 6rem);
font-size: clamp(1.5rem, 6vw, 6rem);
margin-bottom: 1.5rem;
padding: 0 1rem;
letter-spacing: 4px;
text-align: center;
font-family: "Roboto", sans-serif;
font-weight: 400;
text-shadow: 2px 2px rgba(0,0,0,0.3);

`

const FalseP = styled.p`
  font-size: clamp(1rem, 3vw, 3rem);
  margin-bottom: 2rem;
font-weight:200;
font-family: "Montserrat", sans-serif;
text-align: center;
color: #fff;

`
const FalseContent = styled.div`
padding-top: 3rem;
z-index: 3;
height: calc(100vh - 80px);
max-height: 100%;
padding: 0rem calc((100vw - 1300px) / 2); margin-top: 80px;
`