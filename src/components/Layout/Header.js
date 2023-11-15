import React, { Fragment } from "react";
import SearchComponent from "./SearchComponent";
import HeaderCartButton from "./HeaderCartButton";
import cyberbooksImage from "../../assets/cyberbooks.jpg";
import classes from "./Header.module.css";

const Header = (props) => {
  return (
    <Fragment>
      <div className="bg-white p-4 shadow rounded flex">
        <header className={classes.header}>
          <h1 className="font-bold text-xl">Cyber Books</h1>
          <SearchComponent />
          <HeaderCartButton onClick={props.onShowCart} />
        </header>
      </div>

      <div className={classes["main-image"]}>
        <img
          className="w-full brightness-65 overflow-hidden"
          src={cyberbooksImage}
          alt="A differrent store full of cyber books"
        />
      </div>
    </Fragment>
  );
};

export default Header;
