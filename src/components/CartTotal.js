import Colors from "../assets/Colors";
import styled from "styled-components";
import Row from "../components/styled/Row";
import { FiTrash } from "react-icons/fi";
import PriceInd from "../components/styled/PriceInd";

const CartTotalEl = styled.div`
  min-height: 10vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
 
  border: 1px solid ${Colors.Gray};
`;
const TotalText = styled.span`
  font-size: 1.3rem;
  font-weight: 500;
  color: ${Colors.Gray3};
`;

const Total = styled.span`
  font-size: 1.5rem;
  font-weight: 600;
  color: ${Colors.Primary};
`;

const ClearCart = styled.span`
  min-width: 3.5rem;
  min-height: 3.5rem;
  cursor: pointer;
  color: ${Colors.Gray3};
  font-size: 1.35rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${Colors.Secondary};
  border-radius: 50%;
`;

const Button = styled.button`
display: block;
  cursor: pointer;
  color: ${Colors.Background};
  background-color: ${Colors.Primary};
  border: none;
  margin: 1em;
  padding: 0.25em 1em;
  font-size: 1.2rem;
  font-weight: 200;
  border-radius: 50px;
`;

const CRow = styled(Row)`
  column-gap: 1rem;
  justify-content: space-between;
  padding: 0.5rem 1.5rem;
`;

export default function CartTotal({ total, clear }) {
  return (
    <CartTotalEl>
      <CRow>
        <TotalText>Total:</TotalText>
        <Total>
          <PriceInd fontSize="1.2rem" />
         <span style={{marginRight:"1rem"}}> {Math.round((total + Number.EPSILON) * 100) / 100}</span>
        </Total>
      </CRow>
      <CRow style={{ padding: "0.5rem 2rem" }}>
        <ClearCart
          onClick={() => {
            clear();
          }}
        >
          <FiTrash />
        </ClearCart>
        <Button >Checkout</Button>
      </CRow>
    </CartTotalEl>
  );
}