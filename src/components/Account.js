import React from "react";
import { Link } from "react-router-dom";
import BottomBar from "./BottomBar.js";

const Account = () => {
  return (
    <div>
      <Link to="/about">
        <p>About</p>
      </Link>

      <BottomBar />
    </div>
  );
};

export default Account;
