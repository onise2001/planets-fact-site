import { useParams } from "react-router-dom";
import planets from "../data.json";
import styled from "styled-components";
import PlanetDetails from "../Types";
import { useState } from "react";

export default function Planet() {
  const planetName = useParams();
  const planet: PlanetDetails | undefined = planets.find(
    (item) => item.name === planetName.planet
  );
  const [info, setInfo] = useState<"overview" | "structure" | "geology">(
    "overview"
  );

  return (
    <Main>
      <MainStarter>
        <StarterList>
          <StarterListItem
            $active={info === "overview"}
            $color={planet?.color}
            onClick={() => {
              setInfo("overview");
            }}
          >
            OVERVIEW
          </StarterListItem>
          <StarterListItem
            $active={info === "structure"}
            $color={planet?.color}
            onClick={() => {
              setInfo("structure");
            }}
          >
            STRUCTURE
          </StarterListItem>
          <StarterListItem
            $active={info === "geology"}
            $color={planet?.color}
            onClick={() => {
              setInfo("geology");
            }}
          >
            SURFACE
          </StarterListItem>
        </StarterList>
      </MainStarter>
      <PlanetInfo>
        <PlanetImageContainer>
          <PlanetImg
            src={
              info === "overview" || info === "geology"
                ? planet?.images.planet
                : info === "structure"
                ? planet?.images.internal
                : undefined
            }
            $width={{
              mobileWidth: planet?.images.sizes.mobileWidth,
              tabletWidth: planet?.images.sizes.tabletWidth,
              desktopWidth: planet?.images.sizes.desktopWidth,
            }}
            $height={{
              mobileHeight: planet?.images.sizes.mobileHeight,
              tabletHeight: planet?.images.sizes.tabletHeight,
              desktopHeight: planet?.images.sizes.desktopHeight,
            }}
            alt=""
          />
          <PlanetImgGeo
            src={planet?.images.geology}
            $width={{
              mobileWidth: planet?.images.sizes.geoMobileWidth,
              tabletWidth: planet?.images.sizes.geoTabletWidth,
              desktopWidth: planet?.images.sizes.geoDesktopWidth,
            }}
            $height={{
              mobileHeight: planet?.images.sizes.geoMobileHeight,
              tabletHeight: planet?.images.sizes.geoTabletHeight,
              desktopHeight: planet?.images.sizes.geoDesktopHeight,
            }}
            $active={info === "geology"}
            $bottom={{
              bottom: planet?.bottom,
              bottomTablet: planet?.bottomTablet,
              bottomDesktop: planet?.bottomDesktop,
            }}
          />
        </PlanetImageContainer>

        <StyledDiv>
          <StyledWrapper>
            <PlanetHeading>{planet?.name.toUpperCase()}</PlanetHeading>
            <PlanetParagraph>
              {planet ? planet[info].content : null}
            </PlanetParagraph>

            <SourceParagraph>
              Source :{" "}
              <StyledAnchor
                href={
                  info === "overview"
                    ? planet?.overview.source
                    : info === "structure"
                    ? planet?.structure.source
                    : info === "geology"
                    ? planet?.geology.source
                    : ""
                }
              >
                Wikipedia
              </StyledAnchor>
              <img
                src="./assets/icon-source.svg"
                style={{ marginLeft: "5px" }}
                alt=""
              />
            </SourceParagraph>
          </StyledWrapper>
          <MainStarterTablet>
            <StarterListTablet>
              <StarterListItemTablet
                $active={info === "overview"}
                $color={planet?.backgroundColor}
                onClick={() => setInfo("overview")}
              >
                <StyledSpan>01</StyledSpan>OVERVIEW
              </StarterListItemTablet>
              <StarterListItemTablet
                $active={info === "structure"}
                $color={planet?.backgroundColor}
                onClick={() => setInfo("structure")}
              >
                <StyledSpan>02</StyledSpan>STRUCTURE
              </StarterListItemTablet>
              <StarterListItemTablet
                $active={info === "geology"}
                $color={planet?.backgroundColor}
                onClick={() => setInfo("geology")}
              >
                <StyledSpan>03</StyledSpan>SURFACE
              </StarterListItemTablet>
            </StarterListTablet>
          </MainStarterTablet>
        </StyledDiv>
      </PlanetInfo>
      <AllStats>
        <Stat>
          <StatTitle>ROTATION TIME</StatTitle>
          <StatValue>{planet?.rotation}</StatValue>
        </Stat>
        <Stat>
          <StatTitle>REVOLUTION TIME</StatTitle>
          <StatValue>{planet?.revolution}</StatValue>
        </Stat>
        <Stat>
          <StatTitle>RADIUS</StatTitle>
          <StatValue>{planet?.radius}</StatValue>
        </Stat>
        <Stat>
          <StatTitle>AVERAGE TEMP.</StatTitle>
          <StatValue>{planet?.temperature}</StatValue>
        </Stat>
      </AllStats>
    </Main>
  );
}

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 4.7rem;
  margin: auto;

  @media only screen and (min-width: 768px) {
  }
