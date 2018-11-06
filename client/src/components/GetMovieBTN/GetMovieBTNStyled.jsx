import styled from 'styled-components';



 const GetMovieBTNStyled = styled.button`
    grid-column: span 11;
    grid-row: 8 / 12; 

    font-size: 21px;
    font-weight: bold;
    width: 178px;
    height: 55px;
    background-color: ${props=> props.primary ?  '#C64747' : 'rgb(255, 255, 255)'};
    color:${props=> props.primary ? 'white': 'black'};
    border: none;
    border-radius: 26px;
    margin-left: ${props => props.newMargin ? '30px' : '98px'};
    outline:none;
`;  

 /* C64747 rojo posible */
/* #00FCD3 verde theme */

export default GetMovieBTNStyled;