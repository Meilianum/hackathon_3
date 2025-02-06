// import { client } from "@/sanity/lib/client";
// import { groq } from "next-sanity";
// import Image from "next/image";
// import Link from "next/link";

// interface Product {
//   id: string;
//   name: string;
//   slug: string;
//   image: string | null;
//   price: number;
//   description: string;
//   discountPercentage: number;
//   isFeaturedProduct: boolean;
//   stockLevel: number;
//   category: string;
// }

// // Fetch a single product by slug
// async function getProduct(slug: string): Promise<Product | null> {
//   try {
//     return await client.fetch(
//       groq`*[_type == "product" && slug.current == $slug][0]{
//         "id": _id,
//         "name": name,
//         "slug": slug.current,
//         "image": image.asset->url,
//         "price": price,
//         "description": description,
//         "discountPercentage": discountPercentage,
//         "isFeaturedProduct": isFeaturedProduct,
//         "stockLevel": stockLevel,
//         "category": category
//       }`,
//       { slug }
//     );
//   } catch (error) {
//     console.error("Error fetching product:", error);
//     return null;
//   }
// }

// // Generate static params for dynamic routing
// export async function generateStaticParams() {
//   try {
//     const products: { slug: string }[] = await client.fetch(
//       groq`*[_type == "product"]{
//         "slug": slug.current
//       }`
//     );

//     return products.map((product) => ({
//       slug: product.slug,
//     }));
//   } catch (error) {
//     console.error("Error generating static params:", error);
//     return [];
//   }
// }

// // Product Page Component
// export default async function ProductPage({ params }: { params: { slug: string } }) {
//   const product = await getProduct(params.slug);

//   if (!product) {
//     return (
//       <div className="text-center text-gray-600">
//         <h1 className="text-2xl font-bold">Product not found</h1>
//         <p>Please check the URL or browse other products.</p>
//       </div>
//     );
//   }

//   return (
//     <div className="max-w-7xl mx-auto px-4 py-8">
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
//         {/* Product Image */}
//         <div className="aspect-square">
//           {product.image ? (
//             <Image
//               className="rounded-lg shadow-md"
//               src={product.image}
//               alt={product.name}
//               width={500}
//               height={500}
//             />
//           ) : (
//             <div className="w-full h-full bg-gray-200 rounded-lg flex items-center justify-center text-gray-500">
//               No image available
//             </div>
//           )}
//         </div>

//         {/* Product Details */}
//         <div>
//           <h1 className="text-3xl font-extrabold text-gray-800 mb-4">{product.name}</h1>
//           <p className="text-gray-600 text-lg mb-4">{product.description}</p>
//           <p className="text-2xl font-bold text-gray-800 mb-2">${product.price}</p>
//           {product.discountPercentage > 0 && (
//             <p className="text-red-500 text-lg mb-4">
//               Discount: {product.discountPercentage}%
//             </p>
//           )}
//           <p className="text-gray-600">
//             Stock Level:{" "}
//             {product.stockLevel > 0 ? (
//               <span className="text-green-600">In Stock ({product.stockLevel})</span>
//             ) : (
//               <span className="text-red-600">Out of Stock</span>
//             )}
//           </p>
//         </div>
//       </div>

//       <div className="mt-12">
//         <h2 className="text-3xl font-bold text-gray-800 mb-4">Why Choose This Product?</h2>
//         <p className="text-lg text-gray-600 leading-relaxed">
//           Our {product.name} is crafted with precision and designed to provide the ultimate
//           experience. Whether you're shopping for quality, functionality, or value, this
//           product is a perfect choice. Be sure to grab it while supplies last!
//         </p>
//       </div>

//       {/* Example of Product Recommendations */}
//        <div className="mt-12">
//         <h3 className="text-2xl font-bold text-gray-800 mb-4">You May Also Like</h3>
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//           {/* Replace this with a dynamic list of products */}
//           {["/images/Group 18.svg", "/images/Group 19.svg", "/images/Group 14.png", "/images/Group 18.png"].map((item) => (
//             <Link
//             key={item}
//             href={`/product1/sample-product-${item}`}
//             className="block bg-white shadow-md rounded-lg p-4"
//           >
//             <div className="w-full aspect-square bg-gray-200 rounded-lg mb-4"></div>
//             <h4 className="text-lg font-bold text-gray-800">Sample Product {item}</h4>
//             <p className="text-gray-600">$19.99</p>
//           </Link>
          
//           ))}
//         </div> 
//       </div> 
//     // </div>
//   );
// }


import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";
import Image from "next/image";
import Link from "next/link";

interface Product {
  id: string;
  name: string;
  slug: string;
  image: string | null;
  price: number;
  description: string;
  discountPercentage: number;
  isFeaturedProduct: boolean;
  stockLevel: number;
  category: string;
}

