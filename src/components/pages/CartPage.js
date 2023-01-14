import styled from "styled-components";
import Colors from "../../assets/Colors";
import { BiChevronLeft } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import Content from "../styled/Content";
import Icon from "../styled/Icon";
import OrderItem from "../styled/OrderItem";
import ETAClock from "../styled/ETACLock";
import CartTotal from "../CartTotal";
import { useContext } from "react";
import { CartContext } from "../../App";

const ContentEl = styled(Content)`
  flex: 1;
`;

const CartMenu = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  border-bottom: 1px solid ${Colors.Gray};
  height: min-content;
  padding: 1.5rem 0;
`;

const Title = styled.span`
  font-weight: 600;
  flex: 1;
  display: flex;
  padding-left: 10rem;
`;

const ScrollableList = styled.div`
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
  row-gap: 1rem;
  overflow-y: auto;
`;

const BackIcon = styled(Icon)`
  margin-left: 1rem;
`;

const  CartPage =()=> {
  const nav = useNavigate();
  const { Cart, SetCart } = useContext(CartContext);
  function ClearCart() {
    const f = { Total: 0, Items: [] };
    SetCart(f);
    localStorage.setItem("Cart", JSON.stringify(f));
  }
  return (
    <>
      <ContentEl>
        <CartMenu>
          <BackIcon
            onClick={() => {
              nav("/");
            }}
          >
            <BiChevronLeft />
          </BackIcon>
          <Title>My Order</Title>
        </CartMenu>
        <ScrollableList>
          {Cart.Items.map((item) => {
            return (
              <OrderItem
                image={item.image}
                title={item.title}
                qnty={item.qnty}
                price={item.price}
              />
            );
          })}
          {Cart.Items.length > 0 ? <ETAClock /> : ""}
        </ScrollableList>
      </ContentEl>
      <CartTotal total={Cart.Total} clear={ClearCart} />
    </>
  );
}

export default  CartPage;