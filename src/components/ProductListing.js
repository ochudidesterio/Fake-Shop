import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import Product from "./Product";
import { Grid } from "@material-ui/core";
import { setProducts } from "../redux/actions/productActions";
import useStyles from "./style";
import "./productlisting.css";

const ProductListing = () => {
  //  const product = useSelector(state => state)
  const dispatch = useDispatch();

  const classes = useStyles();

  const fetchAllProducts = async () => {
    const response = await axios
      .get("https://fakestoreapi.com/products")
      .catch((err) => console.log(err));

    dispatch(setProducts(response.data));
  };
  useEffect(() => {
    fetchAllProducts();
  }, []);

  return (
    <div className="product-container">
      <Grid className={classes.mainContainer} container alignItems="stretch">
        <Product />
      </Grid>
    </div>
  );
};


export default ProductListing;
