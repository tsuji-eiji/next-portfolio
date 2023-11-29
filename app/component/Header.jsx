import Link from "next/link";
import { Archivo } from 'next/font/google'

const archivo = Archivo({
  weight: '700',
  subsets: ['latin'],
  style: 'italic',
  display: 'swap',
})


export default async function StaticPage() {

  return (
    <header className={archivo.className}>
      <Link href={'/'}>
        <h1 className="text-center text-4xl lg:text-6xl py-4">TECH 24</h1>
      </Link>
    </header>
  );
}