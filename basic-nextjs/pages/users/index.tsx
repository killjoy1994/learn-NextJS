import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Layout from "../../Components/Layout";
import styles from "./Users.module.css";

interface UserProps {
  dataUsers: Array<any>;
}

export default function Users(props: UserProps) {
  const router = useRouter();

  const { dataUsers } = props;
  console.log(dataUsers);
  return (
    <Layout pageTitle="Users Page">
      {dataUsers.map((user, idx) => {
        return (
          <div
            className={styles.card}
            key={user.id}
            onClick={() => router.push(`/users/${user.id}`)}
          >
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
