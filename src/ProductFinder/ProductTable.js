const groupBy = (arr, fieldName) => {
  return arr.reduce((target, source) => {
    const field = source[fieldName];
    target[field] = target[field] ?? [];
    target[field].push(source);

    return target;
  }, {});
};
const filterByText = (product, filterText) =>
  product.name.toLowerCase().includes(filterText.toLowerCase());
const filterByStock = (product, inStockOnly) =>
  !inStockOnly || (inStockOnly && product.stocked);

export default function ProductTable({
  originProducts,
  filterText,
  inStockOnly,
}) {
  const filterdProducts = originProducts.filter(
    (product) =>
      filterByText(product, filterText) && filterByStock(product, inStockOnly)
  );
  const categories = groupBy(filterdProducts, 'category');

  const categoryRenderer = Object.keys(categories).map((category, index) => {
    const rederer = [];

    rederer.push(<ProductCategoryRow key={index} category={category} />);

    const products = categories[category];
    products &&
      products.forEach((product) => {
        rederer.push(
          <ProductRow
            key={product.name}
            product={product}
            inStockOnly={inStockOnly}
          />
        );
      });

    return rederer;
  });

  return (
    <table className='fruit-list'>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>{categoryRenderer}</tbody>
    </table>
  );
}

function ProductCategoryRow({ category }) {
  return (
    <tr className='category'>
      <th colSpan='2'>{category}</th>
    </tr>
  );
}

function ProductRow({ product }) {
  const stockClassName = ['product', !product.stocked ? 'nostock' : ''];

  return (
    <tr className={stockClassName.join(' ')}>
      <td className='product-name'>{product.name}</td>
      <td className='product-price'>{product.price}</td>
    </tr>
  );
}
