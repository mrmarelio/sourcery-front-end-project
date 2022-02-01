import React from "react";
import PropTypes from "prop-types";
import FavoritesIcon from "../../assets/icons/reservations-search-icons/favorites-icon.svg";
import AvailableIcon from "../../assets/icons/reservations-search-icons/available-icon.svg";
import FavoritesIconActive from "../../assets/icons/reservations-search-icons/favorites-icon-active.svg";
import AvailableIconActive from "../../assets/icons/reservations-search-icons/available-icon-active.svg";
import ClearIcon from "../../assets/icons/reservations-search-icons/clear-icon.svg";
import SearchIconDark from "../../assets/icons/reservations-search-icons/search-icon-dark.svg";
import Button from "components/Button";
import FilterButton from "components/filterButton";
import DatePicker from "components/datePicker";
import InputField from "components/inputField";
import "./reservations-search.scss";

const ReservationsSearch = ({
  onSearch,
  reservationsType,
  searchFilterFavActive,
  searchFilterAvailActive,
  searchFilterAllActive,
  displayAll,
  searchText,
  handleInputChange,
  clearInput,
  displayAvailable,
  displayFavorite,
  selectedDate,
  setSelectedDate,
}) => {
  const submitSearch = () => {
    onSearch(searchText);
  };

  return (
    <div className="reservations-search">
      <h1 className="reservations-search__main-heading">
        {`${reservationsType} Reservations`}
      </h1>
      <div className="reservations-search__card">
        <h2 className="reservations-search__card__heading">Search</h2>
        <div className="reservations-search__card__buttons">
          <FilterButton
            filterName="All"
            isActive={searchFilterAllActive}
            onClick={displayAll}
          />
          <FilterButton
            icon={searchFilterFavActive ? FavoritesIconActive : FavoritesIcon}
            alt="favorites icon"
            filterName="Favorites"
            isActive={searchFilterFavActive}
            onClick={displayFavorite}
          />
          <FilterButton
            icon={searchFilterAvailActive ? AvailableIconActive : AvailableIcon}
            alt="available icon"
            filterName="Available"
            isActive={searchFilterAvailActive}
            onClick={displayAvailable}
          />
        </div>
        <form
          className="reservations-search__card__form"
          onSubmit={(e) => {
            e.preventDefault();
            submitSearch();
          }}
        >
          <div className="reservations-search__card__search-input">
            <InputField
              onChange={handleInputChange}
              value={searchText}
              iconBefore={
                <img
                  className="input-field__icon input-field__icon-before"
                  src={SearchIconDark}
                  alt=""
                />
              }
              iconAfter={
                <button
                  className="reservations-search__card__btn-clear input-field__button"
                  onClick={clearInput}
                  type="button"
                >
                  <img
                    className="input-field__icon input-field__icon-after"
                    src={ClearIcon}
                    alt="clear input icon"
                  />
                </button>
              }
            />
          </div>

          <div className="reservations-search__card__date-input">
            <DatePicker
              selectedDate={selectedDate}
              setSelectedDate={setSelectedDate}
            />
          </div>

          <div className="reservations-search__card__search-button">
            <Button icon="search" size="large" type="submit">
              SEARCH
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

ReservationsSearch.propTypes = {
  reservationsType: PropTypes.string.isRequired,
  onSearch: PropTypes.func,
  searchFilterAllActive: PropTypes.bool,
  searchFilterAvailActive: PropTypes.bool,
  searchFilterFavActive: PropTypes.bool,
  displayAll: PropTypes.func,
  searchText: PropTypes.string,
  handleInputChange: PropTypes.func,
  clearInput: PropTypes.func,
  displayAvailable: PropTypes.func,
  displayFavorite: PropTypes.func,
  selectedDate: PropTypes.instanceOf(Date),
  setSelectedDate: PropTypes.func,
  filterByDate: PropTypes.func,
};

export default ReservationsSearch;
