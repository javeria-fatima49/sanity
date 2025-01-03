// import Image from "next/image";
// import { client } from "@/sanity/lib/client";
// import { urlFor } from "@/sanity/lib/image";
// // import Header from "./component/Header";
// export default async function Home() {
//   const query=`*[_type == "homepage"][0]{
//   heading,
//     paragraph,
//     buttonText,
//     image,
//     images
// }`
// const sanityData = await client.fetch(query)
// console.log("sanity Data:",sanityData);
//   return (
//     <div className="">
//       <div className="flex flex-col items-center lg:absolute lg:top-0 lg:left-1/2 lg:-translate-x-1/2 lg:translate-y-1/2 z-10">
//     <h1 className="text-black text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight mt-4 sm:mt-6">
//       FIND CLOTHES THAT MATCH YOUR STYLE
//     </h1>
//     <p className="text-black mt-2 sm:mt-4 text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed">
//       Browse through our diverse range of meticulously crafted garments,
//       designed to bring out your individuality and cater to your sense of
//       style.
//     </p>
//     <button className="mt-4 sm:mt-6 bg-black hover:bg-gray-900 text-white font-bold rounded-full w-36 sm:w-40 md:w-48 h-10 sm:h-12 md:h-14 text-sm sm:text-base md:text-lg">
//       Shop Now
//     </button>
//     <div className="flex mt-6 gap-4 justify-between items-center">
//       <div>
//         <h3 className="text-black text-xl font-bold">200+</h3>
//         <p className="text-black text-sm">International Brands</p>
//       </div>
//       <div>
//         <h3 className="text-black text-xl font-bold">2,000+</h3>
//         <p className="text-black text-sm">High-Quality Products</p>
//       </div>
//       <div>
//         <h3 className="text-black text-xl font-bold">30,000+</h3>
//         <p className="text-black text-sm">Happy Customers</p>
//       </div>
//     </div>
//   </div>
//       <Image
//       src={urlFor(sanityData.image).url()}
//       alt="responsive"
//       width={1600}
//       height={400}/>
//             <div>
//             {sanityData.images.map(() => (
//           <Image
//       src={urlFor(sanityData.images).url()}
//       alt="responsive"
//       width={90}
//       height={40}/>))}</div>
//       <h2 className="font-bold text-2xl">{sanityData.heading}</h2>
//       <p>{sanityData.paragraph}</p>
//       <button className="border-4">{sanityData.buttonText}</button>
      
//     </div>
//   );
// }









// import Image from "next/image";
// import { client } from "@/sanity/lib/client";
// import { urlFor } from "@/sanity/lib/image";

// export default async function Home() {
//   const query = `*[_type == "homepage"][0]{
//     heading,
//     paragraph,
//     buttonText,
//     image,
//     images,
//   }`;
//   const query = `*[_type == "newarrivals"][0]{
//    title,
//     image,
//     images,
//   }`;
//   const sanityData = await client.fetch(query);
//   console.log("sanity Data:", sanityData);

//   return (
//     <div>
//       <div className="flex flex-col items-center lg:absolute lg:top-0 lg:left-1/2 lg:-translate-x-1/2 lg:translate-y-1/2 z-10">
//         <h1 className="text-black text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight mt-4 sm:mt-6">
//           FIND CLOTHES THAT MATCH YOUR STYLE
//         </h1>
//         <p className="text-black mt-2 sm:mt-4 text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed">
//           Browse through our diverse range of meticulously crafted garments,
//           designed to bring out your individuality and cater to your sense of
//           style.
//         </p>
//         <button className="mt-4 sm:mt-6 bg-black hover:bg-gray-900 text-white font-bold rounded-full w-36 sm:w-40 md:w-48 h-10 sm:h-12 md:h-14 text-sm sm:text-base md:text-lg">
//           Shop Now
//         </button>
//         <div className="flex mt-6 gap-4 justify-between items-center">
//           <div>
//             <h3 className="text-black text-xl font-bold">200+</h3>
//             <p className="text-black text-sm">International Brands</p>
//           </div>
//           <div>
//             <h3 className="text-black text-xl font-bold">2,000+</h3>
//             <p className="text-black text-sm">High-Quality Products</p>
//           </div>
//           <div>
//             <h3 className="text-black text-xl font-bold">30,000+</h3>
//             <p className="text-black text-sm">Happy Customers</p>
//           </div>
//         </div>
//       </div>

