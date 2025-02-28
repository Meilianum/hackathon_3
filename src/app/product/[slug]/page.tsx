import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";
import Image from "next/image";

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
            Stock Level: {" "}
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
          experience. Whether you&apos;re shopping for quality, functionality, or value, this
          product is a perfect choice. Be sure to grab it while supplies last!
        </p>
      </div>
    </div>
  );
}
