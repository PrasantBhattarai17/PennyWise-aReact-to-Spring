import { faBell, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";

const NavBar = () => {
  const [focus, setFocus] = useState(false)
  const token=localStorage.getItem('token');
  const isFocus = () => {
    setFocus(true);
  };
  const fetchProfile=async()=>{
    const response = await fetch('/', {
      method: "GET",
      headers: {
        "Authorization": `Bearer ${token}`,
      },
    });
    const json=await response.json();
    return json;
  }


  useEffect(()=>{
    fetchProfile();
  },[])

  return (
    <div className="grid grid-cols-10 h-20 border-b-2 shadow-sm ">
      <div className="col-span-2 flex items-center mx-6">
        <h2 className="text-2xl font-sans font-bold">Dashboard</h2>
      </div>
      <div className="col-span-1 "></div>
      <div className="col-span-7 flex">
        <div className="  w-2/3 flex items-center justify-center  ">
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
        <div className=" w-1/3 flex justify-between">
          <FontAwesomeIcon
            className="text-3xl self-center cursor-pointer hover:text-[black] text-[blueviolet]"
            icon={faBell}
          />
          <div className="w-3/4 flex justify-between cursor-pointer">
            <img
              className="w-16 h-16 m-auto"
              src="https://avatars.githubusercontent.com/u/122468711?v=4"
            />
            <span className="m-auto p-4">
              <h3 className=" font-semibold text-md">Prasant Bhattarai</h3>
              <h4 className="text-[gray] text-md">@prasantesp17</h4>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
