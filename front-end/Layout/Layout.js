import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
function Layout({ children, topic }) {
  return (
    <>
      <Navbar topic={topic} />
      <div className="container mx-auto max-w-6xl md:px-4 px-2 lg:p-0 no-underline" style={{'padding-top':160}}>
        {children}
      </div>
      <Footer />
    </>
  );
}

export default Layout;
