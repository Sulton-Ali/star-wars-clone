import React, { useEffect, useState } from "react";

import PeopleCard from "../components/PeopleCard";
import { IPeople } from "../models/peopleCard";
import { $dataApi } from "../http/dataApi";

const PeoplesPage = () => {
  const [peopleList, setPeopleList] = useState<IPeople[]>([]);
  const p = {
    name: "Luke Skywalker",
    height: "172",
    mass: "77",
    hair_color: "blond",
    skin_color: "fair",
    eye_color: "blue",
    birth_year: "19BBY",
    gender: "male",
    homeworld: "https://swapi.py4e.com/api/planets/1/",
    films: [
      "https://swapi.py4e.com/api/films/1/",
      "https://swapi.py4e.com/api/films/2/",
      "https://swapi.py4e.com/api/films/3/",
      "https://swapi.py4e.com/api/films/6/",
      "https://swapi.py4e.com/api/films/7/",
    ],
    species: ["https://swapi.py4e.com/api/species/1/"],
    vehicles: [
      "https://swapi.py4e.com/api/vehicles/14/",
      "https://swapi.py4e.com/api/vehicles/30/",
    ],
    starships: [
      "https://swapi.py4e.com/api/starships/12/",
      "https://swapi.py4e.com/api/starships/22/",
    ],
    created: "2014-12-09T13:50:51.644000Z",
    edited: "2014-12-20T21:17:56.891000Z",
    url: "https://swapi.py4e.com/api/people/1/",
  };

  useEffect(() => {
    $dataApi
      .get("people/?page=2")
      .then((res) => setPeopleList(res.data.results));
  }, []);

  return (
    <section className="peoples">
      <div className="peoples__cards">
        {peopleList.map((p) => (
          <PeopleCard key={p.name} people={p} />
        ))}
      </div>
    </section>
  );
};

export default PeoplesPage;
