import styled, { keyframes } from 'styled-components';

const firstChoice = keyframes`
  from {
    background-color: rgb(255, 255, 255) ;
    margin-left: 98px;
  }
  to {
    background-color: rgb(255, 255, 255, 0) ;
    margin-left: 0px;
  }
`


const secondChoice = keyframes`
  from {
    background-color: rgb(255, 255, 255, 0) ;
    margin-left: 0px;
  }
  to {
    background-color: rgb(255, 255, 255) ;
    margin-left: 98px;
  }
`

export const GenBtn1 = styled.button`
    font-family: Segoe UI;
    font-size: 21px;
    font-weight: bold;
    width: 178px;
    height: 55px;
    background-color: rgb(255, 255, 255) ;
    border: none;
    border-radius: 26px;
    margin-left: 98px;
    margin-top: 38px;
    outline:none;  
    animation-name: ${secondChoice};
    animation-duration: 2s;
  
`

export const GenBtn2 = styled.button`
    font-family: Segoe UI;
    font-size: 21px;
    font-weight: bold;
    width: 178px;
    height: 55px;
    background-color: rgb(255, 255, 255, 0) ;
    border: none;
    border-radius: 26px;
    margin-top: 38px;
    outline:none;  
    animation-name: ${firstChoice};
    animation-duration: 2s;
`
 
