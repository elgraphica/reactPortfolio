import React from 'react';
import Image from '../assets/logoel.svg';

const Header = () => {
  return (
    <header className="py-8">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          {/* {logo} */}
          <a
            className="lg:flex-1 max-w-[420px]"
            style={{
              width: "220px",
              height: "100px",
            }}
            href="#"
          >
            <img src={Image.src} alt="logo" />
          </a>
          {/*button*/}
          <button className="btn btn-sm">Work With Me</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
