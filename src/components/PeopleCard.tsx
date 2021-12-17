import React, { FC } from "react";
import { IPeopleCardProps } from "../models/peopleCard";
import { getItemNumber } from "../utils/getItemNumber";

const PeopleCard: FC<IPeopleCardProps> = ({ people }: IPeopleCardProps) => {
  const characterId = getItemNumber(people.url);

  return (
    <div className="people-card">
      <img
        src={`https://starwars-visualguide.com/assets/img/characters/${characterId}.jpg`}
        alt="people img"
        className="people-card__img"
      />
      <div className="people-card__info">
        <span className="people-card__name">{people.name}</span>
        <div className="people-card__specs">
          <div className="people-card__specs-item">
            <span className="people-card__specs-key">Height:</span>
            <span className="people-card__specs-value">{people.height}</span>
          </div>
          <div className="people-card__specs-item">
            <span className="people-card__specs-key">Mass:</span>
            <span className="people-card__specs-value">{people.mass}</span>
          </div>
          <div className="people-card__specs-item">
            <span className="people-card__specs-key">Hair color:</span>
            <span className="people-card__specs-value">
              {people.hair_color}
            </span>
          </div>
          <div className="people-card__specs-item">
            <span className="people-card__specs-key">Skin color:</span>
            <span className="people-card__specs-value">
              {people.skin_color}
            </span>
          </div>
          <div className="people-card__specs-item">
            <span className="people-card__specs-key">Eye color:</span>
            <span className="people-card__specs-value">{people.eye_color}</span>
          </div>
          <div className="people-card__specs-item">
            <span className="people-card__specs-key">Birth year:</span>
            <span className="people-card__specs-value">
              {people.birth_year}
            </span>
          </div>
          <div className="people-card__specs-item">
            <span className="people-card__specs-key">Gender:</span>
            <span className="people-card__specs-value">{people.gender}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PeopleCard;
