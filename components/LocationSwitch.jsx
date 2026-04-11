"use client";
import { use, useState, Suspense } from "react";
import { getLocationLatLonList } from "@/lib/location-info.lib";
import Image from "next/image";
import Link from "next/link";

// ডেটা ফেচিং প্রমিসটি কম্পোনেন্টের বাইরে বা কোনো ক্যাশ-এ রাখতে হয়
// যাতে প্রতি রেন্ডারে নতুন করে ফেচ না হয় (যদি না আপনি এটি সার্ভার থেকে পাঠান)
const locationsPromise = getLocationLatLonList();

// sub component
const LocationList = ({ show }) => {
  // React 19 'use' হুক এখানে প্রমিসটি রিজলভ করবে
  const locations = use(locationsPromise) || [];

  if (!show) return null;

  return (
    <div className="absolute left-0 top-12 z-999 w-full min-w-70 rounded-md bg-white p-4 shadow max-md:-translate-x-1/2">
      <ul
        role="list"
        className="divide-y divide-gray-100 *:py-2 [&>li]:cursor-pointer"
      >
        {locations.map((item) => (
          <li key={item.location}>
            <Link
              href={`/${item.location}?latitude=${item.latitude}&longitude=${item.longitude}`}
            >
              {item.location}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

const LocationSwitch = () => {
  const [showLocationList, setShowLocationList] = useState(false);

  return (
    <div className="relative">
      <button onClick={() => setShowLocationList(!showLocationList)}>
        <Image
          className="size-9"
          src="/icons/link.svg"
          alt="link icon"
          width={36}
          height={36}
        />
      </button>

      {/* use হুক ব্যবহার করলে অবশ্যই Suspense ব্যবহার করতে হবে */}
      <Suspense
        fallback={<div className="absolute top-12">Loading locations...</div>}
      >
        <LocationList show={showLocationList} />
      </Suspense>
    </div>
  );
};

export default LocationSwitch;

// or useEffect diya fetch. porano version react js ar
// "use client";
// import { getLocationLatLonList } from "@/lib/location-info.lib";
// import { useEffect, useState } from "react";
// import Image from "next/image";
// import Link from "next/link";

// const LocationSwitch = () => {
//   const [showLoactionList, setShowLoactionList] = useState(false);
//   const [locations, setLocation] = useState([]);

//   useEffect(() => {
//     const getLocationList = async () => {
//       const locationList = await getLocationLatLonList();
//     };
//     getLocationList();
//   }, []);
//   return (
//     <div className="relative">
//       <button>
//         <Image
//           className="size-9"
//           src="./assets/icons/link.svg"
//           alt="link icon"
//           width={36}
//           height={36}
//         />
//       </button>
//       {showLoactionList && (
//         <div className="absolute left-0 top-12 z-999 w-full min-w-70 rounded-md bg-white p-4 shadow max-md:-translate-x-1/2">
//           <ul
//             role="list"
//             className="divide-y divide-gray-100 *:py-2 [&>li]:cursor-pointer"
//           >
//             {locations.map((item) => (
//               <li key={item.location}>
//                 <Link
//                   href={`/${item.location}?latitude=${item.latitude}&longitude=${item.longitude}`}
//                 >
//                   {item.location}
//                 </Link>
//               </li>
//             ))}
//             <li>Dhaka</li>
//             <li>London</li>
//             <li>Amsterdam</li>
//           </ul>
//         </div>
//       )}
//     </div>
//   );
// };

// export default LocationSwitch;
