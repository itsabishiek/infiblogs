import Head from "next/head";
import { getPosts } from "../services";
import PostCard from "../components/postCard/PostCard";
import PostWidget from "../components/postWidget/PostWidget";
import Categories from "../components/categories/Categories";
import FeaturedPosts from "../sections/featuredPost/FeaturedPosts";

export default function Home({ title = "InfiBlogs", posts }) {
  // console.log(posts);

  return (
    <div className="container">
      <Head>
        <title>{title}</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <FeaturedPosts />

      <div className="home">
        <div className="home-left">
          {posts.reverse().map((post, i) => (
            <div key={i} className="home-posts">
              <PostCard post={post.node} />
            </div>
          ))}
        </div>

        <div className="home-right">
          <div>
            <Categories />
            <PostWidget />
          </div>
        </div>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const posts = (await getPosts()) || [];

  return {
    props: { posts },
  };
}
