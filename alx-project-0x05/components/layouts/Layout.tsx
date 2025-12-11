// components/layouts/Layout.tsx
import '../../app/global.css'
import React from "react";
// 💡 Corrected Import: Import the type from the centralized file
import { LayoutProps } from '../../interfaces'; 
import Footer from "./Footer";
import Header from "./Header";



// ❌ The local interface definition must be deleted.
// interface LayoutProps { 
//   children: ReactNode;
// }

const Layout: React.FC<LayoutProps> = ({ children }) => {
  
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;