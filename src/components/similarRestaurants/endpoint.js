export const getRestaurantData = async () => {
  const resp = await fetch(
    "http://frontendsourceryweb.s3-website.eu-central-1.amazonaws.com/restaurants.json"
  );

  const data = await resp.json();

  return data.restaurants;
};
