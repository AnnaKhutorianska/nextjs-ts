import Layout from "@/components/layout/Layout";
import Home from "@/components/screens/home/Home";
import { IProducts, ItemService } from "@/services/items.services";
import { NextPage, GetServerSideProps, GetStaticProps } from "next";

const HomePage: NextPage<IProducts[]> = ({products}) => {
  return (
    <Layout>
      <Home products={products}/>
    </Layout>
  );
};

// export const getServerSideProps: GetServerSideProps<IProducts[]> = async () => {
//   const products = await ItemService.getAll()

//   return {
//     props: {products}
//   }
// }

export const getStaticProps: GetStaticProps<IProducts[]> = async () => {
  const products = await ItemService.getAll()

  return {
    props: {products},
    revalidate: 60
  }
}
export default HomePage;
