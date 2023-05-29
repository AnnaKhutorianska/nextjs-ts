import ProductDetail from "@/components/screens/product-detail/ProductDetail";
import { ItemService } from "@/services/items.services";
import { GetStaticPaths, NextPage } from "next";
import { useRouter } from "next/router";

const ProductPage: NextPage = ({product}) => {
  const {} = useRouter()
  
  return <ProductDetail product={product}/>
};

export const getStaticPaths: GetStaticPaths = async () => {
  const products = await ItemService.getAll()

  return {
    paths: products.map(product => ({
      params: {
        id: product.id.toString()
      }
    })),
    fallback: 'blocking'
  }
}

export const getStaticProps: GetStaticProps<IProducts> = async ({params}) => {

  console.log(params);

  const product = await ItemService.getById(params.id)


  return {
    props: {product},
    revalidate: 60
  }
}

export default ProductPage;