`;

const MainStarter = styled.section`
  padding: 0 1.2rem;
  width: 100%;
  display: flex;
  justify-content: center;
  max-width: 43.3rem;
`;
const MainStarterTablet = styled.section`
  display: flex;
  border-bottom: none;
  background: transparent;
  padding: 0;
  @media only screen and (max-width: 767px) {
    display: none;
  }
`;

const StarterList = styled.ul`
  list-style: none;
  width: 100%;
  display: flex;
  justify-content: space-between;

  @media only screen and (min-width: 767px) {
    display: none;
  }
  @media only screen and (max-width: 767px) {
    display: flex;
  }
`;

const StarterListTablet = styled.ul`
  list-style: none;
  width: 100%;
  display: flex;
  justify-content: space-between;

  @media only screen and (min-width: 768px) {
    flex-direction: column;
    justify-content: center;
  }
`;

const StarterListItem = styled.li<{
  $active: boolean;
  $color: string | undefined;
}>`
  font-size: 0.9rem;
  min-width: 9rem;
  font-weight: bold;
  letter-spacing: 1.93px;
  text-align: center;
  padding: 2rem 0;
  cursor: pointer;

  opacity: ${(props) => `${props.$active ? 1 : 0.5}`};
  color: #fff;
  border-bottom: ${(props) =>
    `${props.$active ? `4px solid ${props.$color}` : ""}`};
`;

const StarterListItemTablet = styled.li<{
  $active: boolean;
  $color: string | undefined;
}>`
  font-size: 0.9rem;
  min-width: 9rem;
  font-weight: bold;
  letter-spacing: 1.93px;
  text-align: center;
  padding: 2rem 0;
  cursor: pointer;

  opacity: ${(props) => `${props.$active ? 1 : 0.5}`};
  color: #fff;
  border-bottom: ${(props) =>
    `${props.$active ? `4px solid ${props.$color}` : ""}`};

  @media only screen and (min-width: 768px) {
    border: solid 1px rgba(255, 255, 255, 0.2);
    padding: 0.8rem 2rem;
    line-height: 2.78;
    letter-spacing: 1.93px;
    margin-top: 1.6rem;
    text-align: left;
    width: 28.1rem;
    background-color: ${(props) => `${props.$active ? `${props.$color}` : ""}`};
  }

  @media only screen and (min-width: 90rem) {
    width: 35rem;
    font-size: 1.2rem;
  }
  &:hover {
    background-color: rgba(216, 216, 216, 0.2);
  }
`;

const StyledSpan = styled.span`
  margin-right: 1.7rem;
`;

const PlanetInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 2.4rem;
  width: 100%;

  @media only screen and (min-width: 768px) {
    padding: 0;
    max-width: 68.8rem;
  }
  @media only screen and (min-width: 1440px) {
    flex-direction: row;
    max-width: 111.1rem;
  }
`;

const PlanetImageContainer = styled.div`
  height: 30.4rem;
  width: 100%;
  padding: 0 2.4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  @media only screen and (min-width: 768px) {
    height: 46rem;
  }
  @media only screen and (min-width: 1440px) {
    height: 75.4rem;
  }
`;

const PlanetImg = styled.img<{
  $width:
    | {
        mobileWidth: string | undefined;
        tabletWidth: string | undefined;
        desktopWidth: string | undefined;
      }
    | undefined;
  $height:
    | {
        mobileHeight: string | undefined;
        tabletHeight: string | undefined;
        desktopHeight: string | undefined;
      }
    | undefined;
}>`
  width: ${(props) => props.$width?.mobileWidth};
  height: ${(props) => props.$height?.mobileHeight};

  @media only screen and (min-width: 768px) {
    width: ${(props) => props.$width?.tabletWidth};
    height: ${(props) => props.$height?.tabletHeight};
  }
  @media only screen and (min-width: 90rem) {
    width: ${(props) => props.$width?.desktopWidth};
    height: ${(props) => props.$height?.desktopHeight};
  }
`;

