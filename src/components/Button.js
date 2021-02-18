import  styled  from "styled-components";
import { Link } from "gatsby";

export const Button = styled(Link)`
background: ${({primary}) => (primary ? "#FB9038" : "#458494")};
white-space: nowrap;
padding: ${({big}) => (big ? "16px 40px" : "10px 32px")};
color: #fff;
font-size:  ${({big}) => (big ? "20px" : "16px")};
outline: none;
border: none;
min-width: 100px;
cursor: pointer;
text-decoration: none;
transition: 0.3s !important;
border-radius:  ${({round}) => (round ? "50px" : "none")};
font-family: "Roboto", sans-serif;
font-weight: 500;
letter-spacing: 2px;
&:hover {
    background: ${({primary}) => (primary ? "#458494" : "#FB9038")};
    transform: translateY(-2px);
   text-decoration: none;
}
`