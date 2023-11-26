import Link from "next/link";
import {getAllBlogs} from "../../lib/microcms";
import {groupBy} from "../../lib/util";

export default async function StaticPage() {
  const data = await getAllBlogs();
  const monthlyArchives = groupBy(data);

  return (
    <div className="monthly-archive">
      <h2 className="text-center">月別</h2>
      <ul>
          {Object.keys(monthlyArchives).map((index) => {
            return (
              <li key={index}>
                <Link href={`/archive/${index}`}>{index.split("_")[0] + "年" + index.split("_")[1] + "月"}（{monthlyArchives[index].length}）</Link>
              </li>
            )
          })}
        </ul>
    </div>
  );
}
