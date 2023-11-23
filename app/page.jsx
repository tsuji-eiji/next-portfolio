import Link from "next/link";
import { getList } from "../lib/microcms";
import ArticleList from "./component/ArticleList";
import CategoryLinks from "./component/CategoryLinks";

export default async function StaticPage() {
  const { contents } = await getList();

  return (
    <main>
      <ArticleList contents={contents} />
      <CategoryLinks />
    </main>
  );
}