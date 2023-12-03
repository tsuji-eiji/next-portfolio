import Link from "next/link";
import { getList, getCategoryDetail } from "../../../lib/microcms"
import Header from "../../component/Header";
import ArticleList from "../../component/ArticleList";
import RightMenu from "../../component/RightMenu";

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
        <RightMenu />
      </main>
    </>
  );
}