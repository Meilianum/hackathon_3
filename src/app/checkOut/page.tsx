// "use client";

// import { useState, useEffect } from "react";
// import Image from "next/image";
// import { getCartItems } from "@/app/button/button";
// import Link from "next/link";
// import { Product } from "@/type/products";
// import { urlFor } from "@/sanity/lib/image";
// import { CgChevronRight } from "react-icons/cg";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import products from "@/sanity/schemaTypes/products";
// import { client } from "@/sanity/lib/client";


// export default function CheckoutPage() {
//   const [cartItems, setCartItems] = useState<Product[]>([]);
//   const [discount, setDiscount] = useState<number>(0);
//   const [formValues, setFormValues] = useState({
//     firstName: "",
//     lastName: "",
//     address: "",
//     city: "",
//     zipCode: "",
//     phone: "",
//     email: "",
//   });

//   const [formErrors, setFormErrors] = useState({
//     firstName: false,
//     lastName: false,
//     address: false,
//     city: false,
//     zipCode: false,
//     phone: false,
//     email: false,
//   });

//   useEffect(() => {
//     setCartItems(getCartItems());
//     const appliedDiscount = localStorage.getItem("appliedDiscount");
//     if (appliedDiscount) {
//       setDiscount(Number(appliedDiscount));
//     }
//   }, []);

//   const subtotal = cartItems.reduce(
//     (total, item) => total + item.price * item.inventory,
//     0
//   );
//   const total = Math.max(subtotal - discount, 0);

//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setFormValues({
//       ...formValues,
//       [e.target.id]: e.target.value,
//     });
//   };

//   const validateForm = () => {
//     const errors = {
//       firstName: !formValues.firstName,
//       lastName: !formValues.lastName,
//       address: !formValues.address,
//       city: !formValues.city,
//       zipCode: !formValues.zipCode,
//       phone: !formValues.phone,
//       email: !formValues.email,
//     };
//     setFormErrors(errors);
//     return Object.values(errors).every((error) => !error);
//   };
  

//   const handlePlaceOrder = async () => {
//       if (validateForm()) {
//       localStorage.removeItem("appliedDiscount");
//       toast.success("Order placed successfully!");
//     } else {
//       toast.error("Please fill in all the fields.");
//     }
  

//     const orderData = {
//       _type: "order",
//       FirstName: formValues.firstName,
//       LastName: formValues.lastName,
//       address: formValues.address,
//       city: formValues.city,
//       zipCode: formValues.zipCode,
//       phone: formValues.phone,
//       email: formValues.email,
//       products: cartItems.map((item) => ({
//         _type: "reference",
//         _ref: item._id,
//       })),
//       total: total,
//       discount: discount,
//       orderDate: new Date().toISOString(), // Corrected the syntax
//     };
  
//     try {
//       await client.create(orderData); // Ensure await is used correctly
//       localStorage.removeItem("appliedDiscount");
//       console.log("Order placed successfully!");
//     } catch (error) {
//       console.error("Error placing order:", error);
//     }
  
  
//   return (
//     <div className="min-h-screen bg-gray-50">
//       {/* Toast Container */}
//       <div>
//         <ToastContainer position="top-center" autoClose={3000} />
//       </div>

//       {/* Breadcrumb */}
//       <div className="mt-6">
//         <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
//           <nav className="flex items-center gap-2 py-4">
//             <Link
//               href="/cart"
//               className="text-[#666666] hover:text-black transition text-sm"
//             >
//               Cart
//             </Link>
//             <CgChevronRight className="w-4 h-4 text-[#666666]" />
//             <span className="text-sm">Checkout</span>
//           </nav>
//         </div>
//       </div>

