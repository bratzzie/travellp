import React from 'react'
import styled from 'styled-components'
import { Button } from './Button'

const Form = () => {
    return (
        <FormSection>
                <form action="#">
              <Left>
                     <label className="form-label" htmlFor="flyingFrom">From</label><br />
                            <input className="form-control" id="flyingFrom" type="text" placeholder="City or airport"/>
                    </Left>
<Left>
                            <label className="form-label" htmlFor="flyingTo">To</label><br />
                            <input className="form-control" id="flyingTo" type="text" placeholder="City or airport"/>
           </Left>          
                 <Left>       
                            <label className="form-label" htmlFor="departing">Departure</label><br />
                            <input className="form-control" id="departing" type="date" required/>
                     </Left> 

                    <Left>  
                            <label className="form-label" htmlFor="returning">Return</label><br />
                            <input className="form-control" id="returning" type="date" required/>
                        
                </Left>
               
                    
             
						<Button big="true"  to="/">Show flights</Button>
              
               
                </form>
            </FormSection>
    )
}

export default Form


const FormSection = styled.article`
background: transparent;

	border-radius: 6px;
    box-shadow: 0px 0px 10px -5px rgba(0, 0, 0, 0.4);
align-items: center;
display: flex;
justify-content: center;

padding: 0 1rem;
position: relative;
position: absolute;
bottom: 0;
z-index: -4;
    form{
         display: flex;
  flex-flow: row wrap;
  align-items:center;
    }

  

    @media (max-width: 768px) {

  form {
    flex-direction: column;
    
  }
}
   `
const Left = styled.div`
float: right;

label{
    margin: 5px 10px 5px 0;
    
}

input{
    vertical-align: middle;
  margin: 5px 10px 5px 0;
  padding: 10px;
  background-color: #fff;
 border: none;
}


@media (max-width: 768px) {
  input {
    margin: 10px 0;
    align-self:stretch;
  }
 float:none;

}`