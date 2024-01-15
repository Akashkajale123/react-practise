import React, { useContext } from "react";
import "./CSS/ShopCategory.css";
import { ShopContext } from "../context/ShopContext";
import dropdown_icon from "../components/Assests/dropdown_icon.png";
import Item from "../components/item/item";

const ShopCategory = (props) => {
  const { all_product } = useContext(ShopContext);

  // Check if all_product is undefined or null
  if (!all_product) {
    console.error("all_product is undefined or null");
    return null;
  }

  console.log(all_product);

  return (
    <div className="shop-category">
      <img src={props.banner} alt="" />
      <div className="shopcategory-indexSort">
        <p>
          <span>Showing 1-12</span> out of 36 products
        </p>
        <div className="shopcategory-sort">
          Sort by <img src={dropdown_icon} alt="" />
        </div>
      </div>
      <div className="shopcategory_products">
        {all_product
          .filter((item) => props.category === item.category)
          .map((item) => (
            <Item
              key={item.id} // Use a unique identifier as the key
              id={item.id}
              name={item.name}
              image={item.image}
              new_price={item.new_price}
              old_price={item.old_price}
            />
          ))}
      </div>
    </div>
  );
};

export default ShopCategory;
