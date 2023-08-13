import Link from 'next/link';
import MeowArticle from '@/components/MeowArticle';
import { getProducts, Product } from '@/service/products';

type Props = {
  products: Product[];
};
export default function SSGPage({ products }: Props) {
  return (
    <>
      <h1>제품 소 페이지!</h1>
      <ul>
        {products.map(({ id, name }, index) => (
          <li key={index}>
            <Link href={`/products/${id}`}>{name}</Link>
          </li>
        ))}
      </ul>
      <MeowArticle></MeowArticle>
    </>
  );
}

export async function getStaticProps() {
  const products = await getProducts();
  return {
    props: { products },
    revalidate: 3, // isr
  };
}
