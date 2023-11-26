import { notFound } from "next/navigation";
import parse from "html-react-parser";
import Header from "../../component/Header";
import { getDetail } from "../../../lib/microcms";


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