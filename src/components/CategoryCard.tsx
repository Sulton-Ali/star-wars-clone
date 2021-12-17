import React, { FC } from "react";
import { useHistory } from "react-router-dom";
import { ICategoryCardProps } from "../models/categoryCard";
import { IMAGE_API_BASE_URL } from "../utils/constants";

const CategoryCard: FC<ICategoryCardProps> = ({
  category,
}: ICategoryCardProps) => {
  const history = useHistory();

  return (
    <div className="category-card" onClick={() => history.push(`/${category}`)}>
      <img
        src={`${IMAGE_API_BASE_URL}categories/${category}.jpg`}
        alt="category img"
        className="category-card__img"
      />
      <span
        className={`category-card__title category-card__title--${category}`}
      >
        {category}
      </span>
    </div>
  );
};

export default CategoryCard;
