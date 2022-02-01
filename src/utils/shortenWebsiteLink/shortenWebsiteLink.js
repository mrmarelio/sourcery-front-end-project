const shortenWebsiteLink = (websiteLink) => {
  const shortLink = websiteLink.split("//")[1];
  return shortLink.startsWith("www.") ? shortLink.split("www.")[1] : shortLink;
};

export default shortenWebsiteLink;
