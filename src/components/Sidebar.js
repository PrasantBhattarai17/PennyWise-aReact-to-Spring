import React, { useState } from "react";
import Logo from "../utils/pw.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBorderAll,
  faCreditCard,
  faDollar,
  faGear,
  faMoneyBillTransfer,
  faMoneyCheckDollar,
  faPiggyBank,
  faQuestion,
  faSignOut,
} from "@fortawesome/free-solid-svg-icons";

const Sidebar = () => {
  const [selectedItem, setSelectedItem] = useState("overview");
  const handleClick = (item) => {
    setSelectedItem(item);
  };
  const getClassForItem = (item) => {
    return selectedItem == item
      ? "cursor-pointer bg-[blueviolet] rounded-md text-white"
      : "OverallHover";
  };
  return (
    <div className="flex flex-col space-y-32 shadow-md ">
      <div>
        <div className=" flex h-20 border-b-2 mb-6">
          <img
            className=" h-full w-full cursor-pointer"
            src={Logo}
            alt="Logo"
          />
        </div>
        <div>
          <div>
            <h3 className="font-merriweather text-lg  font-bold my-1 mx-2 p-1">
              Menu
            </h3>
            <ul>
              <li
                onClick={() => handleClick("overview")}
                className={`font-semibold text-md font-sans my-4 mx-4 p-1 ${getClassForItem(
                  "overview"
                )} `}
              >
                <FontAwesomeIcon className="mx-4" icon={faBorderAll} /> Overview
              </li>
              <li
                onClick={() => handleClick("income")}
                className={`font-semibold text-md font-sans my-4 mx-4 p-1   ${getClassForItem(
                  "income"
                )} `}
              >
                <FontAwesomeIcon className="mx-4 mr-6" icon={faDollar} />
                Income
              </li>
              <li
                onClick={() => handleClick("expenses")}
                className={`font-semibold text-md font-sans my-4 mx-4 p-1 ${getClassForItem(
                  "expenses"
                )} `}
              >
                <FontAwesomeIcon className="mx-4" icon={faMoneyCheckDollar} />{" "}
                Expenses
              </li>
              <li
                onClick={() => handleClick("savings")}
                className={`font-semibold text-md font-sans my-4 mx-4 p-1  ${getClassForItem(
                  "savings"
                )} `}
              >
                <FontAwesomeIcon className="mx-4" icon={faPiggyBank} /> Savings
              </li>
              <li
                onClick={() => handleClick("transactions")}
                className={`font-semibold text-md font-sans my-4 mx-4 p-1 ${getClassForItem(
                  "transactions"
                )}  `}
              >
                <FontAwesomeIcon className="mx-4" icon={faMoneyBillTransfer} />{" "}
                Transactions
              </li>
              <li
                onClick={() => handleClick("billings")}
                className={`font-semibold text-md font-sans my-4 mx-4 p-1 ${getClassForItem(
                  "billings"
                )} `}
              >
                <FontAwesomeIcon className="mx-4" icon={faCreditCard} />{" "}
                Billings
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-merriweather text-lg  font-bold my-1 mx-2 p-1">
              General
            </h3>
            <ul>
              <li
                onClick={() => handleClick("settings")}
                className={`font-semibold text-md font-sans my-4 mx-4 p-1 ${getClassForItem(
                  "settings"
                )}`}
              >
                {" "}
                <FontAwesomeIcon className="mx-4" icon={faGear} />
                settings
              </li>
              <li
                onClick={() => handleClick("help")}
                className={`font-semibold   text-md font-sans my-4 mx-4 p-1 ${getClassForItem(
                  "help"
                )}`}
              >
                {" "}
                <FontAwesomeIcon className="mx-4" icon={faQuestion} />
                help
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div>
        <h3
          onClick={() => handleClick("logout")}
          className={`font-semibold text-lg font-merriweather my-4 mx-4 p-1 ${getClassForItem(
            "logout"
          )}`}
        >
          {" "}
          <FontAwesomeIcon className="mx-4" icon={faSignOut} />
          logout
        </h3>
      </div>
    </div>
  );
};

export default Sidebar;
