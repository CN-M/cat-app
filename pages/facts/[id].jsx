import { getAllPostIds, getSinglePost } from '@/../lib/facts'

const getStaticPaths = async () => {
  const paths = await getAllPostIds()
  // console.log(paths)
  return {
    paths,
    // paths: [{ params : { id: '58e008800aac31001185ed07' } },
    // { params : { id: '58e008630aac31001185ed01' } },
    // { params : { id: '58e00a090aac31001185ed16' } },
    // { params : { id: '58e009390aac31001185ed10' } },
    // { params : { id: '58e008780aac31001185ed05' } },],
    fallback: false
  }
}

const getStaticProps = async ({ params }) => {
  const { id } = params
  const factData = await getSinglePost(id)
  console.log(factData)
  return {
    props: {
      factData
    }
  }
}

export { getStaticPaths, getStaticProps }

const Fact = ({ factData: { post } }) => {
  console.log(post)
  return (
    <div>{post.text}</div>
  )
}

export default Fact