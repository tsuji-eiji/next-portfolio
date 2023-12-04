import { getList } from "../../../lib/microcms"
import Header from "../../component/Header";
import ArticleList from "../../component/ArticleList";
import RightMenu from "../../component/RightMenu";

export async function generateMetadata({ params, searchParams }) {
  const date = params.date;
  let meta = {};
  meta.title = date.split("_")[0] + "年" + date.split("_")[1] + "月の記事一覧 - TECH 24";

  return meta;
}


export default async function StaticPage({params: {date}}) {
  // クエリパラメータから年と月を取得
  const year = date.split("_")[0];
  const month = date.split("_")[1];

  // microCMSのfiltersクエリは >= を表現できないので開始時刻は1ミリ秒引いておく
  const startOfMonthTmp = new Date(year, month - 1, 1);
  const startOfMonth = new Date(startOfMonthTmp.getTime() - 1);
  const endOfMonth = new Date(year, month, 0);

  // filtersクエリで該当月の記事のみを取得
  const filters = `publishedAt[greater_than]${startOfMonth.toISOString()}[and]publishedAt[less_than]${endOfMonth.toISOString()}`;

  const list = await getList({filters: filters});

  return (
    <>
      <Header />
      <main className="container lg:flex lg:justify-center m-auto">
        <div className="lg:w-3/4">
          <h2>{date.split("_")[0] + "年" + date.split("_")[1] + "月"}の記事</h2>
          <ArticleList list={list} />
        </div>
        <RightMenu />
      </main>
    </>
  );
}