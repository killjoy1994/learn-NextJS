import React, { useEffect } from "react";
import { useRouter } from "next/router";

const custom404 = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      console.log("dipanggil setelah 2 detik");
      router.push("/");
    }, 2000);
  }, []);

  return (
    <div>
      <h1 className="not-found-title">Ooooops...</h1>;
      <h1 className="not-found-title">
        Halaman yang anda cari tidak ditemukan...
      </h1>
      ;
    </div>
  );
};

export default custom404;
