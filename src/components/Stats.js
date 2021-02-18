import React from 'react'
import styled from 'styled-components'
import { StatsData } from "../data/StatsData";



const Stats = () => {
    return (
        <StatsContainer>
           <Heading>Solutions for travelers during the COVID-19 pandemic</Heading> 
           <Wrapper>
               {StatsData.map((item, index) => {
                   return(
                       <StatsBox key={index}>
                           <Icon>{item.icon}</Icon>
                           <Title>{item.title}</Title>
                           <Description>{item.desc}</Description>
                       </StatsBox>
                   )
               })}
           </Wrapper>
        </StatsContainer>
    )
}

export default Stats

const StatsContainer = styled.div`
width: 100%;
background: #fff;
color: #000;
display: flex;
flex-direction: column;
justify-content: center;
padding: 4rem calc((100vh - 1300px) / 2);`

const Heading = styled.h1`
text-align: center;
font-size: clamp(1.2rem, 5vw, 2.6rem);
margin-bottom: 3rem;
padding: 0 2rem;
font-family: "Roboto", sans-serif;
font-weight: 400;
text-shadow: 1px 1px rgba(0,0,0,0.3);
text-transform: uppercase;`

const Wrapper = styled.div`
display: grid;
grid-template-columns: repeat(4, 1fr);
grid-gap: 10px;

@media screen and (max-width: 768px){
    grid-template-columns: 1fr;
}

@media screen and (max-width: 500px){
    grid-template-columns: 1fr;
}`

const StatsBox = styled.div`
height: 100%;
width: 100%;
padding: 2rem;
transition: 0.3s !important;
&:hover {
    
    transform: translateY(-2px);
 
}`

const Icon = styled.div`
font-size: 3rem;
margin-bottom: 1rem;`

const Title = styled.h1`
font-size: clamp(1rem, 2.5vw, 1.5rem);
margin-bottom: 0.5rem;
font-family: "Roboto", sans-serif;
font-weight: 400;`

const Description = styled.p`
font-family: "Montserrat", sans-serif;`