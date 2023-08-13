import Image from 'next/image';
// import { notFound, redirect } from 'next/navigation';
import { redirect } from 'next/navigation';
import GoProductButton from '@/components/GoProductButton';
import { getProduct, getProducts } from '@/service/products';

export const revalidate = 3;

type Props = {
  params: {
    slug: string;
  };
};

export default async function ProductPage({ params: { slug } }: Props) {
  const product = await getProduct(slug);

  if (!product) {
    redirect('/products');
    // notFound();
  }

  return (
    <>
      <h1>{product.name} 제품 설명 페이지</h1>
      <Image
        src={`/images/${product.image}`}
        alt={product.name}
        width={300}
        height={300}
        priority
      />
      <GoProductButton />
    </>
  );
}

export async function generateStaticParams() {
  const products = await getProducts();

  return products.map((product) => ({
    slug: product.id,
  }));
}
