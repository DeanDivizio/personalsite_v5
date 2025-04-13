import { fetchAPI } from '../../actions/wordpress'
import Footer from '../../components/Footer';
import { TransLink } from '../../lib/translink';

export default async function BlogLandingPage() {
    const data = await fetchAPI(`
        query HomeQuery {
          posts(first: 10) {
            edges {
              node {
                title
                excerpt
                slug
              }
            }
          }
        }
      `)
      console.log(data.posts.edges);
    return (
        <main>
            <div className="pageBodyContainer w-screen min-h-[98vh] pb-24 flex flex-row justify-center items-start bg-gradient-to-br from-slate to-black" >
                <div className="h-full backdrop-blur-sm flex flex-col">
                    <div className="pt-32 md:pt-48 pb-12 md:pb-24 px-8 text-center flex flex-col justify-center">
                      <h1 className="text-6xl mb-12 2xl:mb-0 text-center font-medium"><span className="text-transparent titleFade bg-clip-text">Blog</span></h1>
                    </div>
                    <div className="contentFade w-full grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 px-4">
                        {data?.posts?.edges?.map(({ node }) => (
                            <TransLink href={`/blog/${node.slug}`} key={node.slug}>
                                <article className="p-8 max-w-xl hover:scale-[102%] transition-all duration-300 bg-gradient-to-br from-neutral-800 to-neutral-950 border-black rounded-lg shadow-lg">
                                    <h2 className="text-2xl font-medium text-white mb-4">{node.title}</h2>
                                    <div className="text-offWhite font-light md:font-normal" dangerouslySetInnerHTML={{ __html: node.excerpt }} />
                                </article>
                            </TransLink>
                        ))}
                    </div>
                </div>
            </div>
        </main>
    )
}

export const revalidate = 600 //revalidate every ten minutes