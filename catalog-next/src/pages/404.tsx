import Layout from "@/components/layout/Layout";
import { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

const NotFound: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>not found</title>
      </Head>
      <Image src='/error.png' alt="404" width={450} height={430}/>
      <div>404 page</div>
    </Layout>
  );
};

export default NotFound;
