import React from "react";
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <div className="container p-12 flex justify-between">
        <span>
        <Image
            src="/images/logo1.png"
            alt="hero image"
            className="absolute transform -translate-x-1 -translate-y-1/2 "
            width={150}
            height={100}
          />
        </span>
      
        <p className="text-slate-600">All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
