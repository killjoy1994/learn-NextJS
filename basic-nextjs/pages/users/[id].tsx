import React from "react";
import { useRouter } from "next/router";

const UserDetail = () => {
  const router = useRouter();
  const { id } = router.query;
  return (
    <div>
      <p>User Detail Page {id}</p>
    </div>
  );
};

export default UserDetail;
