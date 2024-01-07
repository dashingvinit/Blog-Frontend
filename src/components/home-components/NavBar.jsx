import React from 'react';
import { Link } from 'react-scroll';
import { FaBars, FaTimes } from 'react-icons/fa';
import { useState } from 'react';
import { RxDotFilled } from 'react-icons/rx';

const NavBar = () => {
  const [nav, setNav] = useState(false);
  const links = [
    {
      id: 1,
      link: 'Home',
    },
    {
      id: 2,
      link: 'Service',
    },
    {
      id: 3,
      link: 'Classes',
    },
    {
      id: 4,
      link: 'Contact',
    },
    {
      id: 5,
      link: 'Blog',
    },
    {
      id: 6,
      link: 'About Us',
    },
  ];

  const rectangleStyle = {
    width: '1000px',
    height: '30px',
    border: '0.5px solid black',
    borderRadius: '100px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  return (
    <div className="flex justify-start items-center w-full h-20 px-4 text-black fixed">
      <div>
        <h1 className="text-2xl font-signature ml-2">Brogrammers</h1>
      </div>
      <div className="center-rectangle" style={rectangleStyle}>
        <ul className="flex">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize font-medium text-black-500 hover:scale-105 duration-200">
              <button>
                <RxDotFilled />
              </button>

              <Link to={link} smooth duration={500}>
                {link}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden">
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-500">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize py-6 text-4xl">
              <Link
                onClick={() => setNav(!nav)}
                to={link}
                smooth
                duration={500}>
                {link}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NavBar;