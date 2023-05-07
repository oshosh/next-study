import { getProduct, getProducts } from '@/service/products';
import { notFound } from 'next/navigation';

type Props = {
  params: {
    slug: string;
  };
};

function Pants({ params: { slug } }: Props) {
  const product = getProduct(slug);

  if (!product) {
    notFound();
  }

  return <h1>{product} 제품 설명 페이지</h1>;
}

export default Pants;

export function generateStaticParams() {
  const products = getProducts();

  return products.map((product) => ({
    slug: product,
  }));
}
