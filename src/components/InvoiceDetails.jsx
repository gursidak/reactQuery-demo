import React from "react";
import { Link } from "react-router-dom";

const InvoiceDetails = () => {
  return (
    <div>
      <Link to={'/invoices'} >Back</Link>
      <br/>
      <Link to={'/'} >
          Home
      </Link>
      <h1>InvoiceDetails</h1>
    </div>
  );
};

export default InvoiceDetails;
