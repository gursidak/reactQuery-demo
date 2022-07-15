import React from "react";
import { Route, Routes } from "react-router-dom";
import App from "../App";
import InvoiceDetails from "./InvoiceDetails";
import Invoices from "./Invoices";
import Nav from "./Nav";
import Posts from "./Posts";
import PostsRQ from "./PostsRQ";
// import Posts from "./Posts";

function Router() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/invoices" element={<Invoices />} />
        <Route path="/invoices/:id" element={<InvoiceDetails />} />
        <Route path="/postsrq" element={<PostsRQ />} />
        <Route path="/posts" element={<Posts />} />
      </Routes>
    </>
  );
}

export default Router;
