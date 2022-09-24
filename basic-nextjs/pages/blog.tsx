import Link from "next/link";
import Layout from "../Components/Layout";
import styles from "../styles/Blog.module.css";

interface Post {
  id: number;
  title: string;
  body: string;
}

interface BlogProps {
  dataBlog: Post[];
}

const Blog = (props: BlogProps) => {
  const { dataBlog } = props;
  return (
    <Layout pageTitle="Blog Page">
      {dataBlog.map((blog) => {
        return (
          <div key={blog.id} className={styles.card}>
            <p className={styles["blog-title"]}>{blog.title}</p>
            <p>{blog.body}</p>
          </div>
        );
      })}
    </Layout>
  );
};

export default Blog;

export async function getServerSideProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const dataBlog = await response.json();
  return {
    props: {
      dataBlog,
    },
  };
}
