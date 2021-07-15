import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";



function App() {
  const [items, setItems] = useState(itemData);
  const [scheme, setScheme] = useState(false);
  
  function handleSchemeClick(){
    setScheme((scheme) => !scheme)
  }
  // this data will be passed down to the ShoppingList as a prop
  console.log(items);

  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature
  const appClass = scheme ? "App dark" : "App light"

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={handleSchemeClick}>{appClass} Mode</button>
      </header>
      <ShoppingList items={items} />
    </div>
  );
}

export default App;
