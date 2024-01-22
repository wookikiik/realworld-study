import product from '../data/product.json'
import { useState } from "react"
import ProductTable from "./ProductTable"
import SearchBar from "./SearchBar"

function FilterableProductTable() {
  const [originProducts] = useState(product)
  const [filteredProducts, setFilteredProducts] = useState(originProducts)
  const [inStockOnly, setInStockOnly] = useState(false)

  return (
    <div>
      <SearchBar
        originProducts={originProducts}
        inStockOnly={inStockOnly}
        applyFilter={setFilteredProducts}
        applyInStockOnly={setInStockOnly}
      />
      <ProductTable
        products={filteredProducts}
        inStockOnly={inStockOnly}
      />
    </div>
  )
}

export default FilterableProductTable
