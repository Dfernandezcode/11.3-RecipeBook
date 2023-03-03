import React from "react";
import "./App.css";
import AddRecipe from "./components/AddRecipe/AddRecipe";



const API_URL = "http://localhost:4000/recipes/"

function App() {
  const [newRecipe, setNewRecipe] = React.useState({
    name: "",
    serving: 0,
    imageUrl: "",
    ingredients: [],
  });
  console.log(newRecipe);

  const addRecipes = (event) => {
    event.preventDefault();
    fetch(API_URL, {
      method: "POST",
      body: JSON.stringify(newRecipe),
      headers: { "Content-type": "application/json" },
    })
      .then(response => response.json())
      .then((data) => {
        setNewRecipe({
          name: "",
          serving: 0,
          imageUrl: "",
          ingredients: [],
        });
      });
  };

  return (
    <div className="App">
      <AddRecipe
        newRecipe={newRecipe}
        setNewRecipe={setNewRecipe}
        addRecipes={addRecipes}
      ></AddRecipe>
    </div>
  );
}

export default App;
