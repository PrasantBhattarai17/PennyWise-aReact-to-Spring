import React from "react";
import NavBar from "./NavBar";
import FinanceContainer from "./FinanceContainer";
import Sidebar from "./Sidebar";
import { createBrowserRouter, Route, Routes, Outlet } from "react-router-dom";
import Income from "../components/Menu/Income";
import Savings from "../components/Menu/Savings";
import Expenses from "../components/Menu/Expenses";
import Transactions from "../components/Menu/Transactions";
import Billings from "../components/Menu/Billings";
import Settings from "./general/settings";
import Help from "./general/Help";
import LoginPage from "./login/LoginPage";
import OTPPage from "./login/OTPPage";
import PrivateRoute from "./PrivateRoute";


const MainPage = () => {
  return (
      <div className="grid grid-cols-12">
        <div className="col-span-2 bg-[white]">
          <Routes>
            <Route path="/:id" element={<Sidebar />} />
          </Routes>
        </div>
        <div className="col-span-10">
          <NavBar />
          <Outlet />
        </div>
      </div>
  );
};

export const appRouter = createBrowserRouter([
  {
    path: "/login",
    element:<LoginPage />,
  },
  {
    path: "/",
    element: <LoginPage />,
  },
  {
    path: "/otppage",
    element: <OTPPage />,
  },
  {
    path: "/",
    element: (
      <PrivateRoute>
        <MainPage />
      </PrivateRoute>
    ),
    children: [
      {
        path: "/overview",
        element: <FinanceContainer />,
      },
      {
        path: "/income",
        element: <Income />,
      },
      {
        path: "/expenses",
        element: <Expenses />,
      },
      {
        path: "/savings",
        element: <Savings />,
      },
      {
        path: "/transactions",
        element: <Transactions />,
      },
      {
        path: "/billings",
        element: <Billings />,
      },
      {
        path: "/settings",
        element: <Settings />,
      },
      {
        path: "/help",
        element: <Help />,
      },
    ],
  },
]);

export default MainPage;
