import styled from "styled-components";
import Colors from "../../assets/Colors";
const PriceIndEl = styled.span`
  display: inline-block;
  color: ${Colors.Primary};
  font-size: ${(p) => (p.fontSize ? p.fontSize : ".9rem")};
  margin-right: 1rem;
`;

const PriceInd=({ ind, fontSize }) =>{
  return <PriceIndEl fontSize={fontSize}>{ind || "ETH"}</PriceIndEl>;
}
export default PriceInd;