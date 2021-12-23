import React from "react";

import { IMAGE_API_BASE_URL } from "../utils/constants";

import { ISpeciesCardProps } from "../models/species";
import { getItemNumber } from "../utils/getItemNumber";

const SpeciesCard = (props: ISpeciesCardProps) => {
  const { specy } = props;
  const specyNumber = getItemNumber(specy.url);
  return (
    <div className="species-card">
      <span className="species-card__name">{specy.name}</span>
      <div className="species-card__img">
        <img src={`${IMAGE_API_BASE_URL}species/${specyNumber}.jpg`} alt="" />
      </div>
      <div className="species-card__info"></div>
    </div>
  );
};

export default SpeciesCard;
