import "./App.css";
import product from "./data/product.json"
import { useState } from 'react';

function FilterableProductTable() {
 return; 
}

function SearchBar() {
  return;
}

function ProductTable() {
  return;
}

function ProductCategoryRow() {
  return;
}

function ProductRow() {
  const result = product.reduce((acc, curr) => {  
    const { category } = curr;                       
    if (acc[category]) acc[category].push(curr);  
    else acc[category] = [curr];             
    return acc;                         
  }, {});

  console.log(result);
  
  return (Object.keys(result).map((cate, index) => {
   <li key={index}>
      {cate}
    </li>
  }));
}

function App() {
  return (
    <div className="App">
      <div className="container">
        <ProductRow />
      </div>;
    </div>
  );
}

export default App;
