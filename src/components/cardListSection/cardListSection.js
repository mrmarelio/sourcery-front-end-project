import React, { useState } from "react";
import PropTypes from "prop-types";
import ReactPaginate from "react-paginate";
import "./card-list-section.scss";
import ReservationsListCard from "components/reservationsListCard";

const CardListSection = ({
  displayedItemsList,
  filteredItemsList,
  isSomeFiltersSelected,
  favoriteIds,
}) => {
  const [pageNumber, setPageNumber] = useState(0);

  const cardsPerPage = 6;
  const pagesVisited = pageNumber * cardsPerPage;

  const listItems =
    isSomeFiltersSelected || filteredItemsList.length
      ? filteredItemsList
      : displayedItemsList;

  const displayCards = listItems
    .slice(pagesVisited, pagesVisited + cardsPerPage)
    .map((item) => (
      <ReservationsListCard
        key={item.id}
        id={item.id}
        name={item.name}
        title={item.title}
        rating={item?.rating?.score}
        quantity={item.quantity}
        bookedUntil={item.bookedUntil}
        image={item.image}
        author={item.author}
        brand={item.brand}
        liked={favoriteIds.indexOf(item.id) !== -1}
      />
    ));

  const pageCount = Math.ceil(listItems.length / cardsPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <div className="device-list-section">
      {displayCards}
      <ReactPaginate
        previousLabel={"<"}
        nextLabel={">"}
        pageCount={pageCount}
        onPageChange={changePage}
        pageRangeDisplayed={2}
        marginPagesDisplayed={1}
        containerClassName={"device-list-section__pagination"}
        activeClassName={"device-list-section__pagination--active"}
        renderOnZeroPageCount={null}
      />
    </div>
  );
};

CardListSection.propTypes = {
  displayedItemsList: PropTypes.array.isRequired,
  filteredItemsList: PropTypes.array,
  isSomeFiltersSelected: PropTypes.bool,
  favoriteIds: PropTypes.array,
};

CardListSection.defaultProps = {
  filteredItemsList: [],
  favoriteIds: [],
};

export default CardListSection;
