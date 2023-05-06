
type Props = {
  params : {
    slug: string;
  }
}

function Pants({params} : Props) {
  return (
    <div>
      {params.slug} 바지 제품 설명 페이
    </div>
  );
}

export default Pants;


export function generateStaticParams() {
  const products = ['pants', 'skirt'];
  
  return products.map(product => ({
    slug: product,
  }));
}