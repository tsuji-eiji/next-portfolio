import Link from "next/link";

export default async function StaticPage({contents}) {
  if (!contents || contents.length === 0) {
    return (
      <div>
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
            <li className="area-border" key={post.id}>
              <div className="text-sm mx-1 mb-2 flex justify-between">
                <span>{date}</span>
                <Link className="lg:text-xl lg:p-2" href={`/category/${post.category.id}`}>{post.category.name}</Link>
              </div>
              <Link className="lg:text-xl lg:p-2" href={`/blog/${post.id}`}>{post.title}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}