

// import { client } from "@/sanity/lib/client";
// import Link from "next/link";

// export default async function Header() {
//   const query=`*[_type == "header"][0]{
// title,
// links,
// }`
// const sanityData = await client.fetch(query)
// console.log("sanity Data:",sanityData);
//   return (
//     <div className="">

// <h2>{sanityData.title}</h2>
// <Link href='{sanityData.links}'> home</Link>
          
//     </div>
//   );
// }





// import { client } from "@/sanity/lib/client";
// import Link from "next/link";

// // Define the type for your fetched data
// type HeaderData = {
//   title: string;
//   links: string[];
// };

// export default async function Header() {
//   const query = `*[_type == "header"][0]{
//     title,
//     links
//   }`;

//   // Fetch data from Sanity
//   const sanityData: HeaderData = await client.fetch(query);
//   console.log("Sanity Data:", sanityData);

//   return (
//     <div className="flex justify-start p-6 gap-20">
//       <h2 className="text-3xl font-bold">{sanityData.title}</h2>

//       {/* Map through the links array */}
//       <nav className="pt-1">
//         <ul className="flex gap-6">
//           {sanityData.links.map((link: string, index: number) => (
//             <li key={index}>
//               <Link href={link}>{link}</Link>
//             </li>
//           ))}
//         </ul>
//       </nav>
//     </div>
//   );
// }







import { client } from "@/sanity/lib/client";
import Link from "next/link";
import { FiShoppingCart } from "react-icons/fi";
import { IoSearchOutline } from "react-icons/io5";

type HeaderData = {
  title: string;
  links: string[];
  searchPlaceholder?: string;
  showCartBadge?: boolean;
};

export default async function Header() {
  const query = `*[_type == "header"][0]{
    title,
    links,
    searchPlaceholder,
    showCartBadge
  }`;

  const sanityData: HeaderData = await client.fetch(query);

  return (
    <header className="flex items-center justify-between p-4 shadow-md">
      {/* Title */}
      <div className="text-4xl font-bold text-white">{sanityData.title}</div>

      {/* Links */}
      <nav className="flex space-x-4 text-sm font-medium text-white">
        {sanityData.links.map((link: string, index: number) => (
          <Link key={index} href={link} className="hover:underline">
            {link}
          </Link>
        ))}
      </nav>

      {/* Search Bar and Cart */}
      <div className="flex items-center space-x-4">
        {/* Search Bar */}
      
        <input
          type="text"
          placeholder={sanityData.searchPlaceholder || "Search..."}
          className="bg-gray-100 text-black px-3 py-2 rounded-r-md"
        />
  <IoSearchOutline className="bg-gray-100 text-black px-3 py-2 rounded-r-md"/>
        {/* Cart Icon */}
        <button className="relative">
          <FiShoppingCart size={24} className="text-gray-300" />
          {sanityData.showCartBadge && (
            <span className="absolute -top-1 -right-2 bg-red-500 text-white text-xs rounded-full px-2">
              4
            </span>
          )}
        </button>
      </div>
    </header>
  );
}
