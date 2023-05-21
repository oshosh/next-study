import { getProducts } from '@/service/products';
import Link from 'next/link';
import styles from './page.module.css';
import MeowArticle from '@/components/MeowArticle';
import clothesImage from 'public/images/clothes.jpg';
import Image from 'next/image';
// export const revalidate = 3;

async function ProductPage() {
  const products = await getProducts();
  const res = await fetch('https://meowfacts.herokuapp.com', {
    next: {
      revalidate: 3, // ssr : 0, isr : 1 이상
    },
    // cache: 'no-store', // ssr
  });
  const data = await res.json();
  const factText = data.data[0];

  return (
    <div>
      <h1>제품 소개 페이지!</h1>
      <Image src={clothesImage} alt='Clothes' priority />
      <ul>
        {products.map(({ id, name }, index) => {
          return (
            <li key={index}>
              <Link href={`/products/${id}`}>{name}</Link>
            </li>
          );
        })}
      </ul>
      {/* isr */}
      <article className={styles.article}>{factText}</article>
      {/* csr */}
      <MeowArticle />
    </div>
  );
}

export default ProductPage;
