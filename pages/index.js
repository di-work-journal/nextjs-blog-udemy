import Image from 'next/image';
// import { Inter } from 'next/font/google';
import Link from 'next/link';
// import Head from 'next/head';
import Layout, { siteTitle } from '@/components/Layout';
import styles from '../styles/Home.module.css';
import utliStyles from '../styles/utils.module.css';
import { getPostsData } from '../lib/post';
import Head from 'next/head';

// const inter = Inter({ subsets: ['latin'] });

// SSGの場合
// 以下はNext.Jsの「getStaticProps」特有の書き方
async function getStaticProps() {
  const allPostsData = getPostsData();

  return { props: { allPostsData } };
}

function Home({ allPostsData }) {
  // console.log(allPostsData);
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utliStyles.headingMd}>
        <p>テストのためのダミー文章です。</p>
      </section>
      <section>
        <h2 className={utliStyles.centerText}>📝テスト作成のブログ</h2>
        <div className={styles.grid}>
          {allPostsData.map(({ id, title, date, thumbnail }) => (
            <article key={id} className={utliStyles.centerText}>
              <Link href={`/posts/${id}`}>
                <Image
                  src={thumbnail}
                  alt=""
                  width={640}
                  height={426}
                  className={styles.thumbnailImage}
                />
              </Link>
              <Link legacyBehavior href={`/posts/${id}`}>
                <a className={utliStyles.boldText}>{title}</a>
              </Link>
              <br />
              <small className={utliStyles.lightText}>{date}</small>
            </article>
          ))}
        </div>
      </section>
    </Layout>
  );
}
export default Home;
export { getStaticProps };
