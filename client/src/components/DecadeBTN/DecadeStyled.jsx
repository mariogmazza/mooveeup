import styled, { keyframes } from 'styled-components';


const firstChoice = keyframes`
  from {
    background-color: rgb(255, 255, 255) ;
    margin-left: 98px;
    background-color: #C64747;

  }
  to {
    background-color: rgb(255, 255, 255, 0) ;
    margin-left: 0px;

  }
`;


const secondChoice = keyframes`
  from {
    background-color: rgb(255, 255, 255, 0) ;
    margin-left: 0px;
    background-color: #C64747;

  }
  to {
    background-color: rgb(255, 255, 255) ;
    margin-left: 98px;
    background-color: #C64747;

  }
`;

// export const GenBtn1 = styled.button`
//     font-family: Segoe UI;
//     font-size: 21px;
//     font-weight: bold;
//     width: 178px;
//     height: 55px;
//     /* background-color: rgb(255, 255, 255) ; */
//     background-color:#C64747;
//     color: white;

//     border: none;
//     border-radius: 26px;
//     margin-left: 98px;
//     margin-top: 38px;
//     outline:none;  
//     animation-name: ${secondChoice};
//     animation-duration: 2s;
  
// `


export const GenBtn1 = styled.button`
    grid-column: span 12;

    font-size: 21px;
    font-weight: bold;
    width: 178px;
    height: 55px;
    background-color: #C64747;
    color: white;

    border: none;
    border-radius: 26px;
    margin-left: 98px;
    outline:none;  
    animation-name: ${secondChoice};
    animation-duration: 2s; 
`;



export const GenBtn2 = styled.button`
    grid-column: span 12;

    font-family: Segoe UI;
    font-size: 21px;
    font-weight: bold;
    width: 178px;
    height: 55px;

    background-color: rgb(255, 255, 255, 0);
    color:white;

    border: none;
    border-radius: 26px;
    outline:none;  
    animation-name: ${firstChoice};
    animation-duration: 2s;
`;


// export const GenBtn2 = styled.button`
//     font-family: Segoe UI;
//     font-size: 21px;
//     font-weight: bold;
//     width: 178px;
//     height: 55px;

//     background-color: rgb(255, 255, 255, 0) ;
//     color:white;

//     border: none;
//     border-radius: 26px;
//     margin-top: 38px;
//     outline:none;  
//     animation-name: ${firstChoice};
//     animation-duration: 2s;
// `
 














// import styled, { keyframes } from 'styled-components';


// export const GenBtn1 = styled.button`
//     /* grid-area:g; */

//     grid-column: span 12;

//     font-family: Segoe UI;
//     font-size: 21px;
//     font-weight: bold;
//     width: 178px;
//     height: 55px;
//     /* background-color: rgb(255, 255, 255) ; */
//     background-color: #C64747;
//     color: white;

//     border: none;
//     border-radius: 26px;
//     margin-left: 98px;
//     /* margin-top: 38px; */
//     outline:none;  
//     animation-name: ${secondChoice};
//     animation-duration: 2s; 
// `;

// export const GenBtn2 = styled.button`
//     /* grid-area: g; */

//     grid-column: span 12;

//     font-family: Segoe UI;
//     font-size: 21px;
//     font-weight: bold;
//     width: 178px;
//     height: 55px;

//     background-color: rgb(255, 255, 255, 0) ;
//     color:white;

//     border: none;
//     border-radius: 26px;
//     /* margin-top: 38px; */
//     outline:none;  
//     animation-name: ${firstChoice};
//     animation-duration: 2s;
// `;
 
