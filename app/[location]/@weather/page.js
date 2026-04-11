import LocationNotFound from "@/components/LocationNotFound";
import WeatherComponent from "@/components/WeatherComponent";
import { getResolvedLatLong } from "@/lib/location-info.lib";

const WeatherPage = async ({ params, searchParams }) => {
  const { location } = await params;
  const { latitude, longitude } = await searchParams;

  const resolved = await getResolvedLatLong(location, latitude, longitude);

  if (resolved?.lat && resolved?.lon) {
    return <WeatherComponent lat={resolved?.lat} lon={resolved?.lon} />;
  } else {
    return <LocationNotFound />;
  }
};

export default WeatherPage;
