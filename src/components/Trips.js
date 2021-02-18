import React from 'react'
import styled from 'styled-components'
import {useStaticQuery, graphql} from 'gatsby'
import Img from "gatsby-image"
import { Button } from './Button'
import {ImLocation} from 'react-icons/im'

const Trips = ({heading}) => {
 
const data = useStaticQuery(graphql `
query TripsQuery {
    allTripsJson {
      edges {
        node {
          alt
          button
          name
          img {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
  `);

function getTrips(data){
    const tripsArray = [];
    data.allTripsJson.edges.forEach( (item, index)=> {
        tripsArray.push(
            <ProductCard key={index}>
                <ProductImg src={item.node.img.childImageSharp.fluid.src}
                alt={item.node.alt}
                fluid={item.node.img.childImageSharp.fluid} />
                <ProductInfo>
                    <ProductText>
                        <ImLocation />
                        <ProductTitle>{item.node.name}</ProductTitle>
                    </ProductText>
                    <Button primary="true" round="true" 
                    css={`
                    position: absolute;
                    top: 245px;
                    font-size: 14px;
                  
                    `}
                    to="/">{item.node.button}</Button>
                </ProductInfo>
            </ProductCard>
        )
    });

    return tripsArray;
}

    return (
        <ProductsContainer>
            <ProductsHeading >{heading}</ProductsHeading>
            <ProductsP>Year 2020 was difficult for everyone of us.
              However, memories from our trips will always stay with us.
              Meet the most popular and picturesque destinations
            </ProductsP>
            <ProductsWrapper>{getTrips(data)}</ProductsWrapper>
        </ProductsContainer>
    )
}

export default Trips



const ProductsContainer = styled.div`
min-height: 100vh;
padding: 5rem calc((100vw - 1300px) / 2);

`
const ProductsHeading = styled.div`
font-size: clamp(1.2rem, 5vw, 3rem);
text-align: center;
margin-bottom: 1rem;
color: #000;
font-family: "Roboto", sans-serif;
font-weight: 400;
letter-spacing: 2px;
`
const ProductsP = styled.div`
font-size: clamp(1rem, 1vw, 3rem);
text-align: center;
margin-bottom: 6rem;
color: #000;
font-family: "Roboto", sans-serif;
font-family: "Montserrat", sans-serif;
font-weight: 300;`


const ProductsWrapper = styled.div`
display: grid;
grid-template-columns: repeat(4, 1fr);
grid-gap: 10px;
justify-items: center;
padding: 0 2rem;

@media screen and (max-width: 1200px){
    grid-template-columns: 1fr 1fr;
}

@media screen and (max-width: 868px){
    grid-template-columns: 1fr;
}
`

const ProductCard = styled.div`
line-height: 2;
width: 100%;
height: 300px;
position: relative;
border-radius: 5px;
transition: 0.2s ease;
`
const ProductImg = styled(Img)`
height: 100%;
max-width: 100%;
position: relative;
border-radius: 5px;
filter: brightness(70%);
transition: 0.4s cubic-bezier(0.075, 0.82, 0.165, 1);

&:hover {
    filter: brightness(50%);
}
`

const ProductInfo = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 0 2rem;
color: #fff;

@media screen and (max-width: 280px){
    padding: 0 1rem;
}
`


const ProductText = styled.div`
display: flex;
align-items: center;
position: absolute;
top: 205px;
font-family: "Montserrat", sans-serif;
font-weight: bolder;
`


const ProductTitle = styled.div`
  text-shadow: 2px 2px rgba(0,0,0,0.3), -30px 14px 4px rgba(0, 0, 0, 0.25);
font-size: 1.2rem;
margin-left: 0.5rem; 
font-family: "Montserrat", sans-serif;
font-weight: bolder;
`


