import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import CategoryCard from "./CategoryCard";
import "./categories-section.scss";

const CategoriesSection = ({ restaurants }) => {
  const categoriesUrl =
    "http://frontendsourceryweb.s3-website.eu-central-1.amazonaws.com/categories.json";

  const [categories, setCategories] = useState([]);

  const getCategoriesData = async () => {
    const response = await fetch(categoriesUrl);
    const category = await response.json();
    setCategories(category.categories);
  };
  useEffect(() => getCategoriesData(categoriesUrl), []);

  const getAmount = (neededCategoryName) =>
    restaurants.reduce(
      (count, restaurant) =>
        restaurant.categories.includes(neededCategoryName) ? count + 1 : count,
      0
    );

  const setSuffix = (category) => {
    if (getAmount(category) === 1) {
      return " place";
    } else {
      return " places";
    }
  };

  return (
    <>
      <h3 className="category-section__title">Categories</h3>
      <div className="category-section">
        {categories.map((category) => {
          return (
            <CategoryCard
              key={category}
              category={category}
              amount={getAmount(category) + setSuffix(category)}
            />
          );
        })}
      </div>
    </>
  );
};

CategoriesSection.propTypes = {
  restaurants: PropTypes.array,
};

export default CategoriesSection;
