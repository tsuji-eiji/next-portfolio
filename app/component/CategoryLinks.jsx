import Link from "next/link";
import { getCategories } from "../../lib/microcms";

export default async function StaticPage() {
  // 全カテゴリを抽出
  let categories = [];
  const all = await getCategories();
  const parents = all.filter((category) => category.parent === null)
  
  parents.forEach((parent) => {
    categories.push(parent);
    all.forEach(element => {
      if (element.parent !== null && element.parent.id === parent.id) {
        categories.push(element);
      }
    });
  })

  return (
    <div className="area-border">
      <h2 className="menu-header">Category</h2>
      <ul className="px-4">
        {categories.map((category) => {
          if (category.parent === null) {
            return (
              <li key={category.id}>
                <p>{category.name}</p>
              </li>
            );
          } else {
            return (
              <li key={category.id}>
                <Link className="ml-4" href={`/category/${category.id}`}>{category.name}</Link>
              </li>
            );
          }
        })}
      </ul>
    </div>
  );
}