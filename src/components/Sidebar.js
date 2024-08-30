import React, { useState, useEffect } from "react";
import Logo from "../utils/pw.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBorderAll,
  faCreditCard,
  faDollar,
  faGear,
  faMoneyBillTransfer,
  faMoneyCheckDollar,
  faMultiply,
  faPiggyBank,
  faQuestion,
  faSignOut,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate, useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { ToggleMenu, ToggleView } from "../Store/transactionSlice";

const Sidebar = () => {
  const view = useSelector((store) => store.view.isView);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {id}  = useParams();
  
  const [selectedItem, setSelectedItem] = useState(id || "overview");

  const handleClick = (item) => {
    if (item === "overview") {
      dispatch(ToggleView());
    }
    setSelectedItem(item);
    if (item !== "logout") {
      navigate("/" + item);

    } 
    else {
      navigate("/");
    }
  };

  useEffect(() => {
    if (view) {
      setSelectedItem("transactions");
      navigate("/transactions");
    }
  }, [view, navigate]);

  const getClassForItem = (item) => {
    return selectedItem === item
      ? "cursor-pointer bg-[blueviolet] rounded-md text-white"
      : "OverallHover";
  };
  const hanldeLog=()=>{
    localStorage.removeItem("token");
    localStorage.removeItem("lastVisitedPage");
    navigate("/login", { replace: true });
  };

  return (
    <div className="md:flex md:flex-col  bg-white md:z-0 z-10  space-y-14 shadow-md  md:h-[700px] top-0 left-0 fixed  md:w-[16.66%]">
      <div>
        <div className="md:flex hidden h-20 mb-6">
          <img
            className="h-full w-full  cursor-pointer"
            src={Logo}
            alt="Logo"
          />
        </div>
        <div >
          <span className="flex items-center justify-between mx-5">
          <h3 className="font-merriweather text-lg font-bold my-1 mx-2 p-1">
            Menu
          </h3>
          <FontAwesomeIcon onClick={()=>dispatch(ToggleMenu())} className="md:hidden  h-8 w-8" icon={faMultiply}/>
          </span>
          <ul>
            <li
              onClick={() => handleClick("overview")}
              className={`font-semibold text-md font-sans my-4 mx-4 p-1 ${getClassForItem(
                "overview"
              )}`}
            >
              <FontAwesomeIcon className="mx-4" icon={faBorderAll} /> Overview
            </li>
            <li
              onClick={() => handleClick("income")}
              className={`font-semibold text-md font-sans my-4 mx-4 p-1 ${getClassForItem(
                "income"
              )}`}
            >
              <FontAwesomeIcon className="mx-4 mr-6" icon={faDollar} />
              Income
            </li>
            <li
              onClick={() => handleClick("expenses")}
              className={`font-semibold text-md font-sans my-4 mx-4 p-1 ${getClassForItem(
                "expenses"
              )}`}
            >
              <FontAwesomeIcon className="mx-4" icon={faMoneyCheckDollar} />{" "}
              Expenses
            </li>
            <li
              onClick={() => handleClick("savings")}
              className={`font-semibold text-md font-sans my-4 mx-4 p-1 ${getClassForItem(
                "savings"
              )}`}
            >
              <FontAwesomeIcon className="mx-4" icon={faPiggyBank} /> Savings
            </li>
            <li
              onClick={() => handleClick("transactions")}
              className={`font-semibold text-md font-sans my-4 mx-4 p-1 ${getClassForItem(
                "transactions"
              )}`}
            >
              <FontAwesomeIcon
                className="mx-4"
                icon={faMoneyBillTransfer}
              />{" "}
              Transactions
            </li>
            <li
              onClick={() => handleClick("billings")}
              className={`font-semibold text-md font-sans my-4 mx-4 p-1 ${getClassForItem(
                "billings"
              )}`}
            >
              <FontAwesomeIcon className="mx-4" icon={faCreditCard} /> Billings
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-merriweather text-lg font-bold my-1 mx-2 p-1">
            General
          </h3>
          <ul>
            <li
              onClick={() => handleClick("settings")}
              className={`font-semibold text-md font-sans my-4 mx-4 p-1 ${getClassForItem(
                "settings"
              )}`}
            >
              <FontAwesomeIcon className="mx-4" icon={faGear} /> Settings
            </li>
            <li
              onClick={() => handleClick("help")}
              className={`font-semibold text-md font-sans my-4 mx-4 p-1 ${getClassForItem(
                "help"
              )}`}
            >
              <FontAwesomeIcon className="mx-4" icon={faQuestion} /> Help
            </li>
          </ul>
        </div>
      </div>
      <div>
        <h3
          onClick={() =>hanldeLog()}
          className={`font-semibold text-lg font-merriweather my-4 mx-4 p-1 ${getClassForItem(
            "logout"
          )}`}
        >
          <FontAwesomeIcon className="mx-4" icon={faSignOut} /> Logout
        </h3>
      </div>
    </div>
  );
};

export default Sidebar;
