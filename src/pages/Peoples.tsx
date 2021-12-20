import React, { useEffect, useState } from "react";
import { CSSTransition, SwitchTransition } from "react-transition-group";
import PeopleCard from "../components/PeopleCard";
import { fetchPeople } from "../store/actionCreators/peopleActionCreator";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import Loader from "../components/Loader";
import Pagination from "../components/Pagination";
import { ITEMS_PER_PAGE } from "../utils/constants";

const PeoplesPage = () => {
  const [pageIndex, setPageIndex] = useState<number>(1);
  const dispatch = useAppDispatch();
  const { people, isLoading, totalCount } = useAppSelector(
    (state) => state.people
  );

  useEffect(() => {
    setTimeout(() => {
      dispatch(fetchPeople({ page: pageIndex }));
    }, 500);
  }, [pageIndex]);

  console.log(isLoading);

  const content = (
    <div className="people__content">
      <h2 className="peoples__title">Characters</h2>
      <div className="peoples__cards">
        {people && people.map((p) => <PeopleCard key={p.name} people={p} />)}
      </div>
      <div className="peoples__pagination">
        <Pagination
          totalCount={totalCount}
          pageSize={ITEMS_PER_PAGE}
          pageIndex={pageIndex}
          onChangePageIndex={(page: number) => setPageIndex(page)}
        />
      </div>
    </div>
  );

  return (
    <section className="peoples">
      <SwitchTransition>
        <CSSTransition
          key={pageIndex}
          in={!isLoading}
          timeout={500}
          classNames="peoples__content"
        >
          {content}
        </CSSTransition>
      </SwitchTransition>
    </section>
  );
};

export default PeoplesPage;
