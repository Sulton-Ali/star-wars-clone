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
      <div className="species-card__info">
        <div className="species-card__specs">
          <div className="species-card__specs-item">
            <span className="species-card__specs-key">Classification:</span>
            <span className="species-card__specs-value">
              {specy.classification}
            </span>
          </div>

          <div className="species-card__specs-item">
            <span className="species-card__specs-key">Language:</span>
            <span className="species-card__specs-value">{specy.language}</span>
          </div>

          <div className="species-card__specs-item">
            <span className="species-card__specs-key">Designation:</span>
            <span className="species-card__specs-value">
              {specy.classification}
            </span>
          </div>

          <div className="species-card__specs-item">
            <span className="species-card__specs-key">Average Height:</span>
            <span className="species-card__specs-value">
              {specy.average_height}
            </span>
          </div>

          <div className="species-card__specs-item">
            <span className="species-card__specs-key">Average Lifespan:</span>
            <span className="species-card__specs-value">
              {specy.average_lifespan}
            </span>
          </div>

          <div className="species-card__specs-item">
            <span className="species-card__specs-key">Eye Colors:</span>
            <span className="species-card__specs-value">
              {specy.eye_colors}
            </span>
          </div>

          <div className="species-card__specs-item">
            <span className="species-card__specs-key">Hair Colors:</span>
            <span className="species-card__specs-value">
              {specy.hair_colors}
            </span>
          </div>

          <div className="species-card__specs-item">
            <span className="species-card__specs-key">Skin Colors:</span>
            <span className="species-card__specs-value">
              {specy.skin_colors}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpeciesCard;
