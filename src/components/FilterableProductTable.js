import { useState } from "react";

import ProductTable from "./ProductTable";
import SearchBar from "./SearchBar";
import products from "../data/product.json";
export default function FilterableProductTable() {
  const [filterText, setFilterText] = useState("Pumpkin");
  const [inStockOnly, setInStockOnly] = useState(true);

  return (
    <div className="table-container">
      <SearchBar
        filterText={filterText}
        inStockOnly={inStockOnly}
        onChangeText={setFilterText}
        onCheckInStock={setInStockOnly}
      />
      <ProductTable
        products={products}
        filterText={filterText}
        inStockOnly={inStockOnly}
      />
    </div>
  );
}
