import { Suspense } from "react";
import LocationDetector from "@/components/LocationDetector";

export default function Home() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <LocationDetector />
    </Suspense>
  );
}