//       {/* Main Content */}
//       <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
//           {/* Order Summary */}
//           <div className="bg-white border rounded-lg p-6 space-y-4">
//             <h2 className="text-lg font-semibold mb-4">Order Summary</h2>
//             {cartItems.length > 0 ? (
//               cartItems.map((item) => (
//                 <div
//                   key={item._id}
//                   className="flex items-center gap-4 py-3 border-b"
//                 >
//                   <div className="w-16 h-16 rounded overflow-hidden">
//                     {item.image && (
//                       <Image
//                         src={urlFor(item.image).url()}
//                         alt={item.productName}
//                         width={64}
//                         height={64}
//                         className="object-cover w-full h-full"
//                       />
//                     )}
//                   </div>
//                   <div className="flex-1">
//                     <h3 className="text-sm font-medium">{item.productName}</h3>
//                     <p className="text-xs text-gray-500">
//                       Quantity: {item.inventory}
//                     </p>
//                   </div>
//                   <p className="text-sm font-medium">
//                     ${item.price * item.inventory}
//                   </p>
//                 </div>
//               ))
//             ) : (
//               <p className="text-sm text-gray-500">Your cart is empty.</p>
//             )}
//             <div className="text-right pt-4">
//               <p className="text-sm">
//                 Subtotal: <span className="font-medium">${subtotal}</span>
//               </p>
//               <p className="text-sm">
//                 Discount: <span className="font-medium">-${discount}</span>
//               </p>
//               <p className="text-lg font-semibold">
//                 Total: ${total.toFixed(2)}
//               </p>
//             </div>
//           </div>

//           {/* Billing Form */}
//           <div className="bg-white border rounded-lg p-6 space-y-6">
//             <h2 className="text-xl font-semibold">Billing Information</h2>
//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//               <div>
//                 <label htmlFor="firstName">First Name</label>
//                 <input
//                   id="firstName"
//                   placeholder="Enter your first name"
//                   value={formValues.firstName}
//                   onChange={handleInputChange}
//                   className="border"
//                 />
//                 {formErrors.firstName && (
//                   <p className="text-sm text-red-500">
//                     First name is required.
//                   </p>
//                 )}
//               </div>
//               <div>
//                 <label htmlFor="lastName">Last Name </label>
//                 <input
//                   id="lastName"
//                   placeholder="Enter your last name"
//                   value={formValues.lastName}
//                   onChange={handleInputChange}
//                 />
//                 {formErrors.lastName && (
//                   <p className="text-sm text-red-500">
//                     Last name is required.
//                   </p>
//                 )}
//               </div>
//               <div>
//               <label htmlFor="phone">Phone</label>
//               <input
//                 id="phone"
//                 placeholder="Enter your phone number"
//                 value={formValues.phone}
//                 onChange={handleInputChange}
//               />
//               {formErrors.phone && (
//                 <p className="text-sm text-red-500">Phone is required.</p>
//               )}
//             </div>
//             <div>
//               <label htmlFor="email">Email</label>
//               <input
//                 id="email"
//                 placeholder="Enter your email address"
//                 value={formValues.email}
//                 onChange={handleInputChange}
//               />
//               {formErrors.email && (
//                 <p className="text-sm text-red-500">Email is required.</p>
//               )}
//             </div>
//             </div>

//             <button
//               className="w-full h-12 bg-blue-500 hover:bg-blue-700 text-white"
//               onClick={handlePlaceOrder}
//             >
//               Place Order
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
// };


// //dddd
// "use client";
// import { useState, useEffect } from "react";
// import Image from "next/image";
// import { getCartItems } from "@/app/button/button";
// import Link from "next/link";
// import { Product } from "@/type/products";
// import { urlFor } from "@/sanity/lib/image";
// import { CgChevronRight } from "react-icons/cg";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import products from "@/sanity/schemaTypes/products";
// import { client } from "@/sanity/lib/client";

// export default function CheckOutPage() {
//   const [cartItems, setCartItems] = useState<Product[]>([]);
//   const [discount, setDiscount] = useState<number>(0);
//   const [formValues, setFormValues] = useState({
//     firstName: "",
//     lastName: "",
//     address: "",
//     city: "",
//     zipCode: "",
//     phone: "",
//     email: "",
//   });

//   const [formErrors, setFormErrors] = useState({
//     firstName: false,
//     lastName: false,
//     address: false,
//     city: false,
//     zipCode: false,
//     phone: false,
//     email: false,
//   });

//   useEffect(() => {
//     setCartItems(getCartItems());
//     const appliedDiscount = localStorage.getItem("appliedDiscount");
//     if (appliedDiscount) {
//       setDiscount(Number(appliedDiscount));
//     }
//   }, []);

//   const subtotal = cartItems.reduce(
//     (total, item) => total + item.price * item.inventory,
//     0
//   );
//   const total = Math.max(subtotal - discount, 0);

