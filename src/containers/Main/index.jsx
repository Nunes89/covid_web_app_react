import React, { memo, useCallback, useEffect, useState } from "react";
import api from "../../api";
import Board from "./components/Board";
import Panel from "./components/Panel";
import { ContainerStyled } from "./style";

function Main() {
  const [data, setData] = useState({});
  const [country, setCountry] = useState("brazil");

  const getCovidData = useCallback((country) => {
    api.getCountry(country).then((data) => setData(data));
  }, []);

  useEffect(() => {
    getCovidData(country);
  }, [getCovidData, country]);

  const handleChange = ({ target }) => {
    const country = target.value;
    setCountry(country);
  };

  return (
    <ContainerStyled>
      <div className="mb-2">
        <Panel
          data={data}
          onChange={handleChange}
          country={country}
          getCovidData={getCovidData}
        />
      </div>
      <Board data={data} />
    </ContainerStyled>
  );
}

export default memo(Main);
