export const getDevicesData = async () => {
  const resp = await fetch(
    "http://frontendsourceryweb.s3-website.eu-central-1.amazonaws.com/devices.json"
  );

  const data = await resp.json();

  return {
    deviceFilterCategories: data.devices.filterCategories,
    deviceList: data.devices.deviceList,
  };
};
