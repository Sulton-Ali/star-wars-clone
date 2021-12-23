import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { fetchSpecies } from "../store/actionCreators/speciesActionCreator";
import SpeciesCard from "../components/SpeciesCard";
import { ISpecy } from "../models/species";
import Pagination from "../components/Pagination";
import { ITEMS_PER_PAGE } from "../utils/constants";
import Loader from "../components/Loader";

const SpeciesPage = () => {
  const [pageIndex, setPageIndex] = useState(1);

  const dispatch = useAppDispatch();
  const {
    data: species,
    totalCount,
    isLoading,
  } = useAppSelector((state) => state.species);

  useEffect(() => {
    dispatch(fetchSpecies({ page: pageIndex }));
  }, [pageIndex, dispatch]);

  if (isLoading) {
    return (
      <div className="species">
        <h2 className="species__title page-title">Species</h2>
        <div className="species__cards">
          <div className="loader">
            <Loader />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="species">
      <h2 className="species__title page-title">Species</h2>
      <div className="species__cards">
        {species.map((specy: ISpecy) => (
          <SpeciesCard key={specy.name} specy={specy} />
        ))}
      </div>
      <Pagination
        totalCount={totalCount}
        pageSize={ITEMS_PER_PAGE}
        pageIndex={pageIndex}
        onChangePageIndex={(page: number) => setPageIndex(page)}
      />
    </div>
  );
};

export default SpeciesPage;
