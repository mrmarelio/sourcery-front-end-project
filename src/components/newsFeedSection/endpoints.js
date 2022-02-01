export const getStoriesData = async () => {
  const resp = await fetch(
    "http://frontendsourceryweb.s3-website.eu-central-1.amazonaws.com/stories.json"
  );
  const data = await resp.json();
  return data.stories;
};
