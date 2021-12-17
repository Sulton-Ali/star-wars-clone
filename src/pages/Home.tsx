import React from "react";
import CategoryCard from "../components/CategoryCard";
import { CATEGORIES } from "../utils/constants";

const HomePage = () => {
  return (
    <div className="home">
      <div className="home__cards">
        {Object.values(CATEGORIES).map((category) => (
          <CategoryCard key={category} category={category} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
