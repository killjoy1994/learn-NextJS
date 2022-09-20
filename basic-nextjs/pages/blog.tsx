import Link from "next/link";

const Blog = () => {
  return (
    <div>
      <p>Blog Page</p>
      <Link href="/">
        <a>Back to home</a>
      </Link>
    </div>
  );
};

export default Blog;
