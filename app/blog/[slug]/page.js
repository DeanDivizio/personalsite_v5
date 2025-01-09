
import { fetchAPI } from '../../../actions/wordpress'
import { notFound } from 'next/navigation'

export async function generateStaticParams() {
  const data = await fetchAPI(`
    query AllPostsQuery {
      posts(first: 100) {
        nodes {
          slug
        }
      }
    }
  `)

  return data.posts.nodes.map((post) => ({
    slug: post.slug,
  }))
}

export default async function BlogPost(props) {
  const params = await props.params
  const data = await fetchAPI(`
    query PostBySlug($slug: ID!) {
      post(id: $slug, idType: SLUG) {
        title
        content
        featuredImage {
          node {
            sourceUrl
            altText
          }
        }
      }
    }
  `, { variables: { slug: params.slug } })

  if (!data.post) {
    notFound()
  }

  const post = data.post

  return (
    <main className="pageBodyContainer w-screen min-h-[98vh] flex flex-row justify-center items-start ">
      <div className='w-full h-full contentFade xl:pt-16 pb-16 bg-black bg-opacity-65'>
      <article className="pt-32 md:pt-24 px-[10%] md:px-[30%] w-full">
        <h1 className="text-4xl sm:text-6xl mb-8 font-semibold text-white sm:leading-[5rem]">{post.title}</h1>
        {/* <div className="text-offWhite mb-16">
          By Dean Divizio
        </div> */}
        {post.featuredImage && (
          <img 
            src={post.featuredImage.node.sourceUrl} 
            alt={post.featuredImage.node.altText || post.title} 
            className="w-full h-auto mb-8"
          />
        )}
        <div 
          className="prose lg:prose-xl prose-neutral prose-invert max-w-none"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </article>
      </div>
    </main>
  )
}

export const revalidate = 60 * 60 * 24 * 30 //revalidate once a month