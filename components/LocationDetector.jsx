"use client";

import React, { useState, useEffect } from "react";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import Image from "next/image";

const LocationDetector = () => {
  const [loading, setLoading] = useState(false);
  const searchParams = useSearchParams();
  const pathName = usePathname();
  const router = useRouter();

  useEffect(() => {
    // যদি অলরেডি লোকেশন ডাটা থাকে বা আমরা সঠিক পাথে থাকি, তবে আর রান করবে না
    if (searchParams.has("latitude") && searchParams.has("longitude")) return;
    // // ১. অপ্রয়োজনীয় বার বার রেন্ডার হওয়া আটকাতে
    // if (searchParams.get("latitude")) return;

    if (navigator.geolocation) {
      setLoading(true);

      navigator.geolocation.getCurrentPosition(
        (position) => {
          // ২. URLSearchParams রিঅ্যাক্ট ১৯ এ সরাসরি এভাবে ইউজ করা ভালো
          const params = new URLSearchParams(searchParams.toString());
          params.set("latitude", position.coords.latitude.toString());
          params.set("longitude", position.coords.longitude.toString());

          setLoading(false);
          // ৩. পুশ করার সময় আপডেট প্যারামিটার পাঠানো
          router.push(`/current?${params.toString()}`);
        },
        (error) => {
          console.error("Location access denied", error);
          setLoading(false);
        },
      );
    }
  }, [pathName, searchParams, router]); // ডিপেন্ডেন্সি অ্যারে সঠিক করা হয়েছে

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-slate-700 text-white">
      {loading && (
        <>
          <Image
            src="/network.gif"
            alt="Loadign..."
            className={"border rounded-md my-4"}
            height={500}
            width={500}
            loading="eager"
          />

          <p className="text-4xl text-center">Detecting Location...</p>
        </>
      )}
    </div>
  );
};

export default LocationDetector;
