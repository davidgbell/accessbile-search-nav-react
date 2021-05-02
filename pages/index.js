import Head from 'next/head';
import Link from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div>
          <a href='/'>LOGO</a>
        </div>
        <input type='search' />
        <nav className={styles.nav}>
          <div>
            <a href='/'>About</a>
          </div>
          <div>
            <a href='/'>Contact</a>
          </div>
        </nav>
      </header>
      <main className={styles.main}>
        <ul>
          <li>Item</li>
        </ul>
      </main>
    </div>
  );
}
