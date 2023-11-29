import Link from "next/link";
import { getList } from "../lib/microcms";
import Header from "./component/Header";
import ArticleList from "./component/ArticleList";
import CategoryLinks from "./component/CategoryLinks";
import WordSearch from "./component/WordSearch";
import MonthlyArchive from "./component/MonthlyArchive";

export async function generateMetadata({ params, searchParams }) {
  let meta = {};
  // 検索ワードの有無でタイトルを変更
  if (searchParams.q === undefined) {
    meta.title = 'TECH 24';
  } else {
    meta.title = `「${searchParams.q}」の検索結果 - TECH 24`;
  }

  return meta;
}

export default async function StaticPage({searchParams}) {
  
  // const { contents } = await getList(searchParams);

  return (
    <>
      <Header />
      <main className="container lg:flex lg:justify-center m-auto">
        <div className="lg:w-3/4">
          {/* <ArticleList contents={contents} /> */}
        </div>
        <div className="lg:w-1/4">
          <WordSearch />
          <CategoryLinks />
          <MonthlyArchive />
        </div>
      </main>
    </>
  );
}