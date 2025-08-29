import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import "./ProductList.css"   

function ProductList() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then(res => res.json())
      .then(data => setProducts(data.products))
  }, [])

  return (
    <div className="container">
      <h1>Product Catalog</h1>
      <p className="subtitle">Discover amazing products</p>
      <div className="grid">
        {products.map(p => (
          <div className="card" key={p.id}>
            <img src={p.thumbnail} alt={p.title} />
            <h3>{p.title}</h3>
            <p className="brand">{p.brand}</p>
            <p className="desc">{p.description.slice(0, 60)}...</p>
            <div className="price-row">
              <span className="price">${p.price}</span>
              <span className="discount">-{p.discountPercentage}%</span>
            </div>
            <Link to={`/product/${p.id}`} className="btn">
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProductList
