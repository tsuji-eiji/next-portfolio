import Link from "next/link";
import { getList, getCategoryDetail } from "../../../lib/microcms"
import Header from "../../component/Header";
import ArticleList from "../../component/ArticleList";
import CategoryLinks from "../../component/CategoryLinks";
import WordSearch from "../../component/WordSearch";
import MonthlyArchive from "../../component/MonthlyArchive";

export async function generateMetadata({ params, searchParams }) {
  const category = await getCategoryDetail(params.id);
  let meta = {};
  meta.title = "「" + category.name + "」に関する記事一覧 - TECH 24";

  return meta;
}

export default async function StaticPage({params: {id}}) {
  const { contents } = await getList({filters: `category[equals]${id}`});

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
          <MonthlyArchive />
        </div>
      </main>
    </>
  );
}