import { notFound } from "next/navigation";
import parse from "html-react-parser";
import Header from "../../component/Header";
import { getDetail } from "../../../lib/microcms";
import { renderToc } from "../../../lib/util";

export async function generateMetadata({ params, searchParams }) {
  const post = await getDetail(params.id);
  let meta = {};
  meta.title = post.title + " - TECH 24";

  return meta;
}

export default async function StaticPage({ params }) {
  const post = await getDetail(params.id);

  if (!post) {
    notFound();
  }

  // 目次を作成
  const toc = renderToc(post.content);

  return (
    <>
      <Header />
      <main className="max-w-screen-md container m-auto">
        <div className="text-right text-xl mr-8">
          <p>{post.publishedAt.substring(0, post.publishedAt.indexOf("T"))}</p>
          <p>{post.category.name}</p>
        </div>
        <h1 className="text-center text-3xl my-2 lg:my-8">{post.title}</h1>
        <div>
          <p className="TableOfContentsHead">-目次-</p>
          <ul>
            {toc.map((data) => (
              <li key={data.id}>
                <a href={`#${data.id}`}>{data.text}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className="blog-article">{parse(post.content)}</div>
      </main>
    </>
  );
}
