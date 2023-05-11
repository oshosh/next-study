import { getProduct, getProducts } from '@/service/products';
import { notFound } from 'next/navigation';
export const revalidate = 3;

type Props = {
  params: {
    slug: string;
  };
};

export default async function ProductPage({ params: { slug } }: Props) {
  const product = await getProduct(slug);

  if (!product) {
    notFound();
  }

  return <h1>{product.name} 제품 설명 페이지</h1>;
}

export async function generateStaticParams() {
  const products = await getProducts();

  return products.map((product) => ({
    slug: product.id,
  }));
}
