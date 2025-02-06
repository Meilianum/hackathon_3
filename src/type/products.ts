// import { SanityImageSource } from "@sanity/image-url/lib/types/types";


// export interface Product {
//   name: string;
//   imagemage: SanityImageSource;
//     discount: number;
//   productName: any;
//   _id: string;
//   name: string;
//   _type : "product";
//   image? : {
//       asset : {
//           _ref : string;
//           _type : "image";
          
//       }
//   };
//   price : number;
//   description : string;
//   slug : {
//       type : "slug",
//       current : string;

//   },
// inventory : number
// }


import { SanityImageSource } from "@sanity/image-url/lib/types/types";

export interface Product {
  id: string;
    imagemage: SanityImageSource;
      discount: number;
    productName: any;
    _id: string;
    name: string;
    _type : "product";
    image? : {
        asset : {
            _ref : string;
            _type : "image";
          
        }
    };
    price : number;
    description : string;
    slug : {
        type : "slug",
        current : string;
  
    },
  inventory : number
  }