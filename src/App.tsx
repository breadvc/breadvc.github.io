import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Header } from "./components/Header";


function App() {

  const getRecipeList = () => {
    let recipes = [
      "italian_bread.md", "sub_sandwhich_rolls.md"
    ]

    return recipes.map((recipe) => <p>{recipe}</p>)
  }

  return (
    <div className="App">
      <Header></Header>
      {getRecipeList()}
    </div>
  );
}

export default App;
