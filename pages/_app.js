import React from "react";
import Layout from "../components/Layout";

import "../styles/globals.css";
import "../styles/Home.css";
import "../styles/PostDetails.css";
import "../styles/CategoryPost.css";
import "../components/header/Header.css";
import "../components/postCard/PostCard.css";
import "../components/categories/Categories.css";
import "../components/postWidget/PostWidget.css";
import "../components/blogPosts/BlogPosts.css";
import "../components/postDetail/PostDetail.css";
import "../components/author/Author.css";
import "../components/commentForm/CommentForm.css";
import "../components/comments/Comments.css";
import "../components/featuredPostCard/FeaturedPostCard.css";
import "../components/adjacentPostCard/AdjacentPostCard.css";
import "../sections/featuredPost/FeaturedPosts.css";
import "../sections/adjacentPosts/AdjacentPosts.css";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
