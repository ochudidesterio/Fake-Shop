import React, { useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import {
  seletedProduct,
  removeSeletedProduct,
} from "../redux/actions/productActions";
import { addToCart } from "../redux/actions/cartActions";
import "./productdetail.css";
import Card from "@material-ui/core/Card";
import Button from "@material-ui/core/Button";

const ProductDetail = () => {
  const product = useSelector((state) => state.product);
  const { title, price, category, description, image } = product;
  const { productId } = useParams();
  const dispatch = useDispatch();
  console.log(product);

  const fetchProductDetail = async () => {
    const response = await axios
      .get(`https://fakestoreapi.com/products/${productId}`)
      .catch((err) => console.log(err));

    dispatch(seletedProduct(response.data));
  };
  useEffect(() => {
    if (productId && productId !== "") fetchProductDetail();
    // fetchAddedProduct()

    return () => {
      dispatch(removeSeletedProduct());
    };
  }, [productId]);

  return (
    <div>
      <h1>Product Detail</h1>
      <Card style={{ maxWidth: "80vw", margin: "auto", padding: "10px",marginTop:'100px',marginBottom:'20px' }}>
        {Object.keys(product).length === 0 ? (
          <div>...Loading</div>
        ) : (
          <div className="detail-container">
            <div className="detail-image">
              <img className="detail-img" src={image} alt="test" />
            </div>
            <div className="detail-desc">
              <div className="d-title">{title}</div>
              <div className="d-price">{price}</div>
              <div className="d-category">{category}</div>
              <div className="d-desc">{description}</div>
              <div className="add-to-cart-btn">
                <Button
                  variant="contained"
                  style={{
                    backgroundColor: "#035397",
                    color: "#FFF",
                    margin: "0 auto",
                  }}
                  onClick={()=>{dispatch(addToCart(productId))}}
                >
                  Add To Cart
                </Button>
              </div>
            </div>
          </div>
        )}
      </Card>
    </div>
  );
};

export default ProductDetail;
