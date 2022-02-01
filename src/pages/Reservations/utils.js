import moment from "moment";
import { useEffect } from "react";

export const displayAll = (
  list,
  setList,
  setSearchText,
  setDisplayedItemsTitle
) => {
  return function displayAllItems() {
    setList(list);
    setSearchText("");
    setDisplayedItemsTitle("All");
  };
};

export const onSearch = (
  searchText,
  setSearchText,
  list,
  setList,
  formattedDateToday,
  formattedSelectedDate
) => {
  return function onSearchFunc() {
    setSearchText(searchText);

    const filteredByText = list?.filter(
      (listItem) =>
        listItem?.genre?.toLowerCase().includes(searchText.toLowerCase()) ||
        listItem?.os?.toLowerCase().includes(searchText.toLowerCase()) ||
        listItem?.name?.toLowerCase().includes(searchText.toLowerCase()) ||
        listItem?.brand?.toLowerCase().includes(searchText.toLowerCase())
    );

    const filteredByDate = filteredByText?.filter(
      (listItem) =>
        listItem?.bookedUntil === null ||
        listItem?.bookedUntil < formattedSelectedDate ||
        listItem?.bookedUntil[listItem?.bookedUntil?.length - 1]?.date <
          formattedSelectedDate
    );

    const filteredByTextAndDate =
      formattedDateToday !== formattedSelectedDate
        ? filteredByDate
        : filteredByText;

    setList(filteredByTextAndDate);
  };
};

export const clearInput = (setSearchText) => {
  return function clearInputFunc() {
    setSearchText("");
  };
};

export const displayFavorite = (
  list,
  favIds,
  setList,
  setDisplayedItemsTitle
) => {
  return function displayFavoriteItems() {
    const filteredByFavoriteIds = list?.filter(
      (listItem) => favIds?.indexOf(listItem.id) !== -1
    );

    setList(filteredByFavoriteIds);
    setDisplayedItemsTitle("Favorites");
  };
};

export const dateToday = new Date();
export const formattedDateToday = moment(dateToday).format("YYYY-MM-DD");

export const checkIfSomeFiltersSelected = (checkedItems) =>
  Object.values(checkedItems).some((filterVal) => filterVal === true);

export const FilterItems = (
  checkedItems,
  displayedList,
  setFilteredList,
  arrOfDependencies
) => {
  useEffect(() => {
    const checkedTrueItems = Object.keys(checkedItems).filter(
      (item) => !!checkedItems[item]
    );

    const filteredItems = displayedList.filter(
      (listItem) =>
        checkedTrueItems.indexOf(listItem.deviceType) !== -1 ||
        checkedTrueItems.indexOf(listItem.os) !== -1 ||
        checkedTrueItems.indexOf(listItem.brand) !== -1 ||
        checkedTrueItems.indexOf(listItem.genre) !== -1
    );

    setFilteredList(filteredItems);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, arrOfDependencies);
};

export const checkIfAllDisplayed = (displayedList, list) =>
  displayedList.length === list.length;

export const checkIfFavDisplayed = (displayedList, list, favIds) =>
  displayedList.length ===
  list?.filter((listItem) => favIds?.indexOf(listItem.id) !== -1).length;
