// export default {
//   name: 'product',
//   type: 'document',
//   title: 'Product',
//   fields: [
//     {
//       name: 'name',
//       type: 'string',
//       tittle: 'Name',
//     },
//     {
//       name: 'slug',
//       type: 'slug',
//       title: 'Slug',
//       options: {
//         source: 'name',
      
//       },
//     },
       
//     {
//       name: 'image',
//       type: 'image',
//       tittle: 'Image',
//       options: {
//         hotspot: true, // Enable image cropping
//       },
//     },
//     {
//       name: 'price',
//       type: 'number',
//       tittle: 'Price',
//     },
   
//     {
//       name: 'inventory',
//       type: 'number',
//       tittle: 'inventory',
//     },
//     {
//       name: 'discountPercentage',
//       type: 'number',
//       tittle: 'Discount Percentage',
//     },
//     {
//       name: 'isFeaturedProduct',
//       type: 'boolean',
//       tittle: 'Featured Product',
//     },
//     {
//       name: 'stockLevel',
//       type: 'number',
//       tittle: 'Stock Level',
//     },
//     {
//       name: 'category',
//       type: 'string',
//       tittle: 'Category',
//     },
//   ],
// };




export default {
  name: 'product',
  type: 'document',
  title: 'Product',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name',
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      options: {
        source: 'name',
      },
    },
    {
      name: 'image',
      type: 'image',
      title: 'Image',
      options: {
        hotspot: true, // Enable image cropping
      },
    },
    {
      name: 'price',
      type: 'number',
      title: 'Price',
    },
    {
      name: 'inventory',
      type: 'number',
      title: 'Inventory',
    },
    {
      name: 'discountPercentage',
      type: 'number',
      title: 'Discount Percentage',
    },
    {
      name: 'isFeaturedProduct',
      type: 'boolean',
      title: 'Featured Product',
    },
    {
      name: 'stockLevel',
      type: 'number',
      title: 'Stock Level',
    },
    {
      name: 'category',
      type: 'string',
      title: 'Category',
    },
  ],
};
