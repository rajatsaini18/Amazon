
import Head from "next/head";
import Header from "../components/Header";
import Banner from "../components/Banner";
import ProductFeed from "../components/ProductFeed";



export default function Home({ products }) {
  return (
    <div className="bg-gray-300">
      <Head>
        <title>Amazon Intern Project</title>
      </Head>
      <Header/>

      <main className="max-w-screen-2xl mx-auto bg-gray-300  ">

        {/*Banner */}
        <Banner/>

        {/*Product feed */}
        <ProductFeed products={products} />


      </main>
    </div>
  );
}


export async function getServerSideProps(context)
{
  const products = await fetch("https://fakestoreapi.com/products").then(
    (res) => res.json() 
    );
     

  return {
    props:{
      products,
    },
  };
}

