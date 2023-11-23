import Link from "next/link";
import { getList } from "../lib/microcms";
import ArticleList from "./component/ArticleList";

export default async function StaticPage() {
  const { contents } = await getList();

  return (
    <ArticleList contents={contents} />
  );
}