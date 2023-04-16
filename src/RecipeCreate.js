import React, { useState } from "react";

function RecipeCreate({addRecipe}) {
 
  let initialFormData ={
    name:"",
    cuisine:"",
    imageUrl:"",
    ingredients:"",
    preparation:""
  }

  const [formData, setFormData]= useState(initialFormData)

  function handleInput(event){
    setFormData({
      ...formData,
      [event.target.name]:event.target.value
    })
  }
  function handleFormSubmit(event){
    event.preventDefault();
    addRecipe(formData);
    setFormData(initialFormData);
  }
 
  // TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
  // TODO: Add the required input and textarea form elements.
  // TODO: Add the required submit and change handlers
  
  return (
    <form name="create" onSubmit={handleFormSubmit}>
      <table>
        <tbody>
          <tr>
            <td>
              <input type="text" id="name" name="name" value={formData.name} placeholder="Name" onChange={handleInput} required/>
            </td>
            <td>
              <input type="text" id="cuisine" name="cuisine" value={formData.cuisine} placeholder="Cuisine" onChange={handleInput} required/>
            </td>
            <td>
              <input type="url" id="photo" name="photo" value={formData.photo} placeholder="Image URL" onChange={handleInput} required/>
            </td>
            <td>
              <textarea id="ingredients" name="ingredients" value={formData.ingredients} placeholder="Ingredients" onChange={handleInput} required/>
            </td>
            <td>
              <textarea id="preparation" name="preparation" value={formData.preparation} placeholder="preparation" onChange={handleInput} required/>
            </td>
            <td>
              <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;