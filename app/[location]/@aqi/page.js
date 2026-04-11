import { getAQIData } from "@/lib/weather-info.lib";
import AQIComponent from "@/components/AQIComponent";
import { getResolvedLatLong } from "@/lib/location-info.lib";
import LocationNotFound from "@/components/LocationNotFound";

const AQIPage = async ({ params, searchParams }) => {
  const { location } = await params;
  const { latitude, longitude } = await searchParams;

  const resolved = await getResolvedLatLong(location, latitude, longitude);

  if (resolved?.lat && resolved?.lon) {
    return <AQIComponent lat={resolved?.lat} lon={resolved?.lon} />;
  } else {
    return <LocationNotFound />;
  }
};

export default AQIPage;
