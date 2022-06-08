import React, { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faBars, faTimes,} from "@fortawesome/free-solid-svg-icons"
import CustomLink from "../CustomLink/CustomLink";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../Firebase/firebase.init";
import { signOut } from "firebase/auth";
import { Link } from "react-router-dom";

function Header() {
    const [open, setOpen] = useState(false);
    const [user] = useAuthState(auth);
    const handleSignOut = () => {
        signOut(auth);
  }
  
  const menuList = <>
    <CustomLink to='/services'>Services</CustomLink>
    <CustomLink to='/checkout'>Checkout</CustomLink>
    <CustomLink to='/blogs'>Blogs</CustomLink>
    <CustomLink to='/about'>About</CustomLink>
    {
      user ? <button onClick={handleSignOut}>Sign Out</button>
      :
      <CustomLink to='/login'>Login</CustomLink>
    }
  </>
  
  return (
    <div className="bg-slate-600">
      <div className="flex items-center h-14 px-2 max-w-7xl mx-auto justify-between   text-white relative z-50">
      <div className="h-7"><Link to='/home'>WesTen Photography</Link></div>
      <div className="flex gap-4 ml-10 items-center hidden md:flex">
            {menuList}
      </div>
      <FontAwesomeIcon
        icon={open ? faTimes : faBars}
        onClick={() => setOpen(!open)}
        className="text-white w-6 h-6 cursor-pointer md:hidden"
      />
      {open && (
        <div className="bg-slate-600 absolute top-full left-0 flex flex-col w-full pb-8 md:hidden">
            <div className=" flex gap-4 flex-col items-center text-xl">
               {menuList}
            </div>
        </div>
      )}
    </div>
    </div>
  )
}

export default Header;