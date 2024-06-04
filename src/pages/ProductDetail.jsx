import ProductDetails from '@/feature/productList/components/ProductDetails';
import { useParams } from 'react-router-dom'

const ProductDetail = () => {
    const { id } = useParams();
    console.log(id)
  return (
    <ProductDetails />
  )
}

export default ProductDetail