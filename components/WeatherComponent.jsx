import Card from "./Card";
import { getWeatherData } from "@/lib/weather-info.lib";
import Image from "next/image";

const WeatherComponent = async ({ lat, lon }) => {
  const { main, description } = await getWeatherData(lat, lon);

  return (
    <Card>
      <h6 className="feature-name">Current Weather</h6>
      <div className="feature-main">
        <Image
          className="max-w-20"
          src="/icons/icon_rain.png"
          alt="rain icon"
          width={200}
          height={200}
        />
        <h3 className="feature-title">{main}</h3>
        <span className="feature-name">{description}</span>
      </div>
    </Card>
  );
};

export default WeatherComponent;
