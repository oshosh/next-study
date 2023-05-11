'use client';
import { useEffect, useState } from 'react';
import styles from './MeowArticle.module.css';

export default function MeowArticle() {
  const [text, setText] = useState('데이터 준비중....');
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const res = await fetch('https://meowfacts.herokuapp.com', {
      next: {
        revalidate: 3, // ssr : 0, isr : 1 이상
      },
      // cache: 'no-store', // ssr
    });
    const data = await res.json();
    const factText = data.data[0];

    setText(factText);
  };

  return <article className={styles.article}>{text}</article>;
}
