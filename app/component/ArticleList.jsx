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
          return (
            <li key={post.id}>
              <Link href={`/blog/${post.id}`}>{post.title}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}