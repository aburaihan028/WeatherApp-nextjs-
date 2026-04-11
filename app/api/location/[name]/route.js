import { getLocationByName } from "../location-util";

export async function GET(request, { params }) {
  const { name } = await params;
  const locationData = getLocationByName(name);

  return Response.json(locationData);
}
