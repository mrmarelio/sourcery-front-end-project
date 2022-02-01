export const getBooksData = async () => {
  const response = await fetch(
    "http://frontendsourceryweb.s3-website.eu-central-1.amazonaws.com/books.json"
  );

  const data = await response.json();

  return {
    bookList: data.books.bookList,
    bookFilterCategories: data.books.filterCategories,
  };
};
