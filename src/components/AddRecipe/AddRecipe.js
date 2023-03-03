import React from "react";
import "./AddRecipe.css";


const AddRecipe = (props) => {
  const nameRecipeRef = React.useRef();
  const servingRef = React.useRef();
  const imageUrlRef = React.useRef();

  const newRecipeRef = (event) => {
    event.preventDefault();

    const name = event.target.elements.name.value;
    const serving = event.target.elements.serving.value;
    const imageUrl = event.target.elements.image.value;

    props.setNewRecipe({
      ...props.newRecipe,
      name,
      serving,
      imageUrl,
    });
    props.addRecipes(event);
  };

  return (
    <div>
      <h1>Add new recipe</h1>
      <form onSubmit={(event) => newRecipeRef(event)}>
        <fieldset>
          <p>Recipe Name</p>
          <label>
            <input
              ref={nameRecipeRef}
              type="text"
              name="name"
              id="name"
            ></input>
          </label>
        </fieldset>
        <fieldset>
          <p>Serving</p>
          <label>
            <input
              ref={servingRef}
              type="number"
              name="serving"
              id="serving"
            ></input>
          </label>
        </fieldset>
        <fieldset>
          <p>Image</p>
          <label>
            <input
              ref={imageUrlRef}
              type="text"
              name="image"
              id="image"
            ></input>
          </label>
        </fieldset>
        <button type="submit">Add Recipe</button>
      </form>
    </div>
  );
};

export default AddRecipe;
