import React, { FC } from "react";
import { IPaginationProps } from "../models/pagination";

const Pagination: FC<IPaginationProps> = (props: IPaginationProps) => {
  const { totalCount, pageSize, pageIndex, onChangePageIndex } = props;

  if (totalCount && totalCount < 1) {
    return null;
  }

  const pageCount = Math.floor(totalCount / pageSize) + 1;

  const intervalItem = (
    <div className="pagination__item pagination__interval">...</div>
  );
  const prevItem = (
    <div
      className="pagination__item pagination__prev"
      onClick={() => onChangePageIndex(pageIndex - 1)}
    >
      &#8592;
    </div>
  );
  const nextItem = (
    <div
      className="pagination__item pagination__next"
      onClick={() => onChangePageIndex(pageIndex + 1)}
    >
      &#8594;
    </div>
  );

  const withoutInterval = (count: number, page: number) => {
    const bullets = [];
    for (let i = 0; i < count; i++) {
      bullets.push(
        <div
          key={i}
          className={`pagination__item ${
            i + 1 === page ? "pagination__item--active" : ""
          }`}
          onClick={() => onChangePageIndex(i + 1)}
        >
          {i + 1}
        </div>
      );
    }
    return bullets;
  };

  const withInterval = (count: number, page: number) => {
    if (page === 1 || page === 2) {
      return (
        <>
          {1 === page ? (
            <div className="pagination__item pagination__item--active">1</div>
          ) : (
            <div
              className="pagination__item"
              onClick={() => onChangePageIndex(1)}
            >
              1
            </div>
          )}
          {2 === page ? (
            <div className="pagination__item pagination__item--active">2</div>
          ) : (
            <div
              className="pagination__item"
              onClick={() => onChangePageIndex(2)}
            >
              2
            </div>
          )}
          {intervalItem}
          <div
            className="pagination__item"
            onClick={() => onChangePageIndex(count)}
          >
            {count}
          </div>
        </>
      );
    }

    if (page === count || page === count - 1) {
      return (
        <>
          <div
            className="pagination__item"
            onClick={() => onChangePageIndex(1)}
          >
            1
          </div>
          {intervalItem}
          {count - 1 === page ? (
            <div className="pagination__item pagination__item--active">
              {count - 1}
            </div>
          ) : (
            <div
              className="pagination__item"
              onClick={() => onChangePageIndex(count - 1)}
            >
              {count - 1}
            </div>
          )}
          {count === page ? (
            <div className="pagination__item pagination__item--active">
              {count}
            </div>
          ) : (
            <div
              className="pagination__item"
              onClick={() => onChangePageIndex(count)}
            >
              {count}
            </div>
          )}
        </>
      );
    }

    return (
      <>
        <div className="pagination__item" onClick={() => onChangePageIndex(1)}>
          1
        </div>
        {intervalItem}
        <div className="pagination__item pagination__item--active">{page}</div>
        {intervalItem}
        <div
          className="pagination__item"
          onClick={() => onChangePageIndex(count)}
        >
          {count}
        </div>
      </>
    );
  };

  return (
    <div className="pagination">
      <div className="pagination__bullets">
        {pageIndex !== 1 && prevItem}
        {pageCount <= 5 && withoutInterval(pageCount, pageIndex)}
        {pageCount > 5 && withInterval(pageCount, pageIndex)}
        {pageIndex !== pageCount && nextItem}
      </div>
    </div>
  );
};

export default Pagination;
