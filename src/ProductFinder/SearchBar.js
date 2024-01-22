function SearchBar({ originProducts, inStockOnly, applyFilter, applyInStockOnly }) {
  function searchTextChange(e) {
    const filteredProducts = originProducts.filter(product => {
      return product.name.toLowerCase().indexOf(e.target.value.toLowerCase()) >= 0
    }, {})

    applyFilter(filteredProducts)
  }

  function inStockOnlyChange() {
    applyInStockOnly(!inStockOnly)
  }

  return (
    <div className="search-bar">
        <input
          className="search-text"
          type="text"
          placeholder="search"
          onChange={searchTextChange}
        />
        <label>
          <input
            className="stock-checkbox"
            type="checkbox"
            checked={inStockOnly}
            onChange={inStockOnlyChange}
          />
          In Stock only
        </label>
    </div>
  )
}

export default SearchBar
