import { notFound } from "next/navigation";
import parse from "html-react-parser";
import { getDetail, getList } from "../../../lib/microcms";

export async function generateStaticParams() {
  const { contents } = await getList();

  const paths = contents.map((post) => {
    return {
      id: post.id,
    };
  });

  return [...paths];
}

export default async function StaticDetailPage({
  params: { id },
}) {
  const post = await getDetail(id);

  if (!post) {
    notFound();
  }

  return (
    <div>
      <h1>{post.title}</h1>
      <div>{parse(post.content)}</div>
    </div>
  );
}