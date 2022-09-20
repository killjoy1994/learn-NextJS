import React from "react";
import Link from "next/link";

const index = () => {
  return (
    <div>
      <p>Users Page</p>
      <Link href="/">
        <a>Back to home</a>
      </Link>
    </div>
  );
};

export default index;
