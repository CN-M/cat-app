import Image from 'next/image'

import { Inter } from '@next/font/google'
const inter = Inter({ subsets: ['latin'] })

import styles from '@/styles/Home.module.css'
import Layout from '@/components/Layout'

import { getFactData } from '../lib/facts'

const getStaticProps = async () => {
  const catData = await getFactData()
  return {
    props: {
      catData
    }
  }
}

export { getStaticProps }

export default function Home({ catData }) {
  return (
    <Layout>
        <div className={styles.description}>
          <p>
            Get started by editing&nbsp;
            <code className={styles.code}>pages/index.tsx</code>
          </p>
          <div>
            <a
              href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              By{' '}
              <Image
                src="/vercel.svg"
                alt="Vercel Logo"
                className={styles.vercelLogo}
                width={100}
                height={24}
                priority
              />
            </a>
          </div>
        </div>
        <div className={styles.grid}>
          {
            catData.map((fact) => (
              <a  
                href={`/facts/${fact._id}`}
                className={styles.card}
                target="_blank"
                rel="noopener noreferrer"
                key={fact._id}
                >
                  <h2 className={inter.className}>
                    Status: {String(fact.status.verified).toUpperCase()}
                  </h2>
                  <p className={inter.className}>
                    {fact.text}
                  </p>
              </a>
              ))
            }
          </div>
          <div className="random-div" />
      </Layout>
  )
}
