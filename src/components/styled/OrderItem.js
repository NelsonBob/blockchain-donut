import styled from "styled-components";
import Colors from "../../assets/Colors";
import Img from "../../components/styled/Img";
import PriceInd from "../../components/styled/PriceInd";

const OrderItemEl = styled.span`
  display: flex;
  align-items: center;
  min-height: min-content;
  max-height: max-content;
  padding: 0.5rem 2rem;
  column-gap: 1rem;
`;

const DetailContainer = styled.span`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 1;
`;

const ImageContainer = styled.span`
  background-color: ${Colors.Gray1};
  min-width: 80px;
  min-height: 80px;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  > img {
    position: relative;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
`;

const Title = styled.span`
  font-size: 1.1rem;
  font-weight: 500;
`;

const Quantity = styled.span`
  color: ${Colors.Gray3};
  font-weight: 500;
`;

const Price = styled.span`
  color: ${Colors.Primary};
  font-size: 1.1rem;
  font-weight: 500;
`;

const OrderItem=({ image, title, qnty, price })=> {
  return (
    <OrderItemEl>
      <ImageContainer>
        <Img src={image} width="40px" />
      </ImageContainer>
      <DetailContainer>
        <Title>{title}</Title>
        <Quantity>{qnty}x</Quantity>
      </DetailContainer>
      <Price>
        <PriceInd />
        {price}
      </Price>
    </OrderItemEl>
  );
}

export default OrderItem;