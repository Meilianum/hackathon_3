import React from 'react';
import Image from 'next/image';  // Importing Next.js Image component

const About = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Image at the top of the page */}
      <div className="relative mb-8">
        <Image 
          src="/images/ana2.avif" // Path to your image
          alt="Furniture Store" 
          width={1500} 
          height={500} 
          className="rounded-lg shadow-lg"
          style={{ objectFit: 'cover' }} 
        />
      </div>

      <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">About Us</h1>
      <p className="text-center text-xl text-teal-600 mb-12">Why Visit Us?</p>

      <section className="bg-gray-100 p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-semibold text-gray-900 mb-6">Welcome to Our Furniture Store!</h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          At [FurnitureStoreName], we believe that your home should reflect your unique style and comfort. Our mission is to provide high-quality furniture that meets both your aesthetic and functional needs. Whether you&#39;re looking for a cozy sofa for your living room or a stylish dining table, we have everything you need to make your space feel like home.
        </p>

        {/* Image section for why choose us */}
        <h3 className="text-2xl font-semibold text-teal-600 mt-8 mb-4">Why Choose Us?</h3>
        <ul className="list-none space-y-4 mb-8">
          <li className="flex items-center text-lg text-gray-700">
            <div className="w-12 h-12 bg-teal-600 rounded-full flex justify-center items-center mr-4">
              <Image src="/images/Group 18.svg" alt="Quality" width={50} height={50} />
            </div>
            <span>🛋️ <strong>Top-Quality Furniture</strong> – We offer a wide range of carefully curated furniture pieces built to last.</span>
          </li>
          <li className="flex items-center text-lg text-gray-700">
            <div className="w-12 h-12 bg-teal-600 rounded-full flex justify-center items-center mr-4">
              <Image src="/images/Group 16.svg" alt="Affordable Prices" width={50} height={50} />
            </div>
            <span>💰 <strong>Affordable Prices</strong> – Get the best value for your money without compromising on quality.</span>
          </li>
          <li className="flex items-center text-lg text-gray-700">
            <div className="w-12 h-12 bg-teal-600 rounded-full flex justify-center items-center mr-4">
              <Image src="/images/Group 17.svg" alt="Fast Delivery" width={50} height={50} />
            </div>
            <span>🚚 <strong>Fast &amp; Free Delivery</strong> – We ensure quick delivery right to your doorstep, so you can enjoy your new furniture sooner.</span>
          </li>
          <li className="flex items-center text-lg text-gray-700">
            <div className="w-12 h-12 bg-teal-600 rounded-full flex justify-center items-center mr-4">
              <Image src="/images/Group 15.svg" alt="Sustainability" width={50} height={50} />
            </div>
            <span>🌍 <strong>Sustainable Choices</strong> – We are committed to offering eco-friendly furniture options that are kind to the planet.</span>
          </li>
        </ul>

        <p className="text-lg text-gray-700 leading-relaxed mb-8">
          Explore our wide selection of products and see how easy it is to transform your living space with stylish and functional furniture.
        </p>

        <h3 className="text-2xl font-semibold text-teal-600 mb-4">Our Promise</h3>
        <p className="text-lg text-gray-700 leading-relaxed">
          We guarantee a hassle-free shopping experience and top-notch customer service. With our easy-to-navigate website and knowledgeable staff, we make sure you find the perfect piece that fits your needs and budget.
        </p>
      </section>
    </div>
  );
};

export default About;
