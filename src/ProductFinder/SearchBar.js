export default function SearchBar({
  filterText,
  inStockOnly,
  onSearchTextChange,
  onInStockChange,
}) {
  return (
    <div className='search-bar'>
      <input
        className='search-text'
        type='text'
        placeholder='search'
        value={filterText}
        onChange={(e) => onSearchTextChange(e.target.value)}
      />
      <label>
        <input
          className='stock-checkbox'
          type='checkbox'
          checked={inStockOnly}
          onChange={(e) => onInStockChange(e.target.checked)}
        />
        In Stock only
      </label>
    </div>
  );
}
