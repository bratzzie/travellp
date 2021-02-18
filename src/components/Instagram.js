import React from 'react'
import styled from 'styled-components'
import { Button } from './Button'
import ImgOne from '../assets/images/Inst/inst-1.jpg'
import ImgTwo from '../assets/images/Inst/inst-2.jpg'
import ImgThree from '../assets/images/Inst/inst-3.jpg'
import ImgFour from '../assets/images/Inst/inst-4.jpg'
import ImgFive from '../assets/images/Inst/inst-5.jpg'

const Instagram = () => {
    return (
        <Wrapper>
<WrapperHome>
  <CardOne>
    </CardOne>
  <CardTwo>
  </CardTwo>
  <CardThree>
  </CardThree>
  <CardFour>
  </CardFour>
  <CardFive></CardFive>
  <CardSix><p>Do not hezitate to share with us your emotions!</p>
    <Button  big="true"  to="/">@Tag Us!</Button></CardSix>
  
 

</WrapperHome>
</Wrapper>
    )
}

export default Instagram

const Wrapper = styled.div`
 width: 90%;
  max-width: 940px;
  margin: 20px auto;
  background-color: #00414D;
`
const WrapperHome = styled.div`
display: grid;
  grid-gap: 1px;
  grid-auto-rows: minmax(150px, auto);

  *{
    padding: 10px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-color: #00414D;
  color: #fff;
  
   
  }

   

  
@media (min-width: 500px) {
  
    grid-template-columns: 1fr 1fr;
}

@media (min-width: 800px) {
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: minmax(150px, auto) minmax(150px, auto);
    grid-auto-rows: minmax(100px, auto);
}
`
const CardOne = styled.div`
 background-image: url(${ImgOne});
  background-position: bottom left;
  color: #fff; 
  
 
  @media (min-width: 500px) {grid-column: 1 / 3;
    grid-row: 1 / 3;
  }

  @media (min-width: 800px) {
    grid-column: 1 ;
    grid-row: 1 / 6;
  }
`
const CardTwo = styled.div`
 background-image: linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.2)), url(${ImgTwo}); 
  color: #fff;
  display: flex;
  flex-direction: column;

  h3{
    margin-top: auto;
  }
  @media (min-width: 500px) {
  grid-column: 1;
    grid-row: 3 / 6;
  }

  @media (min-width: 800px) {
    grid-column: 2;
    grid-row: 1 / 4;
  }
`
const CardThree = styled.div`
 background-image: linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.2)),url(${ImgThree});
 color: #fff;
  display: flex;
  flex-direction: column;
 h3{
     margin-top: auto;
 }
 @media (min-width: 500px) {
    grid-column: 1;
    grid-row: 6;}


    @media (min-width: 800px) {
        grid-column: 2;
    grid-row: 4 / 6;
    }
`
const CardFour = styled.div`
 background-image: url(${ImgFour});
 color: #fff;

`
const CardFive = styled.div`
 background-image: url(${ImgFive});
color: #fff;

`
const CardSix = styled.div`
  color: #fff;
  p{
      font-family: "Montserrat", sans-serif;}
  @media (min-width: 500px) { grid-column: 2;
    grid-row: 5 / 7;}

  @media (min-width: 800px) {
      grid-column: 3;
    grid-row: 3 / 6;
  }
`