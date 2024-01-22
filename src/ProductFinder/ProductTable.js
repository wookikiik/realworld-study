/**
 * Group by Array
 * @returns { field: list }
 */
Array.prototype.groupBy = function (fieldName) {
  return this.reduce((target, source) => {
    const field = source[fieldName]
    target[field] = target[field] ?? []
    target[field].push(source)

    return target
  }, {})
}

function ProductTable({ products, inStockOnly }) {
  const categories = products.groupBy('category')

  return (
    <table className="fruit-list">
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {Object.keys(categories).map((category, index) => {
          const rederer = []

          const categoryVisible = !inStockOnly || (inStockOnly && categories[category].filter(product => product.stocked).length > 0)
          if (categoryVisible) {
            rederer.push(
              <ProductCategoryRow
                key={index}
                category={category}
              />
            )
          }

          categories[category] && categories[category].map(product => {
            const productVisible = !inStockOnly || (inStockOnly && product.stocked)
            if (productVisible) {
              rederer.push(<ProductRow
                key={product.name}
                product={product}
                inStockOnly={inStockOnly}
              />)
            }
          })

          return rederer
        })}
      </tbody>
    </table>
  )
}

function ProductCategoryRow({ category, products, inStockOnly }) {
  return (
    <tr className="category">
      <th colSpan="2">{category}</th>
    </tr>
  )
}

function ProductRow({ product, inStockOnly }) {
  // TODO: apply color by stock status

  return (
    <tr className={ 'product ' + (!product.stocked && 'nostock') }>
      <td className="product-name">{product.name}</td>
      <td className="product-price">{product.price}</td>
    </tr>
  )
}

export default ProductTable