//       {/* Main Image */}
//       <Image
//         src={urlFor(sanityData.image).url()}
//         alt="responsive"
//         width={1600}
//         height={400}
//       />

//       {/* Multiple Images */}
//       <div className="bg-black py-6 h-auto flex  justify-around">
//         {sanityData.images?.map((image: any, index: number) => (
//           <Image
//             key={index}
//             src={urlFor(image).url()}
//             alt={`image-${index}`}
//             width={100}
//             height={150}
            
//           />
//         ))}
//       </div>
// <h1 className="font-bold text-2xl text-white">{sanityData.title}</h1>
//       {/* Heading and Paragraph */}
//       {/* <div>
//       {sanityData.imagess?.map((image: any, index: number) => (
//           <Image
//             key={index}
//             src={urlFor(image).url()}
//             alt={`image-${index}`}
//             width={100}
//             height={150}
            
//           />
//         ))}
//       </div> */}
//       <h2 className="font-bold text-2xl">{sanityData.heading}</h2>
//       <p>{sanityData.paragraph}</p>
//       <button className="border-4">{sanityData.buttonText}</button>
//     </div>
//   );
// }




// import Image from "next/image";
// import { client } from "@/sanity/lib/client";
// import { urlFor } from "@/sanity/lib/image";

// export default async function Home() {
//   // Define two separate queries
//   const homepageQuery = `*[_type == "homepage"][0]{
//     heading,
//     paragraph,
//     buttonText,
//     image,
//     images,
//   }`;
  
//   const newArrivalsQuery = `*[_type == "newarrivals"][0]{
//     title,
//     image,
//     price,
//   }`;

//   // Fetch data for both queries
//   const homepageData = await client.fetch(homepageQuery);
//   const newArrivalsData = await client.fetch(newArrivalsQuery);

//   console.log("Homepage Data:", homepageData);
//   console.log("New Arrivals Data:", newArrivalsData); // Debugging line

//   return (
//     <div>
//       {/* Homepage Section */}
//       <div className="flex flex-col items-center lg:absolute lg:top-0 lg:left-1/2 lg:-translate-x-1/2 lg:translate-y-1/2 z-10">
//         <h1 className="text-black text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight mt-4 sm:mt-6">
//           FIND CLOTHES THAT MATCH YOUR STYLE
//         </h1>
//         <p className="text-black mt-2 sm:mt-4 text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed">
//           Browse through our diverse range of meticulously crafted garments,
//           designed to bring out your individuality and cater to your sense of
//           style.
//         </p>
//         <button className="mt-4 sm:mt-6 bg-black hover:bg-gray-900 text-white font-bold rounded-full w-36 sm:w-40 md:w-48 h-10 sm:h-12 md:h-14 text-sm sm:text-base md:text-lg">
//           Shop Now
//         </button>
//         <div className="flex mt-6 gap-4 justify-between items-center">
//           <div>
//             <h3 className="text-black text-xl font-bold">200+</h3>
//             <p className="text-black text-sm">International Brands</p>
//           </div>
//           <div>
//             <h3 className="text-black text-xl font-bold">2,000+</h3>
//             <p className="text-black text-sm">High-Quality Products</p>
//           </div>
//           <div>
//             <h3 className="text-black text-xl font-bold">30,000+</h3>
//             <p className="text-black text-sm">Happy Customers</p>
//           </div>
//         </div>
//       </div>

//       {/* Main Image */}
//       <Image
//         src={urlFor(homepageData.image).url()}
//         alt="homepage-responsive"
//         width={1600}
//         height={400}
//       />

//       {/* Multiple Images */}
//       <div className="bg-black py-6 h-auto flex justify-around">
//         {homepageData.images?.map((image: any, index: number) => (
//           <Image
//             key={index}
//             src={urlFor(image).url()}
//             alt={`image-${index}`}
//             width={100}
//             height={150}
//           />
//         ))}
//       </div>

