import { faBell, faSearch ,faBars} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import userIcon from "../utils/user.png"
import Logo from "../utils/constants";
import { useDispatch } from "react-redux";
import { ToggleMenu } from "../Store/transactionSlice";

const NavBar = () => {
  const [focus, setFocus] = useState(false)
  const [user, setUser] = useState(false)
  const dispatch=useDispatch();
  const token=localStorage.getItem('token');
  const isFocus = () => {
    setFocus(true);
  };
  const fetchProfile=async()=>{
    try{
    const response = await fetch('/user', {
      method: "GET",
      headers: {
        "Authorization": `Bearer ${token}`,
      },
    });
  if (!response.ok) {
      throw new Error('Network response was not ok');
  }
  const json=await response.json();
  console.log(json)
  setUser(json);
  } catch (error) {
  console.error('Error fetching profile:', error);
}
   
  }


  useEffect(()=>{
    fetchProfile();
  },[])

  return (
    <div className="md:grid md:grid-cols-10 flex justify-between md:px-0 pl-2 items-center h-20 border-b-2 shadow-sm ">
      <div className="md:col-span-2  md:flex flex items-center md:mx-6 ">
        <h2 className="md:block hidden text-2xl font-sans font-bold">Dashboard</h2>
        <FontAwesomeIcon onClick={()=>dispatch(ToggleMenu())} className="md:hidden flex justify-center  w-6 h-10" icon={faBars}/>
        <img
            className="w-25 h-20 md:h-0 md:w-0 cursor-pointer"
            src={Logo}
            alt="Logo"
          />
      </div>
      <div className="md:col-span-1 "></div>
      <div className="md:col-span-7  flex ">
        <div className="  w-2/3 md:flex hidden   items-center  md:justify-center  ">
          <input
            onFocus={() => isFocus()}
            className={`border-y-2 border-l-2 w-[80%] h-12  px-4 rounded-l-3xl  focus:outline-none ${
              focus ? "border-[#000]":"border-[blueviolet]"
            }`}
            placeholder="Search"
          />
          <button
            className={`border-r-2 border-y-2 h-12 rounded-r-3xl focus:outline-none  ${
              focus ?  "border-[#000]":"border-[blueviolet]"
            } `}
          >
            <FontAwesomeIcon
              className="text-2xl px-3 self-center  active:text-[black]"
              color="blueviolet"
              icon={faSearch}
            />
          </button>
        </div>
        <div className=" md:w-1/3 w-1/4 flex justify-between">
          <FontAwesomeIcon
            className="text-3xl md:flex hidden self-center cursor-pointer hover:text-[black] text-[blueviolet]"
            icon={faBell}
          />
          <div className="w-3/4 flex justify-between cursor-pointer">
            <img
              className="md:w-16 md:h-16 w-10 h-10 m-auto"
              src={userIcon}
            />
            <span className="md:m-auto m-2 ">
              <h3 className=" font-bold text-lg">{user?.name}</h3>
              <h4 className="text-[gray] text-md">{user?.username}</h4>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
