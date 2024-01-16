import React, { createContext, useState } from "react";
import all_Product from "../components/Assests/all_product";

export const ShopContext = createContext(null);

const getDefaultCart = () => {
  let cart = {};
  for (let index = 0; index < all_Product.length + 1; index++) {
    cart[index] = 0;
  }
  return cart;
};

const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());
 
  const addToCart=(itemId)=>{
    setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
    console.log(cartItems)
  }

  const removeFromCart=(itemId)=>{
    setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
  }

  const getTotalCartAmount=()=>{
    let totalamount=0;
    for(const item in cartItems){
        if(cartItems[item]>0){
            let itemInfo = all_Product.find((product)=>product.id===Number(item))
            totalamount +=itemInfo.new_price * cartItems[item];
        }
        console.log(totalamount)
        return totalamount;
        
    }
  }

  const contextValue = {getTotalCartAmount:getTotalCartAmount, all_product: all_Product, cartItems: cartItems,addToCart:addToCart,removeFromCart:removeFromCart };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
