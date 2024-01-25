export default function ProductRow({ product }) {
  const productRowStyle = ["product-row"];
  if (!product.stocked) {
    productRowStyle.push("out-of-stock");
  }

  return (
    <tr className={productRowStyle.join(" ")}>
      <td colSpan="2">{product.name}</td>
      <td>{product.price}</td>
    </tr>
  );
}