const PlanetImgGeo = styled(PlanetImg)<{
  $bottom: {
    bottom: string | undefined;
    bottomTablet: string | undefined;
    bottomDesktop: string | undefined;
  };
  $active: boolean;
}>`
  position: absolute;
  bottom: ${(props) => props.$bottom.bottom};
  /* bottom: 55px; */

  left: 50%;
  transform: translateX(-50%);

  display: ${(props) => `${props.$active ? "inline-block" : "none"}`};

  @media only screen and (min-width: 768px) {
    bottom: ${(props) => props.$bottom.bottomTablet};
  }
  @media only screen and (min-width: 90rem) {
    bottom: ${(props) => props.$bottom.bottomDesktop};
  }
`;

const PlanetHeading = styled.h2`
  font-size: 4rem;
  font-weight: 500;
  color: #fff;
  text-align: center;

  @media only screen and (min-width: 768px) {
    text-align: left;
  }
  @media only screen and (min-width: 90rem) {
    font-size: 8rem;
  }
`;

const PlanetParagraph = styled.p`
  font-size: 1.1rem;
  line-height: 2;
  margin-top: 1.6rem;
  opacity: 0.5;
  color: #fff;
  max-width: 43.3rem;
  text-align: center;

  @media only screen and (min-width: 768px) {
    text-align: left;
    max-width: 32rem;
    margin-bottom: 3.2rem;
  }
  @media only screen and (min-width: 90rem) {
    font-size: 1.4rem;
    max-width: 35rem;
    opacity: 1;
    margin-top: 2.3rem;
  }
`;
const StyledAnchor = styled.a`
  text-decoration: underline;
  opacity: 0.95;
  line-height: 2;
  font-size: 1.4rem;

  font-weight: bold;
  color: #fff;
`;
const SourceParagraph = styled(PlanetParagraph)`
  font-size: 1.2rem;
  line-height: 2.08;
  text-decoration: none;
  margin-bottom: 1.4rem;
  opacity: 0.5;
  color: #fff;
  @media only screen and (min-width: 90rem) {
    font-size: 1.4rem;
  }
`;

const AllStats = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  margin-top: 2.7rem;
  flex: 1;
  max-width: 43.3rem;

  @media only screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: center;
    max-width: 68.8rem;
  }
  @media only screen and (min-width: 90rem) {
    gap: 3rem;
    margin: 0;

    max-width: 111.1rem;
  }
`;

const Stat = styled.div`
  padding: 0.9rem 2.4rem 1.3rem;
  border: 1px solid rgba(255, 255, 255, 0.2);
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex: 1;
  @media only screen and (min-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 1.1rem;
    width: 16.4rem;
    /* max-width: 22rem; */
  }
  @media only screen and (min-width: 90rem) {
    width: 25.5rem;
    padding: 2rem 0 2.7rem 2.3rem;
    gap: 0.204rem;
  }
`;

const StatTitle = styled.p`
  font-size: 0.8rem;
  font-weight: bold;
  line-height: 2;
  letter-spacing: 0.73px;
  opacity: 0.5;
  color: #fff;

  @media only screen and (min-width: 1440px) {
    font-size: 1.2rem;
    line-height: 2.27;
    letter-spacing: 1px;
  }
`;

const StatValue = styled.p`
  font-size: 2rem;
  font-weight: 500px;
  letter-spacing: -0.75px;
  font-family: "Antonio", sans-serif;
  color: #fff;
  @media only screen and (min-width: 90rem) {
    font-size: 4rem;
    letter-spacing: -1.5px;
  }
`;

const StyledDiv = styled.div`
  @media only screen and (min-width: 768px) {
    display: flex;
    width: 68.8rem;

    justify-content: space-between;
  }

  @media only screen and (max-width: 767px) {
    justify-content: center;
    gap: 0;
  }
  @media only screen and (min-width: 1440px) {
    flex-direction: column;
    align-items: flex-start;
    max-width: 35rem;
    justify-self: flex-end;
  }
`;

const StyledWrapper = styled.div``;
