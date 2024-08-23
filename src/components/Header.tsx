import { useState } from "react";
import { useNavigate } from "react-router-dom";
import planets from "../data.json";
import styled from "styled-components";

export default function Header() {
  const navigate = useNavigate();
  const [toggle, setToggle] = useState(false);
  return (
    <StyledHeader>
      <HeaderWrapper>
        <Heading>THE PLANETS</Heading>
        <BurgerIcon
          src="./assets/icon-hamburger.svg"
          onClick={() => setToggle(!toggle)}
          alt=""
        />
        <Burger $toggle={toggle}>
          {planets.map((planet) => {
            return (
              <MenuItem
                key={planet.name}
                onClick={() => {
                  setToggle(false);
                  navigate(`/${planet.name}`);
                }}
              >
                <MenuSpan $planetColor={planet.color}></MenuSpan>
                <PlanetName>{planet.name.toUpperCase()}</PlanetName>
                <ArrowImg src="./assets/icon-chevron.svg" alt="" />
              </MenuItem>
            );
          })}
        </Burger>
      </HeaderWrapper>
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  width: 100%;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
`;

const HeaderWrapper = styled.div`
  padding: 1.6rem 2.4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  @media only screen and (min-width: 768px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 4rem;
    padding: 3.2rem 0 2.7rem;
  }
  @media only screen and (min-width: 90rem) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 4rem;
    padding: 3.2rem 0 2.7rem;
    max-width: 137.7rem;
    margin: auto;
  }
`;

const Heading = styled.h1`
  color: #fff;
  font-size: 2.8rem;
  font-weight: 500;
  letter-spacing: -1.85px;
`;

const BurgerIcon = styled.img`
  display: block;

  @media only screen and (min-width: 768px) {
    display: none;
  }
`;

const Burger = styled.div<{ $toggle: boolean }>`
  height: 100vh;
  width: 100vw;
  padding: 2.4rem 2.4rem 7rem;
  position: absolute;
  bottom: -100vh;
  left: 0;
  z-index: 1000;
  background-color: #070724;
  display: ${(props) => ` ${props.$toggle ? "flex" : "none"} `};
  flex-direction: column;
  @media only screen and (min-width: 768px) {
    position: static;
    display: flex;
    flex-direction: row;
    height: fit-content;
    width: fit-content;

    gap: 3.3rem;

    padding: 0 0 0;
  }
  @media only screen and (min-width: 90rem) {
  }
`;

const MenuItem = styled.div`
  display: flex;
  align-items: center;
  gap: 2.5rem;
  padding: 2.2rem 0.8rem 2.2rem 0;
  /* border-bottom: 1px solid rgba(255, 255, 255, 0.1); */
  cursor: pointer;

  @media only screen and (min-width: 768px) {
    padding: 0;
  }
`;

const MenuSpan = styled.span<{ $planetColor: string }>`
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  background-color: ${(props) => props.$planetColor};

  @media only screen and (min-width: 768px) {
    display: none;
  }
`;

const PlanetName = styled.p`
  font-size: 1.5rem;
  font-weight: bold;
  line-height: 1.67;
  letter-spacing: 1.36px;
  color: #fff;

  @media only screen and (min-width: 768px) {
    font-size: 1.1rem;
    line-height: 2.27;
    letter-spacing: 1px;
    opacity: 0.75;
  }
`;

const ArrowImg = styled.img`
  margin-left: auto;

  @media only screen and (min-width: 768px) {
    display: none;
  }
`;
