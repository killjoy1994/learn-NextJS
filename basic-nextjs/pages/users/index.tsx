import React from "react";
import Link from "next/link";
import Layout from "../../Components/Layout";

interface UserProps {
  dataUsers: Array<any>;
}

export default function Users(props: UserProps) {
  const { dataUsers } = props;
  console.log(dataUsers);
  return (
    <Layout pageTitle="Users Page">
      {dataUsers.map((user, idx) => {
        return (
          <div key={idx.toString()}>
            <p>{user.name}</p>
            <p>{user.email}</p>
          </div>
        );
      })}
    </Layout>
  );
}

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const dataUsers = await response.json();

  return {
    props: {
      dataUsers,
    },
  };
}
