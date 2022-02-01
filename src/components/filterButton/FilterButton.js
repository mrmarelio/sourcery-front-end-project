import React from "react";
import PropTypes from "prop-types";
import "./filter-button.scss";

const FilterButton = ({
  icon,
  alt,
  filterName,
  isActive,
  onClick,
  clearIcon,
  onClickIcon,
  tabIndexIcon = 0,
  onKeyDownIcon = () => {},
}) => {
  return (
    <button
      className={`filter-button ${isActive ? "filter-button__active" : ""}`}
      onClick={onClick}
    >
      <div className="filter-button__items">
        {icon && (
          <img className="filter-button__items__icon" src={icon} alt={alt} />
        )}
        <span>{filterName}</span>
        {clearIcon && (
          <div
            role="button"
            tabIndex={tabIndexIcon}
            onClick={() => onClickIcon(filterName)}
            onKeyDown={onKeyDownIcon}
            className="filter-button__items__button"
          >
            <img src={clearIcon} alt=""></img>
          </div>
        )}
      </div>
    </button>
  );
};

FilterButton.propTypes = {
  icon: PropTypes.node,
  alt: PropTypes.string,
  filterName: PropTypes.string.isRequired,
  isActive: PropTypes.bool,
  onClick: PropTypes.func,
  clearIcon: PropTypes.node,
  onClickIcon: PropTypes.func,
  tabIndexIcon: PropTypes.number,
  onKeyDownIcon: PropTypes.func,
};

FilterButton.defaultProps = {
  alt: "",
  isActive: false,
  onClick: () => {},
  tabIndexIcon: 0,
  onKeyDownIcon: () => {},
};

export default FilterButton;
