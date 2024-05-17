import Head from 'next/head';
import styles from './layout.module.css';
import utliStyles from '../styles/utils.module.css';
import Image from 'next/image';
import Link from 'next/link';

const name = 'Next.js Code';
export const siteTitle = 'Next.js blog';

function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className={styles.header}>
        {home ? (
          <>
            <Image
              src="/images/profile.png"
              width={72}
              height={72}
              alt=""
              className={`${utliStyles.borderCircle} ${styles.headerHomeImage}`}
            />
            <h1 className={utliStyles.heading2Xl}>{name}</h1>
          </>
        ) : (
          <>
            <Image
              src="/images/profile.png"
              width={72}
              height={72}
              alt=""
              className={utliStyles.borderCircle}
            />
            <h1 className={utliStyles.heading2Xl}>{name}</h1>
          </>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <div>
          <Link href="/">←ホームへ戻る</Link>
        </div>
      )}
    </div>
  );
}

export default Layout;
