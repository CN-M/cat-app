// import Layout from '../../components/Layout'
import Layout from '@/components/Layout'
import Link from 'next/link'

import { getAllPostIds, getSinglePost } from '@/../lib/facts'

const getStaticPaths = async () => {
  const paths = await getAllPostIds()
  return {
    paths,
    fallback: false
  }
}

const getStaticProps = async ({ params }) => {
  const { id } = params
  const factData = await getSinglePost(id)
  return {
    props: {
      factData
    }
  }
}

export { getStaticPaths, getStaticProps }

const Fact = ({ factData: { post } }) => {
  const { text, status: { verified } } = post
  return (
    <Layout>
      <h1>{verified.toString()}</h1>
      <p>{text}</p>
      <Link href="/">Home</Link>
    </Layout>
  )
}

export default Fact