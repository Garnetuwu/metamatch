import { useState } from "react";
import Filter from "../components/HeroesList/Filter.js";
import HeroList from "../components/HeroesList/HeroList.js";

const Allheroes = () => {
  const [selected, setSelected] = useState("tank");

  const changeFilterHandler = (title) => {
    setSelected(title);
  };

  return (
    <>
      <Filter selected={selected} onFilter={changeFilterHandler} />
      <HeroList role={selected} />
    </>
  );
};

export default Allheroes;
