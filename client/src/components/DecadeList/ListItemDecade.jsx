import styled, { keyframes } from "styled-components";

const showMenu = keyframes`
  from {
    height:0px
  }
  to {
    height:240px
  }
`;
const hideMenu = keyframes`
  from {
    height:240px
  }
  to {
    height:0px
  }
`;

const showList = keyframes`
from {
  height: 20%;
}
to {
  height: 100%;
}
`;

export const Container1Closed = styled.div`
  grid-column: span 12;
  margin-left: 84px;

  text-align: center;
  height: 0px;
  width: 100%;
  overflow: hidden;
  animation-name: ${hideMenu};
  animation-duration: 1s;
`;

export const Container1 = styled.div`
  grid-column: span 12;
  margin-left: 84px;

  text-align: center;
  height: 240px;
  width: 100%;
  overflow: hidden;
  animation-name: ${showMenu};
  animation-duration: 1s;
`;

export const Container2 = styled.div`
  width: 100%;
  height: 100%;
  overflow: auto;
  padding-right: 0px;
  line-height: 2;

  animation-name: ${showList};
  animation-duration: 1s;
`;

export const DecadeStyle = styled.div`
  font-size: 1.2em;
  color: #b2b2b2;
  &:hover {
    font-size: 1.4em;
    color: white;
    background: ${props => (props.primary ? "#C64747" : "#C64747")};
  }
`;
