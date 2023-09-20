import React,{useState} from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {

  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature

  const [darkTheme, setDarkTheme] = useState(false)
  return (
    <div className={darkTheme ? "App dark" : "App light"}>
      <header>
        <h2>Shopster</h2>
        <button  onClick={() => setDarkTheme((darkTheme) => !darkTheme)}>{(darkTheme && "Dark Mode") || "Light Mode"}</button>

      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
