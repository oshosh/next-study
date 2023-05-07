import { getProducts } from "@/service/products";
import Link from "next/link";

function ProductPage() {
  const products = getProducts();
  return (
    <div>
      제품 소개 페이지!
      <ul>
        {
          products.map((item) => {
            return (
              <li key={item}>
                <Link href={`/products/${item}`}>{item}</Link>
              </li>
            )
          })
        }
      </ul>
    </div>
  );
}

export default ProductPage;