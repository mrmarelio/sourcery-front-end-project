import React from "react";
import PropTypes from "prop-types";
import ClearIcon from "assets/icons/reservations-filters-btn-clear.svg";
import "./reservations-filters.scss";

const ReservationsFilters = ({
  filterName,
  filterItems,
  checkedItems,
  setCheckedItems,
}) => {
  const clearCheckedItems = () => setCheckedItems({});

  const toggleCheck = (e, elem) => {
    setCheckedItems({ ...checkedItems, [elem]: e.target.checked });
  };

  return (
    <div className="reservations-filters">
      <div className="reservations-filters__top">
        <div className="reservations-filters__type">{filterName}</div>
        <button
          className="reservations-filters__btn"
          onClick={clearCheckedItems}
        >
          <span className="reservations-filters__btn__text">Clear all</span>
          <img src={ClearIcon} alt="" />
        </button>
      </div>
      <div className="reservations-filters__divider"></div>
      <ul className="reservations-filters__filters">
        {filterItems?.map((filterItem) => {
          const isChecked = !!checkedItems[filterItem];
          const filterItemId = filterItem.split(" ").join("");
          return (
            <li
              key={filterItem}
              className="reservations-filters__filters__item"
            >
              <input
                className="reservations-filters__filters__checkbox"
                type="checkbox"
                id={filterItemId}
                onChange={(e) => toggleCheck(e, filterItem)}
                checked={isChecked}
              ></input>
              <label
                className="reservations-filters__filters__label"
                htmlFor={filterItemId}
              >
                {filterItem}
              </label>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

ReservationsFilters.propTypes = {
  filterName: PropTypes.string.isRequired,
  filterItems: PropTypes.array.isRequired,
  checkedItems: PropTypes.object,
  setCheckedItems: PropTypes.func,
};

ReservationsFilters.defaultProps = {
  checkedItems: {},
  setCheckedItems: () => {},
};

export default ReservationsFilters;