//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setFormValues({
//       ...formValues,
//       [e.target.id]: e.target.value,
//     });
//   };

//   const validateForm = () => {
//     const errors = {
//       firstName: !formValues.firstName,
//       lastName: !formValues.lastName,
//       address: !formValues.address,
//       city: !formValues.city,
//       zipCode: !formValues.zipCode,
//       phone: !formValues.phone,
//       email: !formValues.email,
//     };
//     setFormErrors(errors);
//     return Object.values(errors).every((error) => !error);
//   };

//   const handlePlaceOrder = async () => {
//     if (validateForm()) {
//       localStorage.removeItem("appliedDiscount");
//       toast.success("Order placed successfully!");

//       const orderData = {
//         _type: "order",
//         FirstName: !formValues.firstName,
//         LastName: !formValues.lastName,
//         address: !formValues.address,
//         city: !formValues.city,
//         zipCode: !formValues.zipCode,
//         phone: !formValues.phone,
//         email: !formValues.email,
//         products: cartItems.map((item) => ({
//           _type: "reference",
//           _ref: item._id,
//         })),
//         total: total,
//         discount: discount,
//         orderDate: new Date().toISOString(),
//       };

//       try {
//         await client.create(orderData);
//         localStorage.removeItem("appliedDiscount");
//         console.log("Order placed successfully!");
//       } catch (error) {
//         console.error("Error placing order:", error);
//       }
//     } else {
//       toast.error("Please fill in all the fields.");
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-50">
//       <div>
//         <ToastContainer position="top-center" autoClose={3000} />
//       </div>

//       <div className="mt-6">
//         <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
//           <nav className="flex items-center gap-2 py-4">
//             <Link href="/cart" className="text-[#666666] hover:text-black transition text-sm">
//               Cart
//             </Link>
//             <CgChevronRight className="w-4 h-4 text-[#666666]" />
//             <span className="text-sm">Checkout</span>
//           </nav>
//         </div>
//       </div>

//       <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
//           <div className="bg-white border rounded-lg p-6 space-y-4">
//             <h2 className="text-lg font-semibold mb-4">Order Summary</h2>
//             {cartItems.length > 0 ? (
//               cartItems.map((item) => (
//                 <div key={item._id} className="flex items-center gap-4 py-3 border-b">
//                   <div className="w-16 h-16 rounded overflow-hidden">
//                     {item.image && (
//                       <Image
//                         src={urlFor(item.image).url()}
//                         alt={item.productName}
//                         width={64}
//                         height={64}
//                         className="object-cover w-full h-full"
//                       />
//                     )}
//                   </div>
//                   <div className="flex-1">
//                     <h3 className="text-sm font-medium">{item.productName}</h3>
//                     <p className="text-xs text-gray-500">Quantity: {item.inventory}</p>
//                   </div>
//                   <p className="text-sm font-medium">${item.price * item.inventory}</p>
//                 </div>
//               ))
//             ) : (
//               <p className="text-sm text-gray-500">Your cart is empty.</p>
//             )}
//             <div className="text-right pt-4">
//               <p className="text-sm">
//                 Subtotal: <span className="font-medium">${subtotal}</span>
//               </p>
//               <p className="text-sm">
//                 Discount: <span className="font-medium">-${discount}</span>
//               </p>
//               <p className="text-lg font-semibold">
//                 Total: ${total.toFixed(2)}
//               </p>
//             </div>
//           </div>

