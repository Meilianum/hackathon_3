"use client";
import React from 'react';
import Pic from '@/components/pic';
import TopPicker from '@/components/Top-Picker';
import OurBlog from '@/components/Our-Blog';
import OurInstagram from '@/components/Our-Instagram';
import Footer from '@/components/Footer';
import SingleProduct from '@/components/SingleProducts/SingleProduct';
import RelatedProducts from '@/components/Related Products/RelatedProducts';
import CartSidebar from '@/components/Cart-sidebar/Cart-sidebar';
import MyAccount from '@/components/My-Account/My-Account';
import Contact from '@/components/Contact/Contact';
import Blog from '@/components/Blog/blog';
import Product from '../app/Shop/page';
import Shop from '@/components/Shops/shop';
import CartPage from './cart/page';
import CheckOutPage from './checkOut/page';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Page() {
  return (
    <div>
      <Pic />
      <TopPicker />
      <OurBlog />
      <OurInstagram />
      <Shop />
      <Footer />
      <SingleProduct />
      <RelatedProducts />
      <CartSidebar />
      <MyAccount />
      <CheckOutPage />
      <CartPage />
      <Contact />
      <Blog />
      <Product />
      <ToastContainer />
    </div>
  );
}