//       {/* New Arrivals Section */}
//       <h1 className="font-bold text-2xl text-white">
//         {newArrivalsData?.title || "New Arrivals"}
//       </h1>
//       <div className="flex gap-4 justify-around">
//         {newArrivalsData?.image?.map((image: any, index: number) => (
//           <Image
//             key={index}
//             src={urlFor(image).url()}
//             alt={`new-arrival-image-${index}`}
//             width={450}
//             height={450}
//           />
//         ))}
//       </div>
//       <p className="text-white">Price: {newArrivalsData?.price}</p>

//       {/* Homepage Heading and Paragraph */}
//       <h2 className="font-bold text-2xl">{homepageData.heading}</h2>
//       <p>{homepageData.paragraph}</p>
//       <button className="border-4">{homepageData.buttonText}</button>
//     </div>
//   );
// }






import Image from "next/image";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";

// Define types for the data
type HomepageData = {
  heading: string;
  paragraph: string;
  buttonText: string;
  image: string;
  images: { _type: string; asset: { _ref: string } }[]; // Replace with your Sanity image type structure
};

type NewArrivalsData = {
  title: string;
  image: { _type: string; asset: { _ref: string } }[]; // Replace with correct structure if needed
  price: number;
};

export default async function Home() {
  // Define two separate queries
  const homepageQuery = `*[_type == "homepage"][0]{
    heading,
    paragraph,
    buttonText,
    image,
    images,
  }`;

  const newArrivalsQuery = `*[_type == "newarrivals"][0]{
    title,
    image,
    price,
  }`;

  // Fetch data for both queries
  const homepageData: HomepageData = await client.fetch(homepageQuery);
  const newArrivalsData: NewArrivalsData = await client.fetch(newArrivalsQuery);

  console.log("Homepage Data:", homepageData);
  console.log("New Arrivals Data:", newArrivalsData); // Debugging line

  return (
    <div>
      {/* Homepage Section */}
      <div className="flex flex-col items-center lg:absolute lg:top-0 lg:left-1/2 lg:-translate-x-1/2 lg:translate-y-1/2 z-10">
        <h1 className="text-black text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight mt-4 sm:mt-6">
          FIND CLOTHES THAT MATCH YOUR STYLE
        </h1>
        <p className="text-black mt-2 sm:mt-4 text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed">
          Browse through our diverse range of meticulously crafted garments,
          designed to bring out your individuality and cater to your sense of
          style.
        </p>
        <button className="mt-4 sm:mt-6 bg-black hover:bg-gray-900 text-white font-bold rounded-full w-36 sm:w-40 md:w-48 h-10 sm:h-12 md:h-14 text-sm sm:text-base md:text-lg">
          Shop Now
        </button>
        <div className="flex mt-6 gap-4 justify-between items-center">
          <div>
            <h3 className="text-black text-xl font-bold">200+</h3>
            <p className="text-black text-sm">International Brands</p>
          </div>
          <div>
            <h3 className="text-black text-xl font-bold">2,000+</h3>
            <p className="text-black text-sm">High-Quality Products</p>
          </div>
          <div>
            <h3 className="text-black text-xl font-bold">30,000+</h3>
            <p className="text-black text-sm">Happy Customers</p>
          </div>
        </div>
      </div>

      {/* Main Image */}
      {homepageData.image && (
        <Image
          src={urlFor(homepageData.image).url()}
          alt="homepage-responsive"
          width={1600}
          height={400}
        />
      )}

      {/* Multiple Images */}
      <div className="bg-black py-6 h-auto flex justify-around">
        {homepageData.images?.map((image, index) => (
          <Image
            key={index}
            src={urlFor(image).url()}
            alt={`image-${index}`}
            width={100}
            height={150}
          />
        ))}
      </div>

      {/* New Arrivals Section */}
      <h1 className="font-bold text-2xl text-white">
        {newArrivalsData?.title || "New Arrivals"}
      </h1>
      <div className="flex gap-4 justify-around">
        {newArrivalsData?.image?.map((image, index) => (
          <Image
            key={index}
            src={urlFor(image).url()}
            alt={`new-arrival-image-${index}`}
            width={450}
            height={450}
          />
        ))}
      </div>
      <p className="text-white">Price: {newArrivalsData?.price}</p>

      {/* Homepage Heading and Paragraph */}
      <h2 className="font-bold text-2xl">{homepageData.heading}</h2>
      <p>{homepageData.paragraph}</p>
      <button className="border-4">{homepageData.buttonText}</button>
    </div>
  );
}
