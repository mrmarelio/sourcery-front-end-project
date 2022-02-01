import React from "react";
import { PropTypes } from "prop-types";
import "./category-card.scss";
import { Link } from "react-router-dom";

const getIcon = (image_name) => {
  return (
    <img
      src={require(`../../assets/icons/categories-food-icons/${image_name}.svg`)}
      alt="{image_name}"
    />
  );
};

const CategoryCard = ({ category, amount }) => {
  return (
    <Link to={"/eat-out/category/" + category}>
      <div className="category-card">
        <h4 className="category-card__title">{category}</h4>
        <p className="category-card__description">{amount}</p>
        {getIcon(category)}
      </div>
    </Link>
  );
};

CategoryCard.propTypes = {
  category: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
};

export default CategoryCard;