//           <div className="bg-white border rounded-lg p-6 space-y-6">
//             <h2 className="text-xl font-semibold">Billing Information</h2>
//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//               <div>
//                 <label htmlFor="firstName">First Name</label>
//                 <input
//                   id="firstName"
//                   placeholder="Enter your first name"
//                   value={formValues.firstName}
//                   onChange={handleInputChange}
//                   className="border"
//                 />
//                 {formErrors.firstName && (
//                   <p className="text-sm text-red-500">First name is required.</p>
//                 )}
//               </div>
//               <div>
//                 <label htmlFor="lastName">Last Name </label>
//                 <input
//                   id="lastName"
//                   placeholder="Enter your last name"
//                   value={formValues.lastName}
//                   onChange={handleInputChange}
//                 />
//                 {formErrors.lastName && (
//                   <p className="text-sm text-red-500">Last name is required.</p>
//                 )}
//               </div>
//               <div>
//                 <label htmlFor="phone">Phone</label>
//                 <input
//                   id="phone"
//                   placeholder="Enter your phone number"
//                   value={formValues.phone}
//                   onChange={handleInputChange}
//                 />
//                 {formErrors.phone && <p className="text-sm text-red-500">Phone is required.</p>}
//               </div>
//               <div>
//                 <label htmlFor="email">Email</label>
//                 <input
//                   id="email"
//                   placeholder="Enter your email address"
//                   value={formValues.email}
//                   onChange={handleInputChange}
//                 />
//                 {formErrors.email && <p className="text-sm text-red-500">Email is required.</p>}
//               </div>
//               <div>
//                 <label htmlFor="Address">Address</label>
//                 <input
//                   id="Address"
//                   placeholder="Enter your  address"
//                   value={formValues.address}
//                   onChange={handleInputChange}
//                 />
//                 {formErrors.address && <p className="text-sm text-red-500">Addres </p>}
//               </div>
//               <div>
//                 <label htmlFor="city">CityName:</label>
//                 <input
//                   id="city"
//                   placeholder="Enter your city address"
//                   value={formValues.city}
//                   onChange={handleInputChange}
//                 />
//                 {formErrors.address && <p className="text-sm text-red-500">city  is required.</p>}
//               </div>
              
//               <div>
//                 <label htmlFor="zipcode">zipCode:</label>
//                 <input
//                   id="zipcode"
//                   placeholder="Enter your zipcode"
//                   value={formValues.zipCode}
//                   onChange={handleInputChange}
//                 />
//                 {formErrors.zipCode && <p className="text-sm text-red-500">zipCode.</p>}
//               </div>
             
//             </div>

//             <button
//               className="w-full h-12 bg-blue-500 hover:bg-blue-700 text-white"
//               onClick={handlePlaceOrder}
//             >
//               Place Order
//             </button>
//           </div>
//         </div>
//       </div>
//       </div>
//   );
// }


"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { getCartItems } from "@/app/button/button";
import Link from "next/link";
import { Product } from "@/type/products";
import { urlFor } from "@/sanity/lib/image";
import { CgChevronRight } from "react-icons/cg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { client } from "@/sanity/lib/client";

