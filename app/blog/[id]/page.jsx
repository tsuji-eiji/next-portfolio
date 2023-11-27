import { notFound } from "next/navigation";
import parse from "html-react-parser";
import Header from "../../component/Header";
import { getDetail } from "../../../lib/microcms";

export async function generateMetadata({ params, searchParams }) {
  const post = await getDetail(params.id);
  let meta = {};
  meta.title = post.title + " - TECH 24";

  return meta;
}

export default async function StaticPage({params}) {
  const post = await getDetail(params.id);

  if (!post) {
    notFound();
  }

  return (
    <>
      <Header />
      <main className="container m-auto p-4">
        <h2>{post.title}</h2>
        <div>{parse(post.content)}</div>
      </main>
    </>
  );
}