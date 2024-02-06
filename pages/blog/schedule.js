import { getPostBySlug } from 'lib/api'
import Container from 'components/container'

const Schedule = ({ title, publish, contents, eyecatch, categories }) => {
  return <h1>記事のタイトル</h1>
}

export async function getStaticProps () {
  const slug = 'schedule'

  const post = await getPostBySlug(slug)

  return {
    props: {
      title: post.title,
      publish: post.publishDate,
      content: post.content,
      eyecatch: post.eyecatch,
      categories: post.categories
    }
  }
}

export default Schedule
