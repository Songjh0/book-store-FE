import React from "react";
import Footer from "../components/common/Footer";
import Header from "../components/common/Header";

interface LayoutProps {
  // 타입 지정 범위 : React Node > React Element > JSX Element 
  children: React.ReactNode; //React 허용 선언
}

function Layout({children} : LayoutProps) {
  return (
    <>
      <Header />
      <main>(children)</main>
      <Footer />
    </>
  )
}

export default Layout;