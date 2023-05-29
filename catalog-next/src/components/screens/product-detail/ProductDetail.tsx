import {FC} from 'react'
import { IProducts } from '@/services/items.services'
import Layout from '@/components/layout/Layout'

const ProductDetail: FC<IProducts> = ({product}) => {
  return (
    <Layout>
      <div>
        {product.title}
      </div>
      <div>
        {product.price}
      </div>
    </Layout>
  )
}

export default ProductDetail