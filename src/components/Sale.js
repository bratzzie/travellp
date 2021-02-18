import React from 'react'
import styled from "styled-components"
import SaleImg from '../assets/images/email-4.jpg'
import { Button } from './Button'

const Sale = () => {
    return (
        <SaleContainer>
            <SaleContent>
                <h1>Get <b>your</b> personal <b>50%</b> off</h1>
                <p>For every new user, who books during the pandemic</p>
              
                    <SaleWrap>
                        <Button as="button" type="submit"
                        primary="true"
                        round="true"
                        css={`height: 48px;
                        
                        @media screen and (max-width: 768px){
                            width: 100%;
                            min-width: 350px;
                        }
                        
                        @media screen and (max-width: 400px){
                            width: 100%;
                            min-width:250px;
                        }
                        `}>Book Now!</Button>
                    </SaleWrap>
               
            </SaleContent>
        </SaleContainer>
    )
}

export default Sale

const SaleContainer = styled.div`
background:linear-gradient(180deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.6) 35%,
rgba(0,0,0,0.1) 100%), url(${SaleImg}) no-repeat center;
height: 450px;
width: 100%;
padding: 5rem calc((100vw - 1300px)/2);
color: #fff;
display: flex;
justify-content: center;
align-items: center;`

const SaleContent = styled.div`
display: flex;
flex-direction: column;
align-items: center;

h1{
    text-align: center;
    margin-bottom: 1rem;
    font-size: clamp(1rem, 5vw, 3rem);
    padding: 0 1rem;
    font-family: "Roboto", sans-serif;
    letter-spacing: 3px;
    font-weight: 400;
}

p{
    text-align: center;
    font-size: clamp(1rem, 2.5vw, 1.5rem);
    padding: 0 1rem;
    margin-bottom: 2rem;
    font-family: "Montserrat", sans-serif;
}
`

const SaleWrap = styled.div`


@media screen and (max-width: 768px){
    display: flex;
    flex-direction: column;
    padding: 0 1rem;

}
`

