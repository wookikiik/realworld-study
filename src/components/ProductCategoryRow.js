export default function ProductCategoryRow({ category }) {
  return (
    <tr className="product-category-row">
      <td colSpan="3">{category}</td>
    </tr>
  );
}
