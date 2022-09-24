import React from "react";
import { useRouter } from "next/router";
import Layout from "../../Components/Layout";

const UserDetail = () => {
  const router = useRouter();
  const { id } = router.query;
  return (
    <Layout pageTitle="user-detaul">
      <div>
        <p>User Detail Page {id}</p>
      </div>
    </Layout>
  );
};

export default UserDetail;
