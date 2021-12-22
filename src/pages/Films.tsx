import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { fetchFilms } from "../store/actionCreators/filmsActionCreator";
import { IFilms } from "../models/films";

import FilmsCard from "../components/FilmsCard";
import Loader from "../components/Loader";

const FilmsPage = () => {
  const dispatch = useAppDispatch();

  const { data, isLoading } = useAppSelector((state) => state.films);

  useEffect(() => {
    dispatch(fetchFilms());
  }, [dispatch]);

  if (isLoading) {
    return (
      <section className="films">
        <div className="films__content">
          <h2 className="films__title page-title">Films</h2>
          <div className="films__cards">
            <div className="loader">
              <Loader />
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="films">
      <div className="films__content">
        <h2 className="films__title page-title">Films</h2>
        <div className="films__cards">
          {data.map((film: IFilms) => (
            <FilmsCard key={film.url} film={film} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FilmsPage;
