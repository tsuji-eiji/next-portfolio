import Link from "next/link";
import { getList } from "../lib/microcms";
import Header from "./component/Header";
import ArticleList from "./component/ArticleList";
import CategoryLinks from "./component/CategoryLinks";
import WordSearch from "./component/WordSearch";

export default async function StaticPage({searchParams}) {
  
  const { contents } = await getList(searchParams);

  return (
    <>
      <Header />
      <main className="container lg:flex lg:justify-center m-auto">
        <div className="lg:w-3/4">
          <ArticleList contents={contents} />
        </div>
        <div className="lg:w-1/4">
          <WordSearch />
          <CategoryLinks />
        </div>
      </main>
    </>
  );
}