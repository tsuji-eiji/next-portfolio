import { getCategories } from "../../lib/microcms";

export default async function StaticPage() {
  const categories = [];
  // 親カテゴリを抽出
  const parents = await getCategories({ filters: 'parent[not_exists]' });
  for (const parent of parents) {
    // 出力用リストに親カテゴリを追加
    categories.push(parent);
    // 子カテゴリを抽出
    const children = await getCategories({ filters: 'parent[equals]' + parent.id });
    // 出力用リストに子カテゴリを追加
    children.forEach(child => {categories.push(child)});
  }

  return (
    <div>
      <h2>カテゴリ一覧</h2>
      <ul>
        {categories.map((category) => {
          if (category.parent === null) {
            return (
              <li className="bg-gray-800" key={category.id}>
                <p>{category.name}</p>
              </li>
            );
          } else {
            return (
              <li className="bg-gray-400" key={category.id}>
                <p>{category.name}</p>
              </li>
            );
          }
        })}
      </ul>
    </div>
  );
}