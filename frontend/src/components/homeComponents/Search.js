import React, { useState, Fragment } from "react";
import Header from "../Header";
import MetaData from "../MetaData";

const Search = ({history}) => {
    const [keyword, setKeyword] = useState("");

    const searchSubmitHandler = (e) => {
      e.preventDefault();
      if (keyword.trim()) {
        history.push(`/products/${keyword}`);
      } else {
        history.push("/products");
      }
    };
  
    return (
      <Fragment>
          {/* <Header/> */}
        <MetaData title="Search A Product -- ECOMMERCE" />
        <form className="searchBox" onSubmit={searchSubmitHandler}>
          <input
            type="text"
            placeholder="Search a Product ..."
            onChange={(e) => setKeyword(e.target.value)}
          />
          <input type="submit" value="Search" />
        </form>
      </Fragment>
    );
  };

export default Search