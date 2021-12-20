import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { fetchFilms } from "../store/actionCreators/filmsActionCreator";

const FilmsPage = () => {
  const dispatch = useAppDispatch();

  const films = useAppSelector((state) => state.films);

  useEffect(() => {
    dispatch(fetchFilms());
  }, [dispatch]);

  return (
    <section className="films">
      <div className="films__content">
        <h2 className="films__title">Films</h2>
        <div className="films__cards"></div>
      </div>
    </section>
  );
};

export default FilmsPage;
