import LocationNotFound from "@/components/LocationNotFound";
import { getResolvedLatLong } from "@/lib/location-info.lib";

const { default: WindComponent } = require("@/components/WindComponent");

const WindPage = async ({ params, searchParams }) => {
  const { location } = await params;
  const { latitude, longitude } = await searchParams;

  const resolved = await getResolvedLatLong(location, latitude, longitude);

  if (resolved?.lat && resolved?.lon) {
    return <WindComponent lat={resolved?.lat} lon={resolved?.lon} />;
  } else {
    return <LocationNotFound />;
  }
};

export default WindPage;
