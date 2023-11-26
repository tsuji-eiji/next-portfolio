import Link from "next/link";

export default async function StaticPage() {

  return (
    <header>
      <Link href={'/'}>
        <h1 className="text-center text-4xl lg:text-6xl py-4">TITLE</h1>
      </Link>
    </header>
  );
}