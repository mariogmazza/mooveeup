import styled from 'styled-components';


 const SelBTNstlye = styled.button`
    font-family: Segoe UI;
    font-size: 21px;
    font-weight: bold;
    width: 178px;
    height: 55px;
    background-color: ${props=> props.primary ?  '#00FCD3' : 'rgb(255, 255, 255)'} ;
    border: none;
    border-radius: 26px;
    margin-left: 98px;
    outline:none;
    position: fixed;
    bottom: 70px;
`

export default SelBTNstlye;