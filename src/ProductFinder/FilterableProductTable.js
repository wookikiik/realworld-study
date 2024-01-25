import products from '../data/product.json';
import { useState } from 'react';
import ProductTable from './ProductTable';
import SearchBar from './SearchBar';

export default function FilterableProductTable() {
  const [filterText, setFilterText] = useState('');
  const [inStockOnly, setInStockOnly] = useState(false);

  return (
    <div>
      <SearchBar
        filterText={filterText}
        inStockOnly={inStockOnly}
        onSearchTextChange={setFilterText}
        onInStockChange={setInStockOnly}
      />
      <ProductTable
        originProducts={products}
        filterText={filterText}
        inStockOnly={inStockOnly}
      />
    </div>
  );
}
