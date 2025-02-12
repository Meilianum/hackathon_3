import React from 'react';
import Image from 'next/image';

function CartSidebar() {
  return (
    <div className="relative">
      <Image
        src="/images/Cart Sidebar.svg"
        alt="Cart Sidebar"
        width={1440}  // مناسب width سیٹ کی
        height={3107} // مناسب height سیٹ کی
        layout="intrinsic" // امیج کا سائز برقرار رکھنے کے لیے
      />
    </div>
  );
}

export default CartSidebar;
