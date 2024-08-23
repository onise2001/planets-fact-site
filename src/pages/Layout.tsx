import { useEffect } from "react";
import Header from "../components/Header";
import { Outlet, useParams, useNavigate } from "react-router-dom";
import GlobalStyles from "../my-styled-components/GlobalStyles";

import planets from "../data.json";

export default function Layout() {
  const params = useParams<{ planet: string }>();
  const navigate = useNavigate();
  const planetNames = planets.map((planet) => planet.name);
  console.log(planetNames);
  console.log(params);
  useEffect(() => {
    if (params.planet) {
      if (planetNames.includes(params?.planet)) {
        navigate(`/${params?.planet}`);
      }
    } else {
      navigate("/Earth");
    }
  }, []);

  return (
    <>
      <GlobalStyles />
      <Header />
      <Outlet />
    </>
  );
}
