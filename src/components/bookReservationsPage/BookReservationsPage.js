import React, { useState, useEffect } from "react";
import { getBooksData } from "./endpoint";
import ReservationsFilters from "components/reservationsFilters";
import ReservationsSearch from "components/reservationsSearch";
import Breadcrumbs from "components/Breadcrumbs";
import moment from "moment";
import FilterButton from "components/filterButton";
import ClearIcon from "assets/icons/reservations-filters-btn-clear.svg";
import CardListSection from "components/cardListSection";
import { useAuth } from "features/userData";
import {
  displayAll,
  onSearch,
  clearInput,
  displayFavorite,
  dateToday,
  formattedDateToday,
  checkIfSomeFiltersSelected,
  FilterItems,
  checkIfAllDisplayed,
  checkIfFavDisplayed,
} from "pages/Reservations/utils";
import "./book-reservations-page.scss";

const BookReservationsPage = () => {
  const [genres, setGenres] = useState([]);
  const [bookList, setBookList] = useState([]);
  const [likedBooks, setLikedBooks] = useState([]);
  const [displayedBookList, setDisplayedBookList] = useState([]);
  const [filteredBookList, setFilteredBookList] = useState(displayedBookList);

  const name = "GENRES";

  const { userData } = useAuth();

  useEffect(() => {
    const fillData = async () => {
      const booksData = await getBooksData();
      setGenres(booksData.bookFilterCategories.genre);
      setBookList(booksData.bookList);
      setDisplayedBookList(booksData.bookList);
      setLikedBooks(userData.liked?.books);
    };
    fillData();
  }, [userData]);

  const [searchText, setSearchText] = useState("");
  const [displayedItemsTitle, setDisplayedItemsTitle] = useState("All");
  const [selectedDate, setSelectedDate] = useState(dateToday);
  const formattedSelectedDate = moment(selectedDate).format("YYYY-MM-DD");

  const handleInputChange = (e) => {
    setSearchText(e.target.value);
  };

  const allItemsDisplayed = checkIfAllDisplayed(displayedBookList, bookList);

  const displayAvailable = () => {
    setDisplayedBookList(
      bookList?.filter((book) => book?.bookedUntil === null)
    );
    setDisplayedItemsTitle("Available");
  };

  const availableDisplayed =
    displayedBookList.length ===
    (bookList?.filter((book) => book?.bookedUntil === null)).length;

  const favoriteIds = likedBooks?.map((likedItem) => likedItem.id);

  const favoriteDisplayed = checkIfFavDisplayed(
    displayedBookList,
    bookList,
    favoriteIds
  );

  const [genresChecked, setGenresChecked] = useState({});

  const checkedItems = {
    ...genresChecked,
  };

  const isSomeFiltersSelected = checkIfSomeFiltersSelected(checkedItems);

  FilterItems(checkedItems, displayedBookList, setFilteredBookList, [
    genresChecked,
  ]);

  const clearFilter = (filterName) => {
    if (genresChecked[filterName]) {
      setGenresChecked({
        ...genresChecked,
        [filterName]: false,
      });
    }
  };

  const resultsNum =
    isSomeFiltersSelected || filteredBookList.length
      ? filteredBookList.length
      : displayedBookList.length;

  return (
    <div className="book-reservations-page">
      <div className="book-reservations-page__breadcrumbs">
        <Breadcrumbs lastLevel="Books" />
      </div>
      <div className="book-reservations-page__search">
        <ReservationsSearch
          onSearch={onSearch(
            searchText,
            setSearchText,
            bookList,
            setDisplayedBookList,
            formattedDateToday,
            formattedSelectedDate
          )}
          reservationsType="Book"
          searchFilterAllActive={allItemsDisplayed}
          displayAll={displayAll(
            bookList,
            setDisplayedBookList,
            setSearchText,
            setDisplayedItemsTitle
          )}
          handleInputChange={handleInputChange}
          clearInput={clearInput(setSearchText)}
          searchText={searchText}
          displayAvailable={displayAvailable}
          searchFilterAvailActive={availableDisplayed}
          displayFavorite={displayFavorite(
            bookList,
            favoriteIds,
            setDisplayedBookList,
            setDisplayedItemsTitle
          )}
          searchFilterFavActive={favoriteDisplayed}
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
        />
      </div>

      <div className="book-reservations-page__filters-and-cards">
        <div className="book-reservations-page__results-checked-filters">
          <div className="book-reservations-page__results">
            {`${resultsNum} Results for:`}

            <em className="book-reservations-page__results--search-text">
              {searchText ? searchText : displayedItemsTitle}
            </em>
          </div>
          <div className="book-reservations-page__checked-filters">
            {Object.keys(checkedItems).map(
              (checkedFilter) =>
                checkedItems[checkedFilter] && (
                  <FilterButton
                    key={checkedFilter}
                    filterName={checkedFilter}
                    clearIcon={ClearIcon}
                    onClickIcon={clearFilter}
                  />
                )
            )}
          </div>
        </div>
        <div className="book-reservations-page__filters">
          <ReservationsFilters
            filterName={name}
            filterItems={genres}
            checkedItems={genresChecked}
            setCheckedItems={setGenresChecked}
          />
        </div>

        <div className="book-reservations-page__cards">
          <CardListSection
            displayedItemsList={displayedBookList}
            filteredItemsList={filteredBookList}
            isSomeFiltersSelected={isSomeFiltersSelected}
            favoriteIds={favoriteIds}
          />
        </div>
      </div>
    </div>
  );
};

export default BookReservationsPage;
