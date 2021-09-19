import Image from "next/image";
import Link from "next/link";

export default function VehiclesList({ autos }) {
    console.log("VehicleList", autos)
  return ( <></>
    // <div className="m-6 grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-2 mt-4">
    //   {autos.map((auto) => {
    //     return (
    //       <div
    //         key={auto.id}
    //         className="border rounded-lg bg-gray-100 hover:shadow-lg shadow-md"
    //       >
    //         <Link href={`/autos/${auto.slug}`}>
    //           <a>
    //             <div className="w-full bg-white">
    //               <div className="rounded-t-lg w-100 mx-auto">
    //                 <Image
    //                   className="rounded-t-lg"
    //                   src={auto.image[0].url}
    //                   layout="responsive"
    //                   width={500}
    //                   height={334}
    //                   alt={auto.title}
    //                 />
    //               </div>
    //             </div>
    //             <div className="pl-4 pr-4 pb-4 pt-4 rounded-lg">
    //               <div className="mt-1 font-semibold text-base leading-tight truncate text-gray-700">
    //                 {auto.title} - ${auto.price}
    //               </div>
    //             </div>
    //           </a>
    //         </Link>
    //       </div>
    //     );
    //   })}
    // </div>
  );
}
