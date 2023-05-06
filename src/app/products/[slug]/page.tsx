import { notFound } from "next/navigation";

type Props = {
  params : {
    slug: string;
  }
}

function Pants({params} : Props) {
  if(params.slug === 'nothing') {
    notFound();
  }
  return (
    <div>
      {params.slug} 제품 설명 페이지
    </div>
  );
}

export default Pants;


export function generateStaticParams() {
  const products = ['shirt', 'pants', 'skirt', 'shoes'];

  return products.map(product => ({
    slug: product,
  }));
}