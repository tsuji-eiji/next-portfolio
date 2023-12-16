export default async function StaticPage({ toc }) {
  if (!toc || toc.length === 0) {
    return <></>;
  }

  return (
    <div className="toc lg:w-3/4 p-4 my-4 mx-auto">
      <p className="TableOfContentsHead text-center">-目次-</p>
      <ul>
        {toc.map((data) => (
          <li className="mt-2" key={data.id}>
            <a className={data.name} href={`#${data.id}`}>
              {data.text}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
