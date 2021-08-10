import React from "react";
import { useSelector,useDispatch } from "react-redux";
import useStyles from "./styledcard";
import Card from "@material-ui/core/Card";
import Button from "@material-ui/core/Button";
import VisibilityIcon from "@material-ui/icons/Visibility";
import IconButton from '@material-ui/core/IconButton';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import { addToCart ,loadCurrentProduct} from "../redux/actions/cartActions";
import { useHistory } from "react-router-dom";
import "./product.css";

const Product = () => {
   const dispatch = useDispatch()
  const history = useHistory();
  const classes = useStyles();
  const products = useSelector((state) => state.allProducts.products);
  
  const renderList = products.map((product) => {
    const { id, title, image, price, category } = product;
    const addProductToCart =()=>{
       dispatch(addToCart(id))
   }
    
    return (
      <Card className={classes.root} variant="outlined" key={id}>
        <div className="card-content">
          <div className="img-a">
            <img className="img" src={image} alt={title} />
          </div>
          <div className="cont">
            <div className="head">{title}</div>
            <div className="price">$ {price}</div>
            <div className="met">{category}</div>
          </div>
        </div>
        <div className="view-btn">
          <Button
            variant="contained"
            startIcon={<VisibilityIcon />}
            onClick={() => {
              history.push(`/product/${id}`);
              dispatch(loadCurrentProduct(product))
            }}
            style={{ background: "#035397", color: "#fff" }}
          >
            View
          </Button>
          <div className="add-to-cart-icon">
            <IconButton onClick={()=>{addProductToCart()}} style={{ background: "#035397", color: "#fff" }} aria-label="add to shopping cart">
        <AddShoppingCartIcon />
      </IconButton>
          </div>
          
        </div>
      </Card>
    );
  });

  return (
    <>
      {Object.keys(products).length === 0 ? (
        <div className="wait">Please wait... </div>
      ) : (
        renderList
      )}
    </>
  );
};


export default Product;
