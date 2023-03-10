import styled from "styled-components";
import Colors from "../assets/Colors";

const ExtraItem2DotsEl = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 0.3rem;
  background-color: ${Colors.Gray1};
  cursor: pointer;
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
`;

const Dot = styled.span`
  width: 0.3rem;
  height: 0.3rem;
  background-color: black;
  border-radius: 50%;
`;

 const  ExtraItem2Dots =()=> {
  return (
    <ExtraItem2DotsEl>
      <Dot />
      <Dot />
    </ExtraItem2DotsEl>
  );
}
export default ExtraItem2Dots;