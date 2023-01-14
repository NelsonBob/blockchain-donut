import styled from "styled-components";
import Colors from "../../assets/Colors";

const SliderEl = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

const TitleContainer = styled.span`
  display: flex;
  justify-content: space-between;
  padding: 1rem 2rem;
`;

const Title = styled.span`
  color: ${Colors.Gray3};
  font-weight: 600;
  font-size: 1.2rem;
`;

const List = styled.span`
  display: flex;
  position: relative;
  padding: 0 2rem 1rem 2rem;
  width: 100%;
  overflow-x: auto;
  overflow-y: auto;
  column-gap: 2rem;
`;

const Slider =( {title,extraItem, items, height })=> {
  return (
    <SliderEl height={height}>
    <TitleContainer>
      <Title>{title}</Title>
      {extraItem}
    </TitleContainer>
    <List>
      {items.map((item) => {
        return item.content;
      })}
    </List>
  </SliderEl>
  );
}

export default Slider ;