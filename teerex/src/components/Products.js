import Filter from "./Filter";
import Header from "./Header";
import SearchField from "./searchField";
import * as React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Cards from "./cards";
import { useCart } from "./CartContext";
import "./Products.css";
import { useNavigate } from "react-router-dom";

import Grid from "@mui/material/Grid";

const Products = () => {
  const { items, setItems } = useCart();

  const [searchText, setSearchText] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [filters, setFilters] = React.useState({
    color: [],
    gender: [],
    price: [],
    type: [],
  });

  let searchResultLength = searchResult.length;

  const getData = async () => {
    try {
      let call = await axios.get(
        "https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/catalogue.json"
      );

      setItems(call.data);
    } catch (e) {
      console.log("could not load data");
    }
  };

  const handleSearch = (e) => {
    setSearchText(e.target.value);
  };

  const searchFunctionality = (search, items, setSearchResult) => {
    if (search === "") {
      setSearchResult([]);
    }

    if (search === null || search === "") return;

    const searchResult = [];
    const searchItem = search.toLowerCase();

    for (const product of items) {
      let a = product.name.toLowerCase();
      let b = product.color.toLowerCase();
      let c = product.type.toLowerCase();

      if (
        a.includes(searchItem) ||
        b.includes(searchItem) ||
        c.includes(searchItem)
      ) {
        searchResult.push(product);
      }
    }

    setSearchResult(searchResult);
    // setItems(searchResult);
  };

  //Filter

  let newFilterr = { ...filters };

  const handleInputChangeColor = (e) => {
    let colors = e.target.value;

    if (e.target.checked) {
      for (let ele of newFilterr["color"]) {
        if (ele.color === colors) return;
      }

      for (const product of items) {
        let a = product.color;

        if (a === colors) {
          newFilterr["color"].push(product);
        }
      }

      setFilters(newFilterr);
    } else {
      for (let i = 0; i < newFilterr["color"].length; i++) {
        let a = newFilterr["color"][i].color;
        if (a === colors) {
          newFilterr["color"].splice(i);
        }
      }
      setFilters(newFilterr);
    }
  };

  const handleInputChangeGender = (e) => {
    let genders = e.target.value;

    if (e.target.checked) {
      for (let ele of newFilterr["gender"]) {
        if (ele.gender === genders) return;
      }

      for (const product of items) {
        let a = product.gender;

        if (a === genders) {
          newFilterr["gender"].push(product);
        }
      }

      setFilters(newFilterr);
    } else {
      for (let i = 0; i < newFilterr["gender"].length; i++) {
        let a = newFilterr["gender"][i].gender;
        if (a === genders) {
          newFilterr["gender"].splice(i);
        }
      }
      setFilters(newFilterr);
    }
  };

  const handleInputChangePrice = (e) => {
    let prices = e.target.value;

    let arr = prices.split("-");
    let aa = parseInt(arr[0]);
    let bb = parseInt(arr[1]);
    console.log(arr, aa, bb);

    if (e.target.checked) {
      for (let ele of newFilterr["price"]) {
        if (ele.price >= aa && ele.price <= bb) return;
      }

      for (const product of items) {
        let a = product.price;
        if (aa === 450 && a >= aa) {
          newFilterr["price"].push(product);
        }
        if (a >= aa && a <= bb) {
          newFilterr["price"].push(product);
        }
      }

      setFilters(newFilterr);
    } else {
      for (let i = 0; i < newFilterr["price"].length; i++) {
        let a = newFilterr["price"][i].price;

        if (aa === 450 && a >= aa) {
          newFilterr["price"].splice(i);
        }
        if (a >= aa && a <= bb) {
          newFilterr["price"].splice(i);
        }
      }
      setFilters(newFilterr);
    }
  };

  const handleInputChangeType = (e) => {
    let types = e.target.value;

    if (e.target.checked) {
      for (let ele of newFilterr["type"]) {
        if (ele.type === types) return;
      }

      for (const product of items) {
        let a = product.type;

        if (a === types) {
          newFilterr["type"].push(product);
        }
      }

      setFilters(newFilterr);
    } else {
      for (let i = 0; i < newFilterr["type"].length; i++) {
        let a = newFilterr["type"][i].type;
        if (a === types) {
          newFilterr["type"].splice(i);
        }
      }
      setFilters(newFilterr);
    }
  };

  const { cartItems, setCartItems } = useCart();

  function handleAddToCart(product) {
    setCartItems((prevCartItems) => {
      let itemPresent = prevCartItems.find((item) => item.id === product.id);

      if (itemPresent) {
        alert("Item Already Added");
        return prevCartItems;
      } else {
        return [...prevCartItems, { ...product, quantity: 1 }];
      }
    });
  }

  useEffect(() => {
    searchFunctionality(searchText, items, setSearchResult);
  }, [searchText]);

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div>
        <Header />
      </div>

      <div id="products">
        <Grid container spacing={2}>
          <Grid item xs={2} sx={{ top: "9rem" }}>
            <Filter
              handleInputChangeColor={handleInputChangeColor}
              handleInputChangeGender={handleInputChangeGender}
              handleInputChangePrice={handleInputChangePrice}
              handleInputChangeType={handleInputChangeType}
            />
          </Grid>

          <Grid
            container
            fixed
            item
            xs={10}
            sx={{ position: "relative", top: "9rem", overFlow: "hidden" }}
          >
            <div>
              <SearchField
                searchValue={searchText}
                searchHandler={handleSearch}
                searchFuntionality={searchFunctionality}
              />
            </div>

            {searchText === "" ? (
              filters.color.length === 0 &&
              filters.gender.length === 0 &&
              filters.price.length === 0 &&
              filters.type.length === 0 ? (
                items.map((ele) => (
                  <Grid item xs={12} sm={6} md={4} lg={3}>
                    <Cards
                      product={ele}
                      handleAddToCart={() => handleAddToCart(ele)}
                    />
                  </Grid>
                ))
              ) : (
                filters.color
                  .concat(filters.gender, filters.price, filters.type)
                  .map((ele) => (
                    <Grid item xs={12} sm={6} md={4} lg={3}>
                      <Cards
                        product={ele}
                        handleAddToCart={() => handleAddToCart(ele)}
                      />
                    </Grid>
                  ))
              )
            ) : searchResultLength > 0 ? (
              searchResult.map((ele) => (
                <Grid item xs={12} sm={6} md={4} lg={3}>
                  <Cards
                    product={ele}
                    handleAddToCart={() => handleAddToCart(ele)}
                  />
                </Grid>
              ))
            ) : (
              <div id="emptyPage">
                <h1>No Products Found...</h1>
              </div>
            )}
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default Products;
