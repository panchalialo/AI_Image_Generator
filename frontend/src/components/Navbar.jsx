import React from 'react'
import { logo_white } from "../assets";
import { Link } from 'react-router-dom';


const Navbar = () => {
  return (
    <>
     <header className="w-full flex justify-between items-center bg-slate-900 sm:px-8 px-4 py-4 border-b border-slate-700 bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900">
        <Link to="/">
          <img
            src={logo_white}
            alt="logo"
            className="w-28 object-contain"
          ></img>
        </Link>
        <Link to="/Create-post">
          <button
            type="button"
            className="text-white bg-gradient-to-r from-purple-600  to-sky-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-full text-sm px-5 py-2.5 text-center"
          >
            Create Post
          </button>
        </Link>
      </header>
    </>
  )
}

export default Navbar