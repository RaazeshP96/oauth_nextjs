import Header from "@/components/header.component";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div className="text-orange-700">Oauth using next js</div>
      </main>
    </>
  );
}
