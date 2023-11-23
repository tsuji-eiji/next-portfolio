import Link from "next/link";

export default async function StaticPage() {

  return (
    <header>
      <Link href={'/'}>
        <h1 className="text-center">TITLE</h1>
      </Link>
    </header>
  );
}