export default function CheckOutPage() {
  const [cartItems, setCartItems] = useState<Product[]>([]);
  const [discount, setDiscount] = useState<number>(0);
  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    zipCode: "",
    phone: "",
    email: "",
  });

  const [formErrors, setFormErrors] = useState({
    firstName: false,
    lastName: false,
    address: false,
    city: false,
    zipCode: false,
    phone: false,
    email: false,
  });

  useEffect(() => {
    setCartItems(getCartItems());
    const appliedDiscount = localStorage.getItem("appliedDiscount");
    if (appliedDiscount) {
      setDiscount(Number(appliedDiscount));
    }
  }, []);

  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.inventory,
    0
  );
  const total = Math.max(subtotal - discount, 0);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormValues({
      ...formValues,
      [e.target.id]: e.target.value,
    });
  };

  const validateForm = () => {
    const errors = {
      firstName: !formValues.firstName,
      lastName: !formValues.lastName,
      address: !formValues.address,
      city: !formValues.city,
      zipCode: !formValues.zipCode,
      phone: !formValues.phone,
      email: !formValues.email,
    };
    setFormErrors(errors);
    return Object.values(errors).every((error) => !error);
  };

  const handlePlaceOrder = async () => {
    if (validateForm()) {
      localStorage.removeItem("appliedDiscount");
      toast.success("Order placed successfully!");

      const orderData = {
        _type: "order",
        FirstName: formValues.firstName,
        LastName: formValues.lastName,
        address: formValues.address,
        city: formValues.city,
        zipCode: formValues.zipCode,
        phone: formValues.phone,
        email: formValues.email,
  
        products: cartItems.map((item) => ({
          _type: "reference",
          _ref: item._id,
        })),
        total: total,
        discount: discount,
        orderDate: new Date().toISOString(),
      };
      // console.log("Order Data: ", orderData)
      // console.log("Form Values: ", formValues); 
      try {
        await client.create(orderData);
        localStorage.removeItem("appliedDiscount");
        console.log("Order placed successfully!");
      } catch (error) {
        console.error("Error placing order:", error);
      }
    } else {
      toast.error("Please fill in all the fields.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div>
        <ToastContainer position="top-center" autoClose={3000} />
      </div>

      <div className="mt-6">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 py-4">
            <Link href="/cart" className="text-[#666666] hover:text-black transition text-sm">
              Cart
            </Link>
            <CgChevronRight className="w-4 h-4 text-[#666666]" />
            <span className="text-sm">Checkout</span>
          </nav>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white border rounded-lg p-6 space-y-4">
            <h2 className="text-lg font-semibold mb-4">Order Summary</h2>
            {cartItems.length > 0 ? (
              cartItems.map((item) => (
                <div key={item._id} className="flex items-center gap-4 py-3 border-b">
                  <div className="w-16 h-16 rounded overflow-hidden">
                    {item.image && (
                      <Image
                        src={urlFor(item.image).url()}
                        alt={item.name}
                        width={64}
                        height={64}
                        className="object-cover w-full h-full"
                      />
                    )}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-sm font-medium">{item.name}</h3>
                    <p className="text-xs text-gray-500">Quantity: {item.inventory}</p>
                  </div>
                  <p className="text-sm font-medium">${item.price * item.inventory}</p>
                </div>
              ))
            ) : (
              <p className="text-sm text-gray-500">Your cart is empty.</p>
            )}
            <div className="text-right pt-4">
              <p className="text-sm">
                Subtotal: <span className="font-medium">${subtotal}</span>
              </p>
              <p className="text-sm">
                Discount: <span className="font-medium">-${discount}</span>
              </p>
              <p className="text-lg font-semibold">
                Total: ${total.toFixed(2)}
              </p>
             
            </div>
          </div>

          <div className="bg-white border rounded-lg p-6 space-y-6">
            <h2 className="text-xl font-semibold">Billing Information</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="firstName">First Name</label>
                <input
                  id="firstName"
                  placeholder="Enter your first name"
                  value={formValues.firstName}
                  onChange={handleInputChange}
                  className="border"
                />
                {formErrors.firstName && (
                  <p className="text-sm text-red-500">First name is required.</p>
                )}
              </div>
              <div>
                <label htmlFor="lastName">Last Name</label>
                <input
                  id="lastName"
                  placeholder="Enter your last name"
                  value={formValues.lastName}
                  onChange={handleInputChange}
                  className="border"
                />
                {formErrors.lastName && (
                  <p className="text-sm text-red-500">Last name is required.</p>
                )}
              </div>
              <div>
                <label htmlFor="phone">Phone</label>
                <input
                  id="phone"
                  placeholder="Enter your phone number"
                  value={formValues.phone}
                  onChange={handleInputChange}
                  className="border"
                />
                {formErrors.phone && <p className="text-sm text-red-500">Phone is required.</p>}
              </div>
              <div>
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  placeholder="Enter your email address"
                  value={formValues.email}
                  onChange={handleInputChange}
                  className="border"
                />
                {formErrors.email && <p className="text-sm text-red-500">Email is required.</p>}
              </div>
              <div>
                <label htmlFor="address">Address</label>
                <input
                  id="address"
                  placeholder="Enter your address"
                  value={formValues.address}
                  onChange={handleInputChange}
                  className="border"
                />
                {formErrors.address && <p className="text-sm text-red-500">Address is required.</p>}
              </div>
              <div>
                <label htmlFor="city">CityName:</label>
                <input
                  id="city"
                  placeholder="Enter your city"
                  value={formValues.city}
                  onChange={handleInputChange}
                  className="border"
                />
                {formErrors.city && <p className="text-sm text-red-500">City is required.</p>}
              </div>
              <div>
                <label htmlFor="zipCode">Zip Code</label>
                <input
                  id="zipCode"
                  placeholder="Enter your zip code"
                  value={formValues.zipCode}
                  onChange={handleInputChange}
                  className="border"
                />
                {formErrors.zipCode && <p className="text-sm text-red-500">Zip code is required.</p>}
              </div>
            </div>

            <button
              className="w-full h-12 bg-blue-500 hover:bg-blue-700 text-white"
              onClick={handlePlaceOrder}
            >
              Place Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
