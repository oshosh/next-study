import Link from 'next/link';
import './globals.css';
import styles from './layout.module.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <header className={styles.header}>
          <h1>Demo Note App</h1>
          <nav className={styles.nav}>
            <Link href='/products'>products</Link>
            <Link href='/about'>about</Link>
            <Link href='/contact'>Contact</Link>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}
