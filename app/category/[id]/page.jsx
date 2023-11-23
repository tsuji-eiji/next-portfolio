import Link from "next/link";
import { getList } from "../../../lib/microcms"
import Header from "../../component/Header";
import ArticleList from "../../component/ArticleList";
import CategoryLinks from "../../component/CategoryLinks";

export default async function StaticPage({params: {id}}) {
  const { contents } = await getList({filters: `category[equals]${id}`});
  console.log(id);

  return (
    <>
      <Header />
      <main className="flex justify-center mx-48">
        <div className="w-3/4">
          <ArticleList contents={contents} />
        </div>
        <div className="w-1/4">
          <CategoryLinks />
        </div>
      </main>
    </>
  );
}