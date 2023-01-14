import styled from "styled-components";
import { BiMenuAltLeft } from "react-icons/bi";
import { FiShoppingCart } from "react-icons/fi";
import Colors from "../assets/Colors";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../App";

const TopMenuEl = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  border-bottom: 1px solid ${Colors.Gray1};
  height: min-content;
  padding: 1.5rem 0;
`;

const Title = styled.span`
  font-weight: 400;
`;

const Icons = styled.span`
  border: 1px solid ${Colors.Gray1};
  border-radius: 50%;
  width: 3rem;
  height: 3rem;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.3rem;
`;

const CartIcon = styled(Icons)`
  position: relative;
  ::before {
    content: ${(p) => (p.count ? `'${p.count}'` : "")};
    position: absolute;
    left: 0;
    top: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.2rem;
    font-size: 0.8rem;
    border-radius: 50%;
    min-width: 1.3rem;
    min-height: 1.3rem;
    background-color: ${Colors.Primary};
    color: ${Colors.Background};
    transform: translate(-35%, -35%);
  }
`;

const TopMenu = () => {
  const nav = useNavigate();
  const { Cart } = useContext(CartContext);

  function CountCartItems() {
    let c = 0;
    for (const item of Cart.Items) {
      c += item.qnty;
    }
    return c;
  }
    return (
        <TopMenuEl>
            <Icons>
                <BiMenuAltLeft/>
            </Icons>
            <Title>Hello,Nelson</Title>
            <CartIcon
        onClick={() => {
          nav("/cart");
        }}
        count={CountCartItems()}
      >
            <FiShoppingCart />
            </CartIcon>
        </TopMenuEl>
    );

}

export default TopMenu;