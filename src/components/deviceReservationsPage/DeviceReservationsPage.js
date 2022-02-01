import React, { useState, useEffect } from "react";
import { getDevicesData } from "./endpoint";
import ReservationsFilters from "components/reservationsFilters";
import ReservationsSearch from "components/reservationsSearch";
import ClearIcon from "assets/icons/reservations-filters-btn-clear.svg";
import FilterButton from "components/filterButton";
import Breadcrumbs from "components/Breadcrumbs";
import moment from "moment";
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
import "./device-reservations-page.scss";

const DeviceReservationsPage = () => {
  const [deviceTypes, setDeviceTypes] = useState([]);
  const [OS, setOS] = useState([]);
  const [brands, setBrands] = useState([]);
  const [deviceList, setDeviceList] = useState([]);
  const [likedDevices, setLikedDevices] = useState([]);
  const [displayedDeviceList, setDisplayedDeviceList] = useState([]);
  const [filteredDeviceList, setFilteredDeviceList] =
    useState(displayedDeviceList);

  const { userData } = useAuth();

  const name = {
    deviceType: "DEVICE TYPE",
    OS: "OS",
    brands: "BRAND",
    genres: "GENRES",
  };

  useEffect(() => {
    const fillData = async () => {
      const deviceData = await getDevicesData();
      setDeviceTypes(deviceData.deviceFilterCategories.deviceType);
      setOS(deviceData.deviceFilterCategories.os);
      setBrands(deviceData.deviceFilterCategories.brand);
      setDeviceList(deviceData.deviceList);
      setDisplayedDeviceList(deviceData.deviceList);
      setLikedDevices(userData.liked?.devices);
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

  const allItemsDisplayed = checkIfAllDisplayed(
    displayedDeviceList,
    deviceList
  );

  const displayAvailable = () => {
    setDisplayedDeviceList(
      deviceList?.filter(
        (device) => device?.quantity !== 0 && device?.bookedUntil === null
      )
    );
    setDisplayedItemsTitle("Available");
  };

  const availableDisplayed =
    displayedDeviceList.length ===
    (deviceList?.filter(
      (device) => device?.quantity !== 0 && device?.bookedUntil === null
    )).length;

  const favoriteIds = likedDevices?.map((likedItem) => likedItem.id);

  const favoriteDisplayed = checkIfFavDisplayed(
    displayedDeviceList,
    deviceList,
    favoriteIds
  );

  const [deviceTypesChecked, setDeviceTypesChecked] = useState({});
  const [OSChecked, setOSChecked] = useState({});
  const [brandsChecked, setBrandsChecked] = useState({});

  const checkedItems = {
    ...deviceTypesChecked,
    ...OSChecked,
    ...brandsChecked,
  };

  const isSomeFiltersSelected = checkIfSomeFiltersSelected(checkedItems);

  FilterItems(checkedItems, displayedDeviceList, setFilteredDeviceList, [
    deviceTypesChecked,
    OSChecked,
    brandsChecked,
  ]);

  const clearFilter = (filterName) => {
    if (deviceTypesChecked[filterName]) {
      setDeviceTypesChecked({
        ...deviceTypesChecked,
        [filterName]: false,
      });
    } else if (OSChecked[filterName]) {
      setOSChecked({
        ...OSChecked,
        [filterName]: false,
      });
    } else if (brandsChecked[filterName]) {
      setBrandsChecked({
        ...brandsChecked,
        [filterName]: false,
      });
    }
  };

  const resultsNum =
    isSomeFiltersSelected || filteredDeviceList.length
      ? filteredDeviceList.length
      : displayedDeviceList.length;

  return (
    <div className="device-reservations-page">
      <div className="device-reservations-page__breadcrumbs">
        <Breadcrumbs lastLevel="Devices" />
      </div>
      <div className="device-reservations-page__search">
        <ReservationsSearch
          onSearch={onSearch(
            searchText,
            setSearchText,
            deviceList,
            setDisplayedDeviceList,
            formattedDateToday,
            formattedSelectedDate
          )}
          reservationsType="Device"
          searchFilterAllActive={allItemsDisplayed}
          displayAll={displayAll(
            deviceList,
            setDisplayedDeviceList,
            setSearchText,
            setDisplayedItemsTitle
          )}
          handleInputChange={handleInputChange}
          clearInput={clearInput(setSearchText)}
          searchText={searchText}
          displayAvailable={displayAvailable}
          searchFilterAvailActive={availableDisplayed}
          displayFavorite={displayFavorite(
            deviceList,
            favoriteIds,
            setDisplayedDeviceList,
            setDisplayedItemsTitle
          )}
          searchFilterFavActive={favoriteDisplayed}
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
        />
      </div>

      <div className="device-reservations-page__filters-and-cards">
        <div className="device-reservations-page__results-checked-filters">
          <div className="device-reservations-page__results">
            {`${resultsNum} Results for:`}

            <em className="device-reservations-page__results--search-text">
              {searchText ? searchText : displayedItemsTitle}
            </em>
          </div>
          <div className="device-reservations-page__checked-filters">
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
        <div className="device-reservations-page__filters">
          <ReservationsFilters
            filterName={name.deviceType}
            filterItems={deviceTypes}
            checkedItems={deviceTypesChecked}
            setCheckedItems={setDeviceTypesChecked}
          />

          <ReservationsFilters
            filterName={name.OS}
            filterItems={OS}
            checkedItems={OSChecked}
            setCheckedItems={setOSChecked}
          />

          <ReservationsFilters
            filterName={name.brands}
            filterItems={brands}
            checkedItems={brandsChecked}
            setCheckedItems={setBrandsChecked}
          />
        </div>

        <div className="device-reservations-page__cards">
          <CardListSection
            displayedItemsList={displayedDeviceList}
            filteredItemsList={filteredDeviceList}
            isSomeFiltersSelected={isSomeFiltersSelected}
            favoriteIds={favoriteIds}
          />
        </div>
      </div>
    </div>
  );
};

export default DeviceReservationsPage;
