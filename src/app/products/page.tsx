import Link from "next/link";

function ProductPage() {
  return (
    <div>
      제품 소개 페이지!
      <ul>
        {
          ['shirt', 'pants', 'skirt', 'shoes'].map((item) => {
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