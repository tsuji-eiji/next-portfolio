import Link from "next/link";
import { Archivo } from "next/font/google";

const archivo = Archivo({
  weight: "700",
  subsets: ["latin"],
  style: "italic",
  display: "swap",
});

export default async function StaticPage() {
  return (
    <header className={archivo.className}>
      <h1 className="text-center text-6xl lg:text-7xl py-4">
        <Link href={"/"}>TECH 24</Link>
      </h1>
    </header>
  );
}
