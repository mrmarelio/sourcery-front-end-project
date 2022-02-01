export const getRoomsFiltersData = async () => {
  const resp = await fetch(
    "http://frontendsourceryweb.s3-website.eu-central-1.amazonaws.com/rooms.json"
  );

  const data = await resp.json();

  return data.rooms.filterCategories;
};
