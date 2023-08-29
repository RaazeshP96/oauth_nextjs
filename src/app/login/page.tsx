import { NextPage } from "next";
import Link from "next/link";
import React from "react";

const Login: NextPage = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 pt-12">
      <div className="text-orange-300 font-bold text-xl">Login</div>
      <div className="flex">
        <div>Hosted in:</div>
        <Link href="https://oauth-nextjs-tau.vercel.app/" target="_blank">
          Vercel
        </Link>
      </div>
    </main>
  );
};

export default Login;