// Fetch a single product by slug
async function getProduct(slug: string): Promise<Product | null> {
  try {
    return await client.fetch(
      groq`*[_type == "product" && slug.current == $slug][0]{
        "id": _id,
        "name": name,
        "slug": slug.current,
        "image": image.asset->url,
        "price": price,
        "description": description,
        "discountPercentage": discountPercentage,
        "isFeaturedProduct": isFeaturedProduct,
        "stockLevel": stockLevel,
        "category": category
      }`,
      { slug }
    );
  } catch (error) {
    console.error("Error fetching product:", error);
    return null;
  }
}

// Generate static params for dynamic routing
export async function generateStaticParams() {
  try {
    const products: { slug: string }[] = await client.fetch(
      groq`*[_type == "product"]{
        "slug": slug.current
      }`
    );

    return products.map((product) => ({
      slug: product.slug,
    }));
  } catch (error) {
    console.error("Error generating static params:", error);
    return [];
  }
}

// Product Page Component
export default async function ProductPage({ params }: { params: { slug: string } }) {
  const product = await getProduct(params.slug);

  if (!product) {
    return (
      <div className="text-center text-gray-600">
        <h1 className="text-2xl font-bold">Product not found</h1>
        <p>Please check the URL or browse other products.</p>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Product Image */}
        <div className="aspect-square">
          {product.image ? (
            <Image
              className="rounded-lg shadow-md"
              src={product.image}
              alt={product.name}
              width={500}
              height={500}
              priority
            />
          ) : (
            <div className="w-full h-full bg-gray-200 rounded-lg flex items-center justify-center text-gray-500">
              No image available
            </div>
          )}
        </div>

        {/* Product Details */}
        <div>
          <h1 className="text-3xl font-extrabold text-gray-800 mb-4">{product.name}</h1>
          <p className="text-gray-600 text-lg mb-4">{product.description}</p>
          <p className="text-2xl font-bold text-gray-800 mb-2">${product.price}</p>
          {product.discountPercentage > 0 && (
            <p className="text-red-500 text-lg mb-4">
              Discount: {product.discountPercentage}%
            </p>
          )}
          <p className="text-gray-600">
            Stock Level:{" "}
            {product.stockLevel > 0 ? (
              <span className="text-green-600">In Stock ({product.stockLevel})</span>
            ) : (
              <span className="text-red-600">Out of Stock</span>
            )}
          </p>
        </div>
      </div>

      <div className="mt-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Why Choose This Product?</h2>
        <p className="text-lg text-gray-600 leading-relaxed">
          Our {product.name} is crafted with precision and designed to provide the ultimate
          experience. Whether you're shopping for quality, functionality, or value, this
          product is a perfect choice. Be sure to grab it while supplies last!
        </p>
      </div>

      {/* Example of Product Recommendations */}
      <div className="mt-12">
        <h3 className="text-2xl font-bold text-gray-800 mb-4">You May Also Like</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Replace this with a dynamic list of products */}
          {["/images/images (1).jpeg", "/images/images (7).jpeg", "/images/images (6).jpeg", "/images/images (3).jpeg"].map((item, index) => (
            <Link
              key={index}
              href={`/product1/sample-product-${index}`}
              className="block bg-white shadow-md rounded-lg p-4"
            >
              <div className="w-full aspect-square bg-gray-200 rounded-lg mb-4 relative">
                <Image
                  src={item}
                  alt={`Sample Product ${index + 1}`}
                  width={300}
                  height={300}
                  className="rounded-lg"
                />
              </div>
              <h4 className="text-lg font-bold text-gray-800">Sample Product {index + 1}</h4>
              <p className="text-gray-600">$19.99</p>
            </Link>
          ))}
        </div>
       
             
        </div>
          {/* Example of Product Recommendations */}
      <div className="mt-12">
        <h3 className="text-2xl font-bold text-gray-800 mb-4">You May Also Like</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Replace this with a dynamic list of products */}
          {["/images/images (15).jpeg", "/images/images (9).jpeg", "/images/images (11).jpeg", "/images/images (13).jpeg"].map((item, index) => (
            <Link
              key={index}
              href={`/product1/sample-product-${index}`}
              className="block bg-white shadow-md rounded-lg p-4"
            >
              <div className="w-full aspect-square bg-gray-200 rounded-lg mb-4 relative">
                <Image
                  src={item}
                  alt={`Sample Product ${index + 1}`}
                  width={300}
                  height={300}
                  className="rounded-lg"
                />
              </div>
              <h4 className="text-lg font-bold text-gray-800">Sample Product {index + 1}</h4>
              <p className="text-gray-600">$19.99</p>
            </Link>
          ))}
        </div>
       
             
        </div>
      </div>
     
   
  );
}
