import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex text-white bg-black min-h-screen px-6 flex-col items-center justify-center py-24 ">
 <Image alt="ss" src="/images/ss.png" width={100} height={100} className="w-full h-auto cover rounded-xl"/>
    <h1 className="text-xs font-light"></h1>
    </main>
  );
}
