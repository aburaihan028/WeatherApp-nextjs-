export const getLocationData = async (lat, lon) => {
  try {
    const response = await fetch(
      `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lon}&localityLanguage=en`,
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error.message);
  }
};

//
export const getLocationLatLonList = async () => {
  try {
    const response = await fetch(`${BASE_URL}/api/location`);
    if (!response.ok) {
      throw new Error("Failed to fetch locations");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error.message);
    return [];
  }
};

//
export const getLocationLatLon = async (locationName) => {
  try {
    const response = await fetch(`${BASE_URL}/api/location/${locationName}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error.message);
  }
};


//
export const getResolvedLatLong = async (location, lat, lon) => {
  if (lat && lon) {
    return { lat, lon };
  }

  const locationLatlon = await getLocationLatLon(location);

  if (locationLatlon.latitude && locationLatlon.longitude) {
    const lat = locationLatlon.latitude;
    const lon = locationLatlon.longitude;

    return { lat, lon };
  }
};
