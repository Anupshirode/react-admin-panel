import React from "react";
import { Routes, Route } from "react-router-dom";
import Account from "../account/Account1";
import Dashboard from "../dashboard/Dashboard1";
import Login from "../login/Login1";
import Products from "../products/Products1";
const appRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />}></Route>
      <Route path="/dashboard" element={<Dashboard />}></Route>
      <Route path="/products" element={<Products />}></Route>
      <Route path="/account" element={<Account />}></Route>
    </Routes>
  );
};

export default appRoutes1;
