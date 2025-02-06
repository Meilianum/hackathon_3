// import { Layout, Radio } from "lucide-react"
// import {title} from "process"

// import { User } from "lucide-react";

// export default {
//     name: "order",
//     title: "Order",
//     type: "document",
//     fields: [
//         {
//             name: "FirstName",
//             title: "First Name",
//             type: "string",
//         },
//         {
//             name: "LastName",
//             title: "Last Name",
//             type: "string",
//         },
//         {
//             name: "email",
//             title: "Email",
//             type: "string",
//         }
//         ,
//         {
//             name: "address",
//             title: "Address",
//             type: "string",
//         },
//         {
//             name: "city",
//             title: "City",
//             type: "string",
//         },
//         {
//             name: "zipCode",
//             title: "Zip Code",
//             type: "string",
//         },
//         {
//             name: "phone",
//             title: "Phone",
//             type: "string",
//         },
//         {
//             name: "password",
//             title: "password",
//             type: "string",
//         },
//         {
//             name: "cartItemes",
//             title: "cartTItems",
//             type: "array",
//             of: [{ type: "reference", to: { type: "product" } }],
//         },
//         {
//             name: "totalPrice",
//             title: "Total Price",
//             type: "number",
//         },
       
//         {
//             name: "status",
//             title: "Order Status",
//             type: "string",
//             option: {
// list: [
//                     {title:"Pending", value:"Pending"},
//                     {title:"Completed", value:"Completed"},
//                     {title:"Cancelled", value:"Cancelled"},
//                 ],
//                 Layout:'radio',//optionally , change to drowoupdown if you prefer a droupdawn
//                },
//               initialValue :'Pending'//Default value

//             }
//         ]
//     }


// export default {
//     name: "order",
//     title: "Order",
//     type: "document",
//     fields: [
//       {
//         name: "FirstName",
//         title: "First Name",
//         type:  "document"
//       },
//       {
//         name: "LastName",
//         title: "Last Name",
//         type: "string",
//       },
//       {
//         name: "email",
//         title: "Email",
//         type: "string",
//       },
//       {
//         name: "address",
//         title: "Address",
//         type: "string",
//       },
//       {
//         name: "city",
//         title: "City",
//         type: "string",
//       },
//       {
//         name: "zipCode",
//         title: "Zip Code",
//         type: "string",
//       },
//       {
//         name: "phone",
//         title: "Phone",
//         type: "string",
//       },
//       {
//         name: "cartItems", // Fixing the field name from cartItemes to cartItems
//         title: "Cart Items",
//         type: "array",
//         of: [{ type: "reference", to: { type: "product" } }],
//       },
//       {
//         name: "totalPrice",
//         title: "Total Price",
//         type: "number",
//       },
//     ],
//   };




export default {
    name: "order",
    title: "Order",
    type: "document",
    fields: [
      {
        name: "firstName",
        title: "First Name",
        type: "string",
      },
      {
        name: "lastName",
        title: "Last Name",
        type: "string",
      },
      {
        name: "email",
        title: "Email",
        type: "string",
      },
      {
        name: "address",
        title: "Address",
        type: "string",
      },
      {
        name: "city",
        title: "City",
        type: "string",
      },
      {
        name: "zipCode",
        title: "Zip Code",
        type: "string",
      },
      {
        name: "phone",
        title: "Phone",
        type: "string",
      },
      {
        name: "password",
        title: "Password",
        type: "string",
      },
      {
        name: "cartItems",
        title: "Cart Items",
        type: "array",
        of: [{ type: "reference", to: { type: "product" } }],
      },
      {
        name: "totalPrice",
        title: "Total Price",
        type: "number",
      },
      {
        name: "status",
        title: "Order Status",
        type: "string",
        options: {
          list: [
            { title: "Pending", value: "Pending" },
            { title: "Completed", value: "Completed" },
            { title: "Cancelled", value: "Cancelled" }
          ],
          layout: 'radio' // optionally, change to 'dropdown' if you prefer a dropdown
        },
        initialValue: "Pending"
      }
    ]
  };
  