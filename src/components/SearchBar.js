export default function SearchBar({
  filterText,
  inStockOnly,
  onChangeText,
  onCheckInStock,
}) {
  return (
    <form className="search-bar">
      <input
        type="text"
        value={filterText}
        placeholder="Search..."
        onChange={(e) => onChangeText(e.target.value)}
      />
      <label>
        {" "}
        <input
          type="checkbox"
          checked={inStockOnly}
          onChange={(e) => onCheckInStock(e.target.checked)}
        />{" "}
        Only show products in stock{" "}
      </label>
    </form>
  );
}
