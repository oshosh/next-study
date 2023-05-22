'use client';

import { useRouter } from 'next/navigation';

export default function GoProductButton() {
  const router = useRouter();

  const handleClickGoProducts = () => {
    router.push('/products');
  };

  return (
    <>
      <button onClick={handleClickGoProducts}>제품 페이지 이동</button>
    </>
  );
}
