import styled from 'styled-components';



 const GetMovieBTNStyled = styled.button`
    font-family: Segoe UI;
    font-size: 21px;
    font-weight: bold;
    width: 178px;
    height: 55px;
    background-color: ${props=> props.primary ?  '#C64747' : 'rgb(255, 255, 255)'} ;
    color:${props=> props.primary ? 'white': 'black'};
    border: none;
    border-radius: 26px;
    margin-left: 98px;
    outline:none;
    position: fixed;
    bottom: 34px
`;

 /* C64747 rojo posible */
/* #00FCD3 verde theme */

export default GetMovieBTNStyled;