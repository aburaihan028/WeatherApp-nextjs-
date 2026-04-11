import LocationInfo from "@/components/LocationInfo";
import LocationNotFound from "@/components/LocationNotFound";
import { getResolvedLatLong } from "@/lib/location-info.lib";

const LocationPage = async ({ params, searchParams }) => {
  const { location } = await params;
  const { latitude, longitude } = await searchParams;

  const resolved = await getResolvedLatLong(location, latitude, longitude);

  if (resolved?.lat && resolved?.lon) {
    return <LocationInfo lat={resolved?.lat} lon={resolved?.lon} />;
  } else {
    return <LocationNotFound />;
  }
};

export default LocationPage;
