import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

function ProductDetail() {
  const { id } = useParams()
  const [product, setProduct] = useState(null)

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then(res => res.json())
      .then(data => setProduct(data))
  }, [id])

  if (!product) return <p>Loading...</p>
  return (
    <div>
      <h2>{product.title}</h2>
      <p>{product.description}</p>
      <p><b>Price:</b> ${product.price}</p>
      <img src={product.thumbnail} alt={product.title} width="200" />
    </div>
  )
}
export default ProductDetail
