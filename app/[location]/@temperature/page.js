import LocationNotFound from "@/components/LocationNotFound";
import TemperatureComponent from "@/components/TemperatureComponent";
import { getResolvedLatLong } from "@/lib/location-info.lib";

const TemperaturePage = async ({ params, searchParams }) => {
  const { location } = await params;
  const { latitude, longitude } = await searchParams;

  const resolved = await getResolvedLatLong(location, latitude, longitude);

  if (resolved?.lat && resolved?.lon) {
    return <TemperatureComponent lat={resolved?.lat} lon={resolved?.lon} />;
  } else {
    return <LocationNotFound />;
  }
};

export default TemperaturePage;
