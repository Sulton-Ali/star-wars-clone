import React from "react";
import { IFilmsCardProps } from "../models/films";

import { IMAGE_API_BASE_URL } from "../utils/constants";
import { getItemNumber } from "../utils/getItemNumber";

const FilmsCard = (props: IFilmsCardProps) => {
  const { film } = props;
  const filmId = getItemNumber(film.url);
  return (
    <div className="films-card">
      <div className="films-card__front">
        <img
          src={`${IMAGE_API_BASE_URL}films/${filmId}.jpg`}
          alt="film img"
          className="films-card__img"
        />
      </div>
      <div className="films-card__back">
        <span className="films-card__name">{film.title}</span>
        <div className="films-card__specs">
          <div className="films-card__specs-item">
            <span className="films-card__specs-key">Episode ID:</span>
            <span className="films-card__specs-value">{film.episode_id}</span>
          </div>

          <div className="films-card__specs-item">
            <span className="films-card__specs-key">Director:</span>
            <span className="films-card__specs-value">{film.director}</span>
          </div>
          <div className="films-card__specs-item">
            <span className="films-card__specs-key">Producer:</span>
            <span className="films-card__specs-value">{film.producer}</span>
          </div>
          <div className="films-card__specs-item">
            <span className="films-card__specs-key">Release Date:</span>
            <span className="films-card__specs-value">{film.release_date}</span>
          </div>
          <div className="films-card__specs-item films-card__specs-item--opening-crowl">
            <span className="films-card__specs-key">0pening Crowl:</span>
            <span className="films-card__specs-value">
              {film.opening_crawl}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilmsCard;
