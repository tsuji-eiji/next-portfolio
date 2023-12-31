import Link from "next/link";
import Pagenate from "./Pagenate";

export default async function StaticPage({list}) {
  const contents = list.contents;
  if (!contents || contents.length === 0) {
    return (
      <div className="text-center">
        <h2>記事が存在しません</h2>
      </div>
    );
  }

  return (
    <div>
      <ul>
        {contents.map((post) => {
          const date = post.publishedAt.substring(0, post.publishedAt.indexOf("T"))
          return (
            <li className="area-border sub-color" key={post.id}>
              <div className="text-sm mx-1 mb-2 flex justify-between">
                <span>{date}</span>
                <Link href={`/category/${post.category.id}`}>{post.category.name}</Link>
              </div>
              <Link className="lg:text-xl lg:p-2" href={`/blog/${post.id}`}>{post.title}</Link>
            </li>
          );
        })}
      </ul>
      <Pagenate list={list} />
    </div>
  );
}