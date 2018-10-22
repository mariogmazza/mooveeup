import styled from "styled-components";

const SelBTNstlye = styled.button`
  grid-column: span 12;
  grid-row: 10 /12;

  font-family: Segoe UI;
  font-size: 21px;
  font-weight: bold;
  width: 178px;
  height: 55px;
  background-color: ${props =>
    props.primary ? "#C64747" : "rgb(255, 255, 255)"};
  color: ${props => (props.primary ? "white" : "black")};
  border: none;
  border-radius: 26px;
  margin-left: 98px;
  outline: none;
  /* position: absolute; */
  /* margin-top: -47px; */
`;

// C64747 new rojo

export default SelBTNstlye;
