import Image from "next/image";

export default function RootLayout({
  children,
  weather,
  aqi,
  wind,
  temperature,
}) {
  return (
    <div className="wrapper relative min-h-screen w-full">
      {/* Layer 1: The Image (Bottom) */}
      <Image
        src="/images/background.png"
        alt="bg-image"
        fill
        className="z-0"
        style={{ objectFit: "cover" }}
        priority
      />

      {/* Layer 2: The Overlay (Middle) */}
      <div className="overlay"></div>

      {/* Layer 3: Your Content (Top) */}
      <main className="relative z-20 w-full">
        <div className="container mx-auto">
          <div className="grid grid-cols-12 gap-y-8 py-16 lg:gap-8 2xl:gap-20 2xl:py-20">
            {children}
            {weather}
            {aqi}
            {wind}
            {temperature}
          </div>
        </div>
      </main>
    </div>
  );
}
