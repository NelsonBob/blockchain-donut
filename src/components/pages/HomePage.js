import React from "react";
import {GiCookie,GiDonut, GiIcePop} from "react-icons/gi";
import {BiCoffeeTogo} from "react-icons/bi";
import styled from "styled-components"
import ExtraItem2Dots from "../ExtraItem2Dots";
import AnimatedPill from "../styled/AnimatedPill.styled";
import Slider from "../styled/Slider.styled";
import TopMenu from "../TopMenu";
import ExtraItmViewAll from "../ExtraItmViewAll";
import MostSaleItem from "../styled/MostSaleItem";
import donutImage from "../../assets/images/donut.png"


const Items = [
    {
      id: 1,
      content: (
        <AnimatedPill key={1} icon={<GiCookie />} title="Cookie" subTitle="+20" />
      ),
    },
  
    {
      id: 2,
      content: (
        <AnimatedPill key={2} icon={<GiDonut />} title="Donut" subTitle="+20" />
      ),
    },
    {
      id: 3,
      content: (
        <AnimatedPill
          key={3}
          icon={<BiCoffeeTogo />}
          title="Coffe"
          subTitle="+20"
        />
      ),
    },
    {
      id: 4,
      content: (
        <AnimatedPill key={4} icon={<GiIcePop />} title="IcePop" subTitle="+20" />
      ),
    },
  ];

const donuts = [
    {
      id: 1,
      content: (
        <MostSaleItem
          id={1}
          key={4}
          image={donutImage}
          title="Oneil Donut"
          price={5.59}
        />
      ),
    },
    {
      id: 2,
      content: (
        <MostSaleItem
          id={2}
          key={5}
          image={donutImage}
          title="Candy Donut"
          price={9.99}
        />
      ),
    },
    {
      id: 3,
      content: (
        <MostSaleItem
          id={3}
          key={6}
          image={donutImage}
          title="Oneil Donut"
          price={6.99}
        />
      ),
    },
  ];

const ContentEl = styled.section`
height: 100vh;
width: 100vw;
overflow: auto;
`;
const HomePage = () => {
    return (
        
        <ContentEl >
            <TopMenu/>
            <Slider 
                items ={Items} 
                title = "categories" 
                extraItem={<ExtraItem2Dots/>}
                />
            <Slider 
                items ={donuts} 
                title = "Most Sales" 
 
                extraItem={<ExtraItmViewAll> View all</ExtraItmViewAll>}
                />
           
        </ContentEl >
        
    );

}

export default HomePage;