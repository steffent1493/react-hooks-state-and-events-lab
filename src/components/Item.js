import React, { useState } from "react";


function Item({ name, category }) {
  const [cart, setCart] = useState(false)
  function addToCart(){
    setCart((cart) => !cart)
  }
  

  return (
    <li className={cart ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className={cart ? "remove" : "add"} onClick={addToCart}>{cart ? "Remove From" : "Add to"} Cart</button>
    </li>
  );
}

export default Item;